<?php
require_once __DIR__ . '/conexion.php';
$pdo = obtenerConexionPDO();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conoce Teruel - Teruel Aventura</title>
    <meta name="keywords" content="Teruel, turismo, historia, mudéjar, patrimonio">
    <meta name="description" content="Descubre la historia y el patrimonio de Teruel - Arte mudéjar Patrimonio de la Humanidad">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <!-- Style CSS -->
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <!-- Responsive -->
    <link rel="stylesheet" href="css/responsive.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
    <!-- Teruel Aventura Custom Styles -->
    <link rel="stylesheet" type="text/css" href="css/teruel-aventura.css">
</head>

<body>
    <!-- Header Section -->
      <header class="seccion-cabecera">
         <nav class="navbar navbar-expand-lg navbar-custom">
            <div class="container-fluid px-4">
               <div class="d-flex align-items-center">
                  <a href="index.php">
                     <img src="images/logo-empresa.png" alt="Logo Teruel Aventura" class="imagen-logo">
                  </a>
               </div>
               
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                  <span class="navbar-toggler-icon"></span>
               </button>
               
               <div class="collapse navbar-collapse navbar-collapse-custom" id="navbarNav">
                  <ul class="navbar-nav">
                     <li class="nav-item">
                        <a class="nav-link" href="conoce-teruel.php">CONOCE TERUEL</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="que-hacer.php">QUÉ HACER</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="organiza-viaje.php">ORGANIZA TU VIAJE</a>
                     </li>
                  </ul>
               </div>
               
               <!-- User Profile Button -->
               <a class="boton-perfil-usuario d-none d-lg-flex" href="perfil.php">
                  <i class="fa fa-user"></i>MI PERFIL
               </a>
            </div>
         </nav>
      </header>

    <!-- Hero Section -->
    <section class="seccion-hero hero-conoce-teruel">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <h1 class="titulo-hero">Conoce Teruel</h1>
                    <p class="subtitulo-hero">Una joya del arte medieval donde el mudéjar alcanza su máxima expresión</p>
                    <a href="#contenido" class="btn-base btn-rectangular btn-borde btn-hover-invertir btn-blanco">Descubre la Ciudad</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contenido Principal -->
    <section class="content-section" id="contenido">
        <div class="container">
            <!-- Introducción -->
            <div class="intro-text">
                <p>Teruel es considerada una <span class="highlight">joya del arte medieval</span>. Su existencia se remonta a la época celtibérica, cuando era conocida como <strong>"Turba"</strong>. Durante la dominación musulmana pasó a llamarse <strong>"Tirwal"</strong>.</p>
                <p>Fue <span class="highlight">Alfonso II</span> quien en el siglo XII dotó a la ciudad de un castillo (cedido primero a la Orden del Redentor y después a los Templarios) y de una gran muralla con siete puertas, sentando las bases de lo que sería una de las ciudades más singulares de España.</p>
            </div>

            <!-- Patrimonio UNESCO -->
            <div class="highlight-section">
                <h3>Patrimonio de la Humanidad UNESCO</h3>
                <p>En 1986, la UNESCO declaró el <strong>Arte Mudéjar de Teruel</strong> como Patrimonio Mundial de la Humanidad, reconociendo su valor excepcional y universal.</p>
                <p>Este reconocimiento incluye la torre, techumbre y cimborrio de la Catedral de Santa María de Mediavilla, la torre e iglesia de San Pedro, la torre de la iglesia del Salvador y la torre de la iglesia de San Martín.</p>
            </div>

            <!-- Título de sección -->
            <div class="section-title">
                <h2>El Arte Mudéjar: Un Tesoro Único</h2>
            </div>
            <p class="section-subtitle">Un estilo arquitectónico exclusivo de la Península Ibérica</p>

            <!-- Tarjetas sobre el mudéjar -->
            <div class="info-cards">
                <div class="info-card">
                    <div class="icon-wrapper">
                        <img src="images/plazaTorico.jpg" alt="Estilo Único">
                    </div>
                    <h3>Estilo Único</h3>
                    <p>El mudéjar surge de la fusión de las tradiciones culturales y artísticas cristianas e islámicas, alcanzando su periodo de esplendor en la época medieval, entre los siglos XII y XVI.</p>
                </div>

                <div class="info-card">
                    <div class="icon-wrapper">
                        <img src="images/teruelPueblo.jpeg" alt="Materiales Nobles">
                    </div>
                    <h3>Materiales Nobles</h3>
                    <p>Caracterizado por la utilización del barro cocido como principal elemento constructivo, que se engrandece gracias a una profusa decoración de cerámica vidriada pintada en blanco, verde y azul.</p>
                </div>

                <div class="info-card">
                    <div class="icon-wrapper">
                        <img src="images/Teruel-mudejar-7.jpg" alt="Decoración Exquisita">
                    </div>
                    <h3>Decoración Exquisita</h3>
                    <p>Motivos geométricos como rombos y paños de sebka, junto con excepcionales techumbres decoradas con pinturas que ilustran la sociedad medieval turolense del siglo XIII.</p>
                </div>
            </div>

            <!-- Torres Mudéjares -->
            <div class="section-title">
                <h2>Las Torres Mudéjares de Teruel</h2>
            </div>
            <p class="section-subtitle">Joyas arquitectónicas que definen el skyline de la ciudad</p>

            <div class="torres-grid">
                <div class="torre-card">
                    <div class="icon-wrapper">
                        <img src="images/torre_del_salvador_2.jpg" alt="Torre del Salvador">
                    </div>
                    <h4>Torre del Salvador</h4>
                    <span class="fecha">Segunda década s. XIV</span>
                    <p>La torre más tardía del mudéjar turolense. Se eleva sobre una bóveda de crucería y presenta un mayor desarrollo decorativo que las anteriores, reflejando su construcción posterior.</p>
                </div>

                <div class="torre-card">
                    <div class="icon-wrapper">
                        <img src="images/03cteruel024.jpg" alt="Torre de la Catedral">
                    </div>
                    <h4>Torre de la Catedral</h4>
                    <span class="fecha">1257-1258</span>
                    <p>Construida junto con la impresionante techumbre de la Catedral, considerada "La Capilla Sixtina" del arte mudéjar, con 32 metros de pinturas medievales.</p>
                </div>

                <div class="torre-card">
                    <div class="icon-wrapper">
                        <img src="images/T1.jpg" alt="Torre de San Martín">
                    </div>
                    <h4>Torre de San Martín</h4>
                    <span class="fecha">1315-1316</span>
                    <p>Ejemplo de la tipología de torre alminar almohade. Posee dos torres concéntricas con pasillos y escaleras que conducen al campanario, con una espectacular decoración exterior.</p>
                </div>

                <div class="torre-card torre-wide">
                    <div class="icon-wrapper">
                        <img src="images/Teruel_02.jpg" alt="Torre de San Pedro">
                    </div>
                    <h4>Torre e Iglesia de San Pedro</h4>
                    <span class="fecha">Siglo XIII</span>
                    <p>La más antigua de las torres mudéjares de Teruel. Forma parte del conjunto del Mausoleo de los Amantes y representa el origen de la arquitectura mudéjar en la ciudad.</p>
                </div>
            </div>

            <!-- Sección Historia -->
            <div class="historia-section">
                <h2>Momentos Relevantes de la Historia de Teruel</h2>

                <div class="periodo-historico">
                    <h3><i class="fa fa-circle"></i> Fundación y Época Medieval</h3>
                    <p>La ciudad de Teruel fue fundada en 1171 por el rey Alfonso II de Aragón. Durante los siglos XIII y XIV, la ciudad vivió su época de mayor esplendor mudéjar, cuando se construyeron sus emblemáticas torres y la magnífica techumbre de la Catedral. La convivencia entre cristianos, musulmanes y judíos dio lugar a este extraordinario patrimonio artístico.</p>
                </div>

                <div class="periodo-historico">
                    <h3><i class="fa fa-circle"></i> Siglo XIX: Guerra y Prosperidad</h3>
                    <p>El siglo XIX fue rico en acontecimientos. Durante la Guerra de la Independencia, la ciudad fue ocupada por las fuerzas francesas hasta 1813. En las guerras carlistas, Teruel se alineó con el bando liberal y sus murallas aguantaron diversos asedios.</p>
                    <p>A finales de este siglo y principios del XX, como consecuencia del desarrollo de la burguesía local, la ciudad conoció un periodo de prosperidad económica. Fruto de este enriquecimiento es el rico patrimonio modernista que la ciudad posee, con edificios como la Escalinata neomudéjar, construida entre 1920-1921.</p>
                </div>

                <div class="periodo-historico">
                    <h3><i class="fa fa-circle"></i> Guerra Civil y Reconstrucción</h3>
                    <p>Durante la Guerra Civil de 1936-39, Teruel fue escenario de una de las batallas más sangrientas del conflicto. Los acontecimientos bélicos, unidos a las bajas temperaturas del invierno, dejaron cicatrices profundas en ambos bandos.</p>
                    <p>Tras la guerra se iniciaron los trabajos de reconstrucción que modificaron parcialmente el urbanismo de la ciudad. Con la llegada de la democracia, Teruel ha trabajado para incorporarse al crecimiento económico del país con el desarrollo de las comunicaciones.</p>
                </div>
            </div>

            <!-- Modernismo -->
            <div class="section-title">
                <h2>Más Allá del Mudéjar</h2>
            </div>
            <p class="section-subtitle">El legado modernista de Teruel</p>

            <div class="info-cards">
                <div class="info-card">
                    <div class="icon-wrapper">
                        <img src="images/Escalinata-Teruel.jpg" alt="La Escalinata">
                    </div>
                    <h3>La Escalinata</h3>
                    <p>Construida entre 1920-1921 por José Torán de la Rad para comunicar el centro histórico con la estación de ferrocarril. Combina elementos del mudéjar y el modernismo, salvando 26 metros de desnivel en un recorrido bellamente decorado.</p>
                </div>

                <div class="info-card">
                    <div class="icon-wrapper">
                        <img src="images/modernista.jpg" alt="Arquitectura Modernista">
                    </div>
                    <h3>Arquitectura Modernista</h3>
                    <p>En torno a la Plaza del Torico se concentran grandes edificios modernistas restaurados como Casa El Torico, Casa La Madrileña, Casa Bayo y Casa Ferrán, testimonio de la prosperidad de principios del siglo XX.</p>
                </div>

                <div class="info-card">
                    <div class="icon-wrapper">
                        <img src="images/AMANTES.webp" alt="Los Amantes de Teruel">
                    </div>
                    <h3>Los Amantes de Teruel</h3>
                    <p>La legendaria historia de amor entre Diego de Marcilla e Isabel de Segura, que data del siglo XIII, ha convertido a Teruel en la ciudad del amor eterno. Su mausoleo es uno de los lugares más visitados de la ciudad.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
      <section class="seccion-cta-arriba">
         <div class="container">
            <h3 class="titulo-cta">¿Listo para tu aventura en Teruel?</h3>
            <p class="texto-cta">Contacta con nosotros y diseñaremos el viaje perfecto para ti</p>
            <a href="#contacto" class="btn-base btn-rectangular btn-borde btn-hover-invertir btn-blanco">Contactar Ahora</a>
         </div>
      </section>

      <!-- Footer Section -->
      <footer class="seccion-cta-abajo" id="contacto">
         <div class="container">
            <div class="row">
               <div class="col-lg-4 col-md-6">
                  <div class="info-footer">
                     <h5>Teruel Aventura</h5>
                     <p>Tu agencia de viajes especializada en descubrir todos los encantos de la provincia de Teruel.</p>
                     <div class="enlaces-sociales">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                     </div>
                  </div>
               </div> 
               <div class="col-lg-4 col-md-6">
                  <div class="info-footer">
                     <h5>Contacto</h5>
                     <p><i class="fa fa-map-marker"></i> C/ Atarazana, 2, 44003 Teruel</p>
                     <p><i class="fa fa-phone"></i> +34 000 000 000</p>
                     <p><i class="fa fa-envelope"></i> info@teruelaventura.com</p>
                  </div>
               </div>
               <div class="col-lg-4 col-md-6">
                  <div class="info-footer">
                     <h5>Enlaces Útiles</h5>
                     <ul>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Blog de Viajes</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <hr class="linea-footer">
            <div class="row">
               <div class="col-12 text-center">
                  <p>&copy; 2025 Teruel Aventura. Todos los derechos reservados.</p>
               </div>
            </div>
         </div>
      </footer>


    <!-- Javascript files -->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/teruel-aventura.js"></script>
</body>
</html>