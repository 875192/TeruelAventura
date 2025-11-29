<?php
require_once __DIR__ . '/conexion.php';
$pdo = obtenerConexionPDO();
?>
<!DOCTYPE html>
<html lang="es">
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- site metas -->
      <title>Teruel Aventura - Agencia de Viajes</title>
      <meta name="keywords" content="Teruel, turismo, viajes, agencia, mudéjar, dinosaurios">
      <meta name="description" content="Descubre Teruel con nosotros - Tu agencia de viajes especializada en turismo turolense">
      <meta name="author" content="Teruel Aventura">
      <!-- bootstrap css -->
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="css/responsive.css">
      <!-- fevicon -->
      <link rel="icon" href="images/fevicon.png" type="image/gif" />
      <!-- Scrollbar Custom CSS -->
      <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
      <!-- Font Awesome -->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
      <!-- owl stylesheets --> 
      <link rel="stylesheet" href="css/owl.carousel.min.css">
      <link rel="stylesheet" href="css/owl.theme.default.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
      <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
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
      <section class="seccion-hero">
         <div class="container">
            <div class="row">
               <div class="col-lg-8 mx-auto">
                  <h1 class="titulo-hero">Descubre Teruel</h1>
                  <p class="subtitulo-hero">La provincia que lo tiene todo: historia, naturaleza, gastronomía y aventura</p>
                  <a href="#servicios" class="btn-base btn-rectangular btn-borde btn-hover-invertir btn-blanco">Te Proponemos...</a>
               </div>
            </div>
         </div>
         
         <!-- Scroll Indicator -->
         <div class="indicador-scroll" onclick="scrollToServices()">
            <div class="texto-scroll">DESLIZA</div>
            <div class="flecha-scroll"></div>
         </div>
      </section>

      <!-- Services Section -->
      <section class="seccion-servicios" id="servicios">
         <div class="container">
            <div class="titulo-seccion">
               <h2>Nuestros Servicios</h2>
               <p>Teruel está más cerca de lo que imaginas, pero lleno de maravillas por descubrir. Vivimos en un mundo que se mueve rápido —lleno de destinos, ofertas y ruido—. Pero viajar no consiste en marcar casillas, sino en sentir algo real. Ahí es donde entramos nosotros. Somos exploradores, narradores y soñadores que creemos que cada viaje a Teruel debe ser inolvidable. Desde sus calles medievales hasta sus paisajes infinitos, diseñamos experiencias que van más allá del viaje: conectan con el alma del lugar.</p>
               <p>Así que empecemos. Redescubramos Teruel, juntos.</p>
               <a href="organiza-viaje.php" class="btn-base btn-rectangular btn-borde btn-hover-invertir btn-azul">Organiza tu viaje</a>
            </div>
            <div class="row">
               <div class="col-lg-3 col-md-6">
                  <div class="tarjeta-servicio">
                     <div class="icono-servicio">
                        <i class="fa fa-map-marker"></i>
                     </div>
                     <h4>Rutas Guiadas</h4>
                     <p>Descubre los rincones más especiales de Teruel con nuestros guías expertos locales.</p>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="tarjeta-servicio">
                     <div class="icono-servicio">
                        <i class="fa fa-home"></i>
                     </div>
                     <h4>Alojamiento</h4>
                     <p>Desde casas rurales hasta hoteles con encanto en los mejores lugares de la provincia.</p>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="tarjeta-servicio">
                     <div class="icono-servicio">
                        <i class="fa fa-cutlery"></i>
                     </div>
                     <h4>Gastronomía</h4>
                     <p>Disfruta del jamón de Teruel, la trufa y toda la riqueza culinaria de la región.</p>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="tarjeta-servicio">
                     <div class="icono-servicio">
                        <i class="fa fa-calendar"></i>
                     </div>
                     <h4>Eventos</h4>
                     <p>Vive las fiestas del Ángel, la Vaquilla del Ángel y otros eventos únicos de Teruel.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Destinations Section -->
      <section class="destinations-section" id="destinos">
         <div class="container">
            <!-- Título centrado arriba -->
            <div class="titulo-seccion">
               <h2>Explora Teruel</h2>
            </div>
            
            <!-- Tres tarjetas centradas en fila -->
            <div class="row justify-content-center">
               <!-- Tarjeta 1: Casco Histórico -->
               <div class="col-lg-4 col-md-6 mb-4">
                  <a href="organiza-viaje.php" class="tarjeta-destino">
                     <div class="imagen-destino imagen-destino-torico">
                        <div class="gradiente-destino"></div>
                        <div class="contenido-destino">
                           <h3 class="titulo-destino">Guía Definitiva: Casco Histórico de Teruel</h3>
                           <div class="autor-destino">
                              <div class="avatar-destino">
                                 <img src="images/logo-empresa.png" alt="Teruel Aventura">
                              </div>
                              <div class="info-autor-destino">
                                 <p class="etiqueta-autor-destino">Organizado Por</p>
                                 <p class="nombre-autor-destino">Teruel Aventura</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
               
               <!-- Tarjeta 2: Dinópolis -->
               <div class="col-lg-4 col-md-6 mb-4">
                  <a href="organiza-viaje.php" class="tarjeta-destino">
                     <div class="imagen-destino imagen-destino-dinopolis">
                        <div class="gradiente-destino"></div>
                        <div class="contenido-destino">
                           <h3 class="titulo-destino">Dinópolis: Aventura Paleontológica</h3>
                           <div class="autor-destino">
                              <div class="avatar-destino">
                                 <img src="images/logo-empresa.png" alt="Teruel Aventura">
                              </div>
                              <div class="info-autor-destino">
                                 <p class="etiqueta-autor-destino">Organizado Por</p>
                                 <p class="nombre-autor-destino">Teruel Aventura</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </a>
               </div>
               
               <!-- Tarjeta 3: Albarracín -->
               <div class="col-lg-4 col-md-6 mb-4">
                  <a href="organiza-viaje.php" class="tarjeta-destino">
                     <div class="imagen-destino imagen-destino-albarracin">
                        <div class="gradiente-destino"></div>
                        <div class="contenido-destino">
                           <h3 class="titulo-destino">Guía Definitiva: Albarracín y Entorno</h3>
                           <div class="autor-destino">
                              <div class="avatar-destino">
                                 <img src="images/logo-empresa.png" alt="Teruel Aventura">
                              </div>
                              <div class="info-autor-destino">
                                 <p class="etiqueta-autor-destino">Organizado Por</p>
                                 <p class="nombre-autor-destino">Teruel Aventura</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </a>
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

      <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <!-- sidebar -->
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/teruel-aventura.js"></script>
   </body>
</html>