/*---------------------------------------------------------------------
    File Name: teruel-aventura.js
    Description: JavaScript consolidado para el sitio Teruel Aventura
    - Funcionalidades generales del sitio (carruseles, menús, etc.)
    - Sistema de autenticación y perfiles de usuario
    - Sistema de valoraciones y reseñas
    - Gestión de viajes y reservas
---------------------------------------------------------------------*/

// ============================================
// FUNCIONALIDADES GENERALES DEL SITIO (jQuery)
// ============================================

$(function () {
    "use strict";

    /* Preloader
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 1500);

    /* JQuery Menu
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        $('header nav').meanmenu();
    });

    /* Tooltip
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* Sticky Header
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        $(".sticky-wrapper-header").sticky({ topSpacing: 0 });
    });

    /* Mouseover
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        $(".main-menu ul li.megamenu").mouseover(function () {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function () {
            $("#wrapper").removeClass('overlay');
        });
    });

    /* NiceScroll
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });

    /* NiceSelect
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        $('select').niceSelect();
    });

    /* OwlCarousel - Blog Post slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        var owl = $('.carousel-slider-post');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    });

    /* OwlCarousel - Banner Rotator Slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        var owl = $('.banner-rotator-slider');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    });

    /* OwlCarousel - Product Slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        var owl = $('#product-in-slider');
        owl.owlCarousel({
            loop: true,
            nav: true,
            margin: 10,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function (e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
    });

    /* Scroll to Top
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#back-to-top").addClass('b-show_scrollBut')
        } else {
            $("#back-to-top").removeClass('b-show_scrollBut')
        }
    });
    
    $("#back-to-top").on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    /* Contact-form
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $.validator.setDefaults({
        submitHandler: function () {
            alert("submitted!");
        }
    });

    $(document).ready(function () {
        $("#contact-form").validate({
            rules: {
                firstname: "required",
                email: {
                    required: true,
                    email: true
                },
                lastname: "required",
                message: "required",
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                email: "Please enter a valid email address",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                message: "Please enter your Message",
                agree: "Please accept our policy"
            },
            errorElement: "div",
            errorPlacement: function (error, element) {
                error.addClass("help-block");
                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.parent("input"));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function (element, errorClass, validClass) {
                $(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
            }
        });
    });

    /* Heroslider (Swiper)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    var swiper = new Swiper('.heroslider', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 'auto',
        paginationClickable: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
    });

    /* Product Filters (Swiper)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    var swiper = new Swiper('.swiper-product-filters', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerColumn: 1,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerColumn: 1,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerColumn: 1,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    });

    /* Countdown
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            var $this = $(this).html(event.strftime(''
                + '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
                + '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
                + '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
                + '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
                + '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
        });
    });

    /* Deal Slider (Slick)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $('.deal-slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '.previous-deal',
        nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /* News Slider (Slick)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $('#news-slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '.previous',
        nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /* Fancybox
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(".fancybox").fancybox({
        maxWidth: 1200,
        maxHeight: 600,
        width: '70%',
        height: '70%',
    });

    /* Toggle sidebar
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    /* Product slider (Bootstrap Carousel)
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $('#blogCarousel').carousel({
        interval: 5000
    });

});

// ============================================
// FUNCIONES AUXILIARES - LOCALSTORAGE
// ============================================

function obtenerUsuarioActual() {
    const usuarioJSON = localStorage.getItem('usuarioLogueado');
    return usuarioJSON ? JSON.parse(usuarioJSON) : null;
}

function obtenerValoraciones() {
    const valoracionesJSON = localStorage.getItem('valoracionesUsuarios');
    return valoracionesJSON ? JSON.parse(valoracionesJSON) : [];
}

function guardarValoraciones(valoraciones) {
    localStorage.setItem('valoracionesUsuarios', JSON.stringify(valoraciones));
}

// Obtener todos los usuarios registrados
function obtenerUsuariosRegistrados() {
    const usuariosJSON = localStorage.getItem('usuariosRegistrados');
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}

// Guardar usuarios registrados
function guardarUsuariosRegistrados(usuarios) {
    localStorage.setItem('usuariosRegistrados', JSON.stringify(usuarios));
}

// Sincronizar acciones de autenticación con el backend PHP
function sincronizarConServidor(accion, payload = {}) {
    return fetch('perfil.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({ ...payload, accion })
    })
        .then((response) => (response.ok ? response.json() : Promise.reject(new Error('Error de red'))))
        .catch((error) => {
            console.warn('No se pudo sincronizar con el servidor:', error.message);
            return { ok: false, mensaje: 'Sincronización no disponible' };
        });
}

// Buscar usuario por email
function buscarUsuarioPorEmail(email) {
    const usuarios = obtenerUsuariosRegistrados();
    return usuarios.find(u => u.email.toLowerCase() === email.toLowerCase());
}

// Verificar si el email ya está registrado
function emailYaRegistrado(email) {
    return buscarUsuarioPorEmail(email) !== undefined;
}

// ============================================
// CONTROL DE VISTAS (PERFIL vs LOGIN)
// ============================================

function verificarSesionYMostrarVista() {
    const usuario = obtenerUsuarioActual();
    const vistaPerfil = document.getElementById('vista-perfil-usuario');
    const contenedorAuth = document.getElementById('contenedor-auth');
    
    if (usuario) {
        // Usuario logueado: mostrar perfil
        contenedorAuth.classList.add('oculto');
        vistaPerfil.classList.remove('oculto');
        cargarDatosUsuario(usuario);
        cargarValoracionesUsuario(usuario);
    } else {
        // No hay sesión: mostrar login/registro
        vistaPerfil.classList.add('oculto');
        contenedorAuth.classList.remove('oculto');
    }
}

// ============================================
// CARGAR DATOS DEL USUARIO
// ============================================

function cargarDatosUsuario(usuario) {
    document.getElementById('perfil-nombre').textContent = usuario.nombre;
    document.getElementById('perfil-email').textContent = usuario.email;
    
    // Fecha de registro (si existe en localStorage)
    if (usuario.fechaRegistro) {
        const fecha = new Date(usuario.fechaRegistro);
        document.getElementById('perfil-fecha').textContent = fecha.toLocaleDateString('es-ES');
    } else {
        document.getElementById('perfil-fecha').textContent = new Date().toLocaleDateString('es-ES');
    }
}

// ============================================
// CARGAR VALORACIONES DEL USUARIO
// ============================================

function cargarValoracionesUsuario(usuario, fechaDesde = null, fechaHasta = null) {
    const valoraciones = obtenerValoraciones();
    const misValoraciones = valoraciones.filter(v => v.email === usuario.email);
    
    // Filtrar por fechas si se especifican
    let valoracionesFiltradas = misValoraciones;
    if (fechaDesde || fechaHasta) {
        valoracionesFiltradas = misValoraciones.filter(v => {
            const fechaValoracion = new Date(v.fecha);
            const desde = fechaDesde ? new Date(fechaDesde) : new Date('2000-01-01');
            const hasta = fechaHasta ? new Date(fechaHasta) : new Date('2099-12-31');
            hasta.setHours(23, 59, 59, 999); // Incluir todo el día final
            return fechaValoracion >= desde && fechaValoracion <= hasta;
        });
    }
    
    // Actualizar estadísticas
    const totalValoraciones = valoracionesFiltradas.length;
    document.getElementById('total-valoraciones').textContent = totalValoraciones;
    
    if (totalValoraciones > 0) {
        const sumaEstrellas = valoracionesFiltradas.reduce((sum, v) => sum + v.puntuacion, 0);
        const promedio = (sumaEstrellas / totalValoraciones).toFixed(1);
        document.getElementById('promedio-estrellas').textContent = promedio;
    } else {
        document.getElementById('promedio-estrellas').textContent = '0.0';
    }
    
    // Mostrar valoraciones
    const listaValoraciones = document.getElementById('lista-mis-valoraciones');
    listaValoraciones.innerHTML = '';
    
    if (valoracionesFiltradas.length === 0) {
        listaValoraciones.innerHTML = '<p class="sin-actividades">No se encontraron valoraciones en el período seleccionado.</p>';
        return;
    }
    
    // Ordenar por fecha (más recientes primero)
    valoracionesFiltradas.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    
    valoracionesFiltradas.forEach((valoracion, index) => {
        const tarjeta = crearTarjetaValoracion(valoracion, index);
        listaValoraciones.appendChild(tarjeta);
    });
}

function crearTarjetaValoracion(valoracion, index) {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-valoracion';
    tarjeta.setAttribute('data-index', index);
    
    // Generar estrellas
    let estrellas = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= valoracion.puntuacion) {
            estrellas += '<i class="fa fa-star"></i>';
        } else {
            estrellas += '<i class="fa fa-star-o"></i>';
        }
    }
    
    // Formatear fecha
    const fecha = new Date(valoracion.fecha);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    tarjeta.innerHTML = `
        <div class="valoracion-header-tarjeta">
            <div class="info-viaje">
                <h4>${valoracion.viajeNombre || 'Viaje ' + valoracion.viajeId}</h4>
                <div class="estrellas-tarjeta">${estrellas}</div>
            </div>
            <div class="acciones-valoracion">
                <button class="btn-accion-pequeño" onclick="editarValoracion(${index})" title="Editar">
                    <i class="fa fa-edit"></i>
                </button>
                <button class="btn-accion-pequeño btn-eliminar-pequeño" onclick="eliminarValoracion(${index})" title="Eliminar">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
        <p class="fecha-valoracion"><i class="fa fa-calendar"></i> ${fechaFormateada}</p>
        <p class="comentario-valoracion">${valoracion.comentario}</p>
    `;
    
    return tarjeta;
}

// ============================================
// EDITAR VALORACIÓN
// ============================================

function editarValoracion(index) {
    const usuario = obtenerUsuarioActual();
    if (!usuario) return;
    
    const valoraciones = obtenerValoraciones();
    const misValoraciones = valoraciones.filter(v => v.email === usuario.email);
    const valoracion = misValoraciones[index];
    
    const nuevoComentario = prompt('Editar comentario:', valoracion.comentario);
    if (nuevoComentario !== null && nuevoComentario.trim() !== '') {
        // Encontrar la valoración en el array completo
        const indiceGlobal = valoraciones.findIndex(v => 
            v.email === valoracion.email && 
            v.viajeId === valoracion.viajeId && 
            v.fecha === valoracion.fecha
        );
        
        if (indiceGlobal !== -1) {
            valoraciones[indiceGlobal].comentario = nuevoComentario.trim();
            guardarValoraciones(valoraciones);
            alert('Valoración actualizada correctamente.');
            cargarValoracionesUsuario(usuario);
        }
    }
}

// ============================================
// ELIMINAR VALORACIÓN
// ============================================

function eliminarValoracion(index) {
    const usuario = obtenerUsuarioActual();
    if (!usuario) return;
    
    if (!confirm('¿Estás seguro de que deseas eliminar esta valoración? Esta acción no se puede deshacer.')) {
        return;
    }
    
    const valoraciones = obtenerValoraciones();
    const misValoraciones = valoraciones.filter(v => v.email === usuario.email);
    const valoracion = misValoraciones[index];
    
    // Encontrar y eliminar la valoración del array completo
    const indiceGlobal = valoraciones.findIndex(v => 
        v.email === valoracion.email && 
        v.viajeId === valoracion.viajeId && 
        v.fecha === valoracion.fecha
    );
    
    if (indiceGlobal !== -1) {
        valoraciones.splice(indiceGlobal, 1);
        guardarValoraciones(valoraciones);
        alert('Valoración eliminada correctamente.');
        cargarValoracionesUsuario(usuario);
    }
}

// ============================================
// FILTROS DE FECHA
// ============================================

function aplicarFiltroFechas() {
    const usuario = obtenerUsuarioActual();
    if (!usuario) return;
    
    const fechaDesde = document.getElementById('fecha-desde').value;
    const fechaHasta = document.getElementById('fecha-hasta').value;
    
    if (fechaDesde && fechaHasta && new Date(fechaDesde) > new Date(fechaHasta)) {
        alert('La fecha "Desde" no puede ser posterior a la fecha "Hasta".');
        return;
    }
    
    cargarValoracionesUsuario(usuario, fechaDesde, fechaHasta);
}

function limpiarFiltros() {
    document.getElementById('fecha-desde').value = '';
    document.getElementById('fecha-hasta').value = '';
    const usuario = obtenerUsuarioActual();
    if (usuario) {
        cargarValoracionesUsuario(usuario);
    }
}

// ============================================
// EDITAR PERFIL
// ============================================

function mostrarEditarPerfil() {
    const usuario = obtenerUsuarioActual();
    if (!usuario) return;
    
    document.getElementById('editar-nombre').value = usuario.nombre;
    document.getElementById('editar-email').value = usuario.email;
    document.getElementById('modal-editar-perfil').classList.remove('oculto');
}

function cerrarModalEditar() {
    document.getElementById('modal-editar-perfil').classList.add('oculto');
}

// ============================================
// CERRAR SESIÓN
// ============================================

function cerrarSesion() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        localStorage.removeItem('usuarioLogueado');
        sincronizarConServidor('logout');
        alert('Sesión cerrada correctamente.');
        window.location.href = 'perfil.html';
    }
}

// ============================================
// ELIMINAR CUENTA
// ============================================

function eliminarCuenta() {
    if (!confirm('⚠️ ¿Estás seguro de que deseas dar de baja tu cuenta?\n\nEsta acción eliminará:\n- Tu perfil de usuario\n- Todas tus valoraciones\n\nEsta acción NO se puede deshacer.')) {
        return;
    }
    
    if (!confirm('¿Estás COMPLETAMENTE seguro? Esta es tu última oportunidad para cancelar.')) {
        return;
    }
    
    const usuario = obtenerUsuarioActual();
    if (!usuario) return;

    sincronizarConServidor('eliminar').then((respuesta) => {
        if (!respuesta.ok) {
            alert(respuesta.mensaje || 'No se pudo eliminar la cuenta. Inténtalo más tarde.');
            return;
        }

        // Eliminar todas las valoraciones del usuario
        const valoraciones = obtenerValoraciones();
        const valoracionesFiltradas = valoraciones.filter(v => v.email !== usuario.email);
        guardarValoraciones(valoracionesFiltradas);

        // Eliminar sesión del usuario
        localStorage.removeItem('usuarioLogueado');

        alert(respuesta.mensaje || 'Tu cuenta ha sido eliminada exitosamente. Lamentamos verte partir.');
        window.location.href = 'index.html';
    });
}

// ============================================
// FORMULARIOS DE LOGIN/REGISTRO
// ============================================

function mostrarRegistro() {
    document.getElementById('formulario-login').classList.add('oculto');
    document.getElementById('formulario-registro').classList.remove('oculto');
}

function mostrarLogin() {
    document.getElementById('formulario-registro').classList.add('oculto');
    document.getElementById('formulario-login').classList.remove('oculto');
}

// ============================================
// GESTIÓN DE VIAJES - EXPANDIR/CONTRAER
// ============================================

function toggleViaje(viajeId) {
    const detalles = document.getElementById(viajeId);
    const header = detalles.previousElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    // Cerrar todos los demás viajes
    document.querySelectorAll('.viaje-detalles').forEach(detalle => {
        if (detalle.id !== viajeId && detalle.classList.contains('active')) {
            detalle.classList.remove('active');
            const otroIcon = detalle.previousElementSibling.querySelector('.toggle-icon');
            if (otroIcon) {
                otroIcon.style.transform = 'rotate(0deg)';
            }
        }
    });
    
    // Toggle del viaje actual
    detalles.classList.toggle('active');
    
    // Rotar icono
    if (detalles.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// ============================================
// IR AL PAGO
// ============================================

function irAlPago(viajeId) {
    // Aquí iría la lógica real de pago
    alert('Redirigiendo al proceso de pago para ' + viajeId + '...\n\nEsta es una demostración. En producción, esto llevaría a una pasarela de pago segura.');
}

// ============================================
// VERIFICAR ESTADO DE LOGIN (ORGANIZA-VIAJE)
// ============================================

function verificarEstadoLogin() {
    const usuario = obtenerUsuarioActual();
    const formularios = document.querySelectorAll('.formulario-valoracion');
    const mensajesLogin = document.querySelectorAll('.mensaje-login-requerido');
    
    if (usuario) {
        // Usuario logueado: mostrar formularios
        formularios.forEach(form => form.style.display = 'block');
        mensajesLogin.forEach(msg => msg.style.display = 'none');
    } else {
        // Usuario no logueado: mostrar mensaje de login
        formularios.forEach(form => form.style.display = 'none');
        mensajesLogin.forEach(msg => msg.style.display = 'block');
    }
}

// ============================================
// SISTEMA DE SELECCIÓN DE ESTRELLAS
// ============================================

let valoracionSeleccionada = {};

function inicializarSelectoresEstrellas() {
    const selectoresEstrellas = document.querySelectorAll('.selector-estrellas');
    
    selectoresEstrellas.forEach(selector => {
        const viajeId = selector.id.replace('estrellas-', '');
        valoracionSeleccionada[viajeId] = 0;
        
        const estrellas = selector.querySelectorAll('.estrella-seleccionable');
        
        estrellas.forEach((estrella, index) => {
            // Evento al pasar el mouse
            estrella.addEventListener('mouseenter', function() {
                actualizarEstrellas(estrellas, index + 1);
            });
            
            // Evento al hacer clic
            estrella.addEventListener('click', function() {
                valoracionSeleccionada[viajeId] = index + 1;
                actualizarEstrellas(estrellas, index + 1, true);
            });
        });
        
        // Restaurar estrellas al salir del selector
        selector.addEventListener('mouseleave', function() {
            actualizarEstrellas(estrellas, valoracionSeleccionada[viajeId], true);
        });
    });
}

function actualizarEstrellas(estrellas, cantidad, permanente = false) {
    estrellas.forEach((estrella, index) => {
        if (index < cantidad) {
            estrella.classList.remove('fa-star-o');
            estrella.classList.add('fa-star');
            if (permanente) {
                estrella.classList.add('selected');
            }
        } else {
            estrella.classList.remove('fa-star');
            estrella.classList.add('fa-star-o');
            if (permanente) {
                estrella.classList.remove('selected');
            }
        }
    });
}

// ============================================
// ENVIAR VALORACIÓN
// ============================================

function enviarValoracion(viajeId) {
    // Verificar que el usuario esté logueado
    const usuario = obtenerUsuarioActual();
    if (!usuario) {
        alert('Debes iniciar sesión para escribir una valoración.');
        window.location.href = 'perfil.html';
        return;
    }
    
    const comentario = document.getElementById('comentario-' + viajeId).value.trim();
    const puntuacion = valoracionSeleccionada[viajeId];
    
    // Validaciones
    if (puntuacion === 0) {
        alert('Por favor, selecciona una puntuación con estrellas.');
        return;
    }
    
    if (!comentario) {
        alert('Por favor, escribe un comentario.');
        return;
    }
    
    // Crear nueva valoración
    const listaValoraciones = document.getElementById('valoraciones-' + viajeId);
    
    // Eliminar mensaje de "sin valoraciones" si existe
    const sinValoraciones = listaValoraciones.querySelector('.sin-valoraciones');
    if (sinValoraciones) {
        sinValoraciones.remove();
    }
    
    const nuevaValoracion = document.createElement('div');
    nuevaValoracion.className = 'valoracion-individual';
    nuevaValoracion.style.animation = 'fadeIn 0.5s ease';
    
    // Generar estrellas
    let estrellas = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= puntuacion) {
            estrellas += '<i class="fa fa-star"></i>';
        } else {
            estrellas += '<i class="fa fa-star-o"></i>';
        }
    }
    
    nuevaValoracion.innerHTML = `
        <div class="valoracion-header">
            <div class="valoracion-usuario">
                <i class="fa fa-user-circle"></i>
                <strong>${usuario.nombre}</strong>
            </div>
            <div class="valoracion-estrellas-small">
                ${estrellas}
            </div>
        </div>
        <p class="valoracion-fecha">Justo ahora</p>
        <p class="valoracion-comentario">${comentario}</p>
    `;
    
    // Guardar la puntuación en el elemento para poder calcular la media después
    nuevaValoracion.setAttribute('data-puntuacion', puntuacion);
    
    // Guardar la valoración en localStorage para el perfil del usuario
    guardarValoracionEnLocalStorage(viajeId, usuario, puntuacion, comentario);
    
    // Insertar al principio de la lista
    listaValoraciones.insertBefore(nuevaValoracion, listaValoraciones.firstChild);
    
    // Limpiar formulario
    document.getElementById('comentario-' + viajeId).value = '';
    valoracionSeleccionada[viajeId] = 0;
    
    // Resetear estrellas
    const estrellasSelectorElement = document.getElementById('estrellas-' + viajeId);
    const estrellasArray = estrellasSelectorElement.querySelectorAll('.estrella-seleccionable');
    actualizarEstrellas(estrellasArray, 0, true);
    
    // Actualizar contador de valoraciones y media
    actualizarContadorValoraciones(viajeId);
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu valoración, ' + usuario.nombre + '! Tu opinión ha sido publicada correctamente.');
    
    // Scroll a la nueva valoración
    nuevaValoracion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================
// ACTUALIZAR CONTADOR DE VALORACIONES
// ============================================

function actualizarContadorValoraciones(viajeId) {
    const viajeDetalles = document.querySelector('#' + viajeId).closest('.viaje-detalles');
    const valoracionNumero = viajeDetalles.querySelector('.valoracion-numero');
    const valoracionOpiniones = viajeDetalles.querySelector('.valoracion-opiniones');
    const listaValoraciones = document.getElementById('valoraciones-' + viajeId);
    
    // Obtener todas las valoraciones que tienen puntuación (las reales de usuarios)
    const valoracionesReales = listaValoraciones.querySelectorAll('.valoracion-individual[data-puntuacion]');
    
    if (valoracionesReales.length > 0) {
        // Calcular la media de las valoraciones reales
        let sumaTotal = 0;
        valoracionesReales.forEach(valoracion => {
            const puntuacion = parseInt(valoracion.getAttribute('data-puntuacion'));
            sumaTotal += puntuacion;
        });
        
        const media = sumaTotal / valoracionesReales.length;
        const mediaRedondeada = Math.round(media * 10) / 10; // Redondear a 1 decimal
        
        // Actualizar el número de valoración
        if (valoracionNumero) {
            valoracionNumero.textContent = mediaRedondeada.toFixed(1) + '/5';
        }
        
        // Actualizar el contador de opiniones
        if (valoracionOpiniones) {
            valoracionOpiniones.textContent = valoracionesReales.length + ' opiniones';
        }
        
        // Actualizar las estrellas visuales según la media
        actualizarEstrellasMedia(viajeDetalles, media);
    }
}

// ============================================
// ACTUALIZAR ESTRELLAS VISUALES
// ============================================

function actualizarEstrellasMedia(viajeDetalles, media) {
    const estrellasContainer = viajeDetalles.querySelector('.valoracion-estrellas');
    if (!estrellasContainer) return;
    
    // Limpiar estrellas actuales
    estrellasContainer.innerHTML = '';
    
    // Crear estrellas según la media
    for (let i = 1; i <= 5; i++) {
        const estrella = document.createElement('i');
        if (i <= Math.floor(media)) {
            // Estrella completa
            estrella.className = 'fa fa-star';
        } else if (i === Math.ceil(media) && media % 1 >= 0.5) {
            // Media estrella
            estrella.className = 'fa fa-star-half-o';
        } else {
            // Estrella vacía
            estrella.className = 'fa fa-star-o';
        }
        estrellasContainer.appendChild(estrella);
    }
}

// ============================================
// GUARDAR VALORACIONES EN LOCALSTORAGE
// ============================================

function guardarValoracionEnLocalStorage(viajeId, usuario, puntuacion, comentario) {
    // Obtener nombre del viaje - buscar en el viaje-item padre
    const viajeDetalles = document.querySelector('#' + viajeId);
    const viajeItem = viajeDetalles.closest('.viaje-item');
    const viajeNombre = viajeItem.querySelector('.viaje-header h3').textContent;
    
    // Crear objeto de valoración
    const valoracion = {
        viajeId: viajeId,
        viajeNombre: viajeNombre,
        email: usuario.email,
        nombreUsuario: usuario.nombre,
        puntuacion: puntuacion,
        comentario: comentario,
        fecha: new Date().toISOString()
    };
    
    // Obtener valoraciones existentes
    const valoracionesJSON = localStorage.getItem('valoracionesUsuarios');
    const valoraciones = valoracionesJSON ? JSON.parse(valoracionesJSON) : [];
    
    // Agregar nueva valoración
    valoraciones.push(valoracion);
    
    // Guardar de vuelta en localStorage
    localStorage.setItem('valoracionesUsuarios', JSON.stringify(valoraciones));
}

// ============================================
// SMOOTH SCROLL PARA ENLACES INTERNOS
// ============================================

function inicializarSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función específica para scroll a servicios (index.html)
function scrollToServices() {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ============================================
// INICIALIZACIÓN AL CARGAR EL DOM
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en perfil.html
    if (document.getElementById('vista-perfil-usuario')) {
        verificarSesionYMostrarVista();
        
        // Event listener para formulario de editar perfil
        const formEditarPerfil = document.getElementById('form-editar-perfil');
        if (formEditarPerfil) {
            formEditarPerfil.addEventListener('submit', async function(e) {
                e.preventDefault();

                const nuevoNombre = document.getElementById('editar-nombre').value.trim();
                const nuevoEmail = document.getElementById('editar-email').value.trim();

                if (!nuevoNombre || !nuevoEmail) {
                    alert('Por favor, completa todos los campos.');
                    return;
                }

                const usuario = obtenerUsuarioActual();
                const emailAntiguo = usuario.email;

                const respuesta = await sincronizarConServidor('editar', { nombre: nuevoNombre, email: nuevoEmail });

                if (!respuesta.ok) {
                    alert(respuesta.mensaje || 'No se pudieron actualizar tus datos.');
                    return;
                }

                // Actualizar datos del usuario en sesión
                usuario.nombre = nuevoNombre;
                usuario.email = nuevoEmail;
                localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

                // Actualizar email en todas las valoraciones del usuario
                const valoraciones = obtenerValoraciones();
                valoraciones.forEach(v => {
                    if (v.email === emailAntiguo) {
                        v.email = nuevoEmail;
                        v.nombreUsuario = nuevoNombre;
                    }
                });
                guardarValoraciones(valoraciones);

                alert(respuesta.mensaje || 'Datos actualizados correctamente.');
                cerrarModalEditar();
                cargarDatosUsuario(usuario);
                cargarValoracionesUsuario(usuario);
            });
        }
        
        // Event listener para formulario de registro
        const formRegistro = document.getElementById('formulario-registro');
        if (formRegistro) {
            formRegistro.querySelector('form').addEventListener('submit', async function(e) {
                e.preventDefault();

                const nombre = document.getElementById('nombre-registro').value.trim();
                const email = document.getElementById('email-registro').value.trim();
                const password = document.getElementById('password-registro').value;
                const passwordConfirmar = document.getElementById('password-confirmar').value;

                // Validar que todos los campos estén completos
                if (!nombre || !email || !password || !passwordConfirmar) {
                    alert('Por favor, completa todos los campos.');
                    return;
                }

                // Validar que las contraseñas coincidan
                if (password !== passwordConfirmar) {
                    alert('Las contraseñas no coinciden. Por favor, verifica e intenta de nuevo.');
                    return;
                }

                try {
                    const respuesta = await fetch('perfil.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        body: JSON.stringify({ accion: 'registro', nombre, email, password })
                    });

                    const datos = respuesta.ok ? await respuesta.json() : { ok: false, mensaje: 'No se pudo contactar con el servidor.' };

                    if (!datos.ok) {
                        alert(datos.mensaje || 'No se pudo completar el registro.');
                        return;
                    }

                    const usuario = datos.usuario || {
                        nombre,
                        email,
                        fechaRegistro: new Date().toISOString()
                    };

                    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

                    alert(datos.mensaje || '¡Cuenta creada exitosamente! Bienvenido, ' + nombre + '.');
                    window.location.href = 'perfil.html';
                } catch (error) {
                    console.error('Error al registrar usuario:', error);
                    alert('Ocurrió un error al registrar la cuenta. Inténtalo de nuevo más tarde.');
                }
            });
        }
        
        // Event listener para formulario de login
        const formLogin = document.getElementById('formulario-login');
        if (formLogin) {
            formLogin.querySelector('form').addEventListener('submit', async function(e) {
                e.preventDefault();

                const email = document.getElementById('email-login').value.trim();
                const password = document.getElementById('password-login').value;

                // Validar que todos los campos estén completos
                if (!email || !password) {
                    alert('Por favor, completa todos los campos.');
                    return;
                }

                try {
                    const respuesta = await fetch('perfil.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest'
                        },
                        body: JSON.stringify({ accion: 'login', email, password })
                    });

                    const datos = respuesta.ok ? await respuesta.json() : { ok: false, mensaje: 'No se pudo contactar con el servidor.' };

                    if (!datos.ok) {
                        alert(datos.mensaje || 'No se pudo iniciar sesión.');
                        return;
                    }

                    const usuario = datos.usuario || { nombre: '', email, fechaRegistro: null };
                    localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

                    alert(datos.mensaje || '¡Sesión iniciada correctamente!');
                    window.location.href = 'perfil.html';
                } catch (error) {
                    console.error('Error al iniciar sesión:', error);
                    alert('Ocurrió un error al iniciar sesión. Inténtalo de nuevo más tarde.');
                }
            });
        }
    }

    // Verificar si estamos en organiza-viaje.html
    if (document.querySelector('.viaje-item')) {
        verificarEstadoLogin();
        inicializarSelectoresEstrellas();
    }
    
    // Inicializar smooth scroll en todas las páginas
    inicializarSmoothScroll();
});
