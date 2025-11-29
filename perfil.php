<?php
session_start();
require_once __DIR__ . '/conexion.php';

/*
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    activo TINYINT(1) NOT NULL DEFAULT 1
);
*/

/**
 * Devuelve una respuesta JSON y detiene la ejecución.
 */
function responderJson(array $payload, int $status = 200): void
{
    header('Content-Type: application/json');
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

// Si la petición es de navegador tradicional, redirige a la vista HTML del perfil.
$isJsonRequest = isset($_SERVER['CONTENT_TYPE']) && stripos($_SERVER['CONTENT_TYPE'], 'application/json') === 0;
$isAjax = $isJsonRequest || (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest');
if ($_SERVER['REQUEST_METHOD'] === 'GET' && !$isAjax) {
    header('Location: perfil.html');
    exit;
}

$input = $isJsonRequest ? json_decode(file_get_contents('php://input'), true) : null;
$datos = is_array($input) ? $input : $_POST;
$accion = $datos['accion'] ?? ($_GET['accion'] ?? '');

$pdo = obtenerConexionPDO();
if (!$pdo) {
    responderJson([
        'ok' => false,
        'mensaje' => 'No se pudo conectar con la base de datos. Revisa la configuración en conexion.php.',
    ], 500);
}

$usuarioSesion = $_SESSION['usuario'] ?? null;

// Permitir consultar el usuario actual sin acciones adicionales.
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $accion === '') {
    responderJson([
        'ok' => true,
        'usuario' => $usuarioSesion,
    ]);
}

$mensaje = 'Operación no reconocida.';
$tipoMensaje = 'danger';

try {
    switch ($accion) {
        case 'registro':
            $nombre = trim($datos['nombre'] ?? '');
            $email = trim($datos['email'] ?? '');
            $password = $datos['password'] ?? '';

            if ($nombre === '' || $email === '' || $password === '') {
                $mensaje = 'Todos los campos son obligatorios para registrar una cuenta.';
                break;
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $mensaje = 'El correo electrónico no tiene un formato válido.';
                $tipoMensaje = 'warning';
                break;
            }

            $consulta = $pdo->prepare('SELECT id_usuario FROM usuarios WHERE email = :email');
            $consulta->execute(['email' => $email]);
            if ($consulta->fetch()) {
                $mensaje = 'Ya existe una cuenta con este correo electrónico.';
                $tipoMensaje = 'warning';
                break;
            }

            $passwordHash = password_hash($password, PASSWORD_DEFAULT);
            $insert = $pdo->prepare('INSERT INTO usuarios (nombre, email, password, fecha_registro, activo) VALUES (:nombre, :email, :password, NOW(), 1)');
            $insert->execute([
                'nombre' => $nombre,
                'email' => $email,
                'password' => $passwordHash,
            ]);

            $_SESSION['usuario'] = [
                'id' => (int)$pdo->lastInsertId(),
                'nombre' => $nombre,
                'email' => $email,
            ];
            $usuarioSesion = $_SESSION['usuario'];
            $mensaje = 'Cuenta creada exitosamente.';
            $tipoMensaje = 'success';
            break;

        case 'login':
            $email = trim($datos['email'] ?? '');
            $password = $datos['password'] ?? '';

            if ($email === '' || $password === '') {
                $mensaje = 'Debes introducir usuario y contraseña para iniciar sesión.';
                $tipoMensaje = 'warning';
                break;
            }

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $mensaje = 'Introduce un correo electrónico válido.';
                $tipoMensaje = 'warning';
                break;
            }

            $consulta = $pdo->prepare('SELECT id_usuario, nombre, email, password, fecha_registro FROM usuarios WHERE email = :email AND activo = 1');
            $consulta->execute(['email' => $email]);
            $usuario = $consulta->fetch();

            if (!$usuario || !password_verify($password, $usuario['password'])) {
                $mensaje = 'Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.';
                break;
            }

            $_SESSION['usuario'] = [
                'id' => (int)$usuario['id_usuario'],
                'nombre' => $usuario['nombre'],
                'email' => $usuario['email'],
                'fecha_registro' => $usuario['fecha_registro'] ?? null,
            ];
            $usuarioSesion = $_SESSION['usuario'];
            $mensaje = 'Has iniciado sesión correctamente.';
            $tipoMensaje = 'success';
            break;

        case 'editar':
            if (!$usuarioSesion) {
                $mensaje = 'Debes iniciar sesión para editar tu perfil.';
                $tipoMensaje = 'warning';
                break;
            }

            $nuevoNombre = trim($datos['nombre'] ?? '');
            $nuevoEmail = trim($datos['email'] ?? '');

            if ($nuevoNombre === '' || $nuevoEmail === '') {
                $mensaje = 'El nombre y el correo electrónico son obligatorios.';
                break;
            }

            $consulta = $pdo->prepare('SELECT id_usuario FROM usuarios WHERE email = :email AND id_usuario != :id');
            $consulta->execute(['email' => $nuevoEmail, 'id' => $usuarioSesion['id']]);
            if ($consulta->fetch()) {
                $mensaje = 'El correo electrónico ya está en uso por otra cuenta.';
                $tipoMensaje = 'warning';
                break;
            }

            $update = $pdo->prepare('UPDATE usuarios SET nombre = :nombre, email = :email WHERE id_usuario = :id');
            $update->execute([
                'nombre' => $nuevoNombre,
                'email' => $nuevoEmail,
                'id' => $usuarioSesion['id'],
            ]);

            $_SESSION['usuario']['nombre'] = $nuevoNombre;
            $_SESSION['usuario']['email'] = $nuevoEmail;
            $usuarioSesion = $_SESSION['usuario'];
            $mensaje = 'Perfil actualizado correctamente.';
            $tipoMensaje = 'success';
            break;

        case 'eliminar':
            if (!$usuarioSesion) {
                $mensaje = 'No hay sesión activa que eliminar.';
                $tipoMensaje = 'warning';
                break;
            }

            $delete = $pdo->prepare('DELETE FROM usuarios WHERE id_usuario = :id');
            $delete->execute(['id' => $usuarioSesion['id']]);
            session_destroy();
            $usuarioSesion = null;
            $mensaje = 'Cuenta eliminada correctamente.';
            $tipoMensaje = 'success';
            break;

        case 'logout':
            session_destroy();
            $usuarioSesion = null;
            $mensaje = 'Sesión cerrada correctamente.';
            $tipoMensaje = 'info';
            break;
    }
} catch (PDOException $e) {
    error_log('Error en operación de usuario: ' . $e->getMessage());
    $mensaje = 'Ocurrió un problema al procesar tu solicitud. Inténtalo de nuevo más tarde.';
    $tipoMensaje = 'danger';
}

responderJson([
    'ok' => $tipoMensaje === 'success' || $tipoMensaje === 'info',
    'mensaje' => $mensaje,
    'usuario' => $usuarioSesion,
]);
