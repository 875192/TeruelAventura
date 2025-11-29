<?php
/**
 * Configuración centralizada de conexión a la base de datos.
 *
 * Ajusta las constantes siguientes con los parámetros de tu entorno.
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'teruel-aventura');
define('DB_USER', 'root');
define('DB_PASS', '');

/**
 * Devuelve una instancia PDO conectada a MySQL.
 *
 * La conexión utiliza UTF-8, gestiona los errores con excepciones
 * y está lista para ser reutilizada en cualquier punto del proyecto.
 * Si la conexión falla, se devuelve null y el error se registra
 * discretamente en el log de PHP para evitar exponer detalles sensibles.
 */
function obtenerConexionPDO(): ?PDO
{
    static $conexion = null;

    if ($conexion instanceof PDO) {
        return $conexion;
    }

    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', DB_HOST, DB_NAME);

    try {
        $conexion = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $e) {
        error_log('Error de conexión a la base de datos: ' . $e->getMessage());
        $conexion = null;
    }

    return $conexion;
}

?>
