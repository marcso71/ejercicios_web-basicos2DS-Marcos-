/* QUÉ ES: Envía un mensaje estilizado a la consola del navegador para verificar que el JS cargó */
console.log("%c Sistema de Arquitectura de Software v1.0", "color: #00d4ff; font-weight: bold; font-size: 14px;");

/* QUÉ ES: Escucha el movimiento del scroll para ejecutar una función cuando el usuario baja la página */
window.addEventListener('scroll', function() {
    /* QUÉ ES: Selecciona el elemento con el ID #mi-encabezado para poder modificarlo */
    const header = document.querySelector('#mi-encabezado');

    /* QUÉ ES: Si el usuario baja más de 50 píxeles, cambia el fondo a un azul oscuro sólido */
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 11, 24, 0.9)";
    } else {
        /* QUÉ ES: Si está arriba del todo, el fondo se vuelve transparente otra vez */
        header.style.backgroundColor = "transparent";
    }
});

/* QUÉ ES: Espera a que todo el HTML esté cargado antes de ejecutar las animaciones */
document.addEventListener('DOMContentLoaded', () => {
    /* QUÉ ES: Selecciona el cuadro de texto principal (clase .contenido) */
    const contenido = document.querySelector('.contenido');

    /* QUÉ ES: Prepara la animación ocultando el cuadro y moviéndolo 20px hacia abajo */
    contenido.style.opacity = "0";
    contenido.style.transform = "translateY(20px)";
    contenido.style.transition = "all 0.8s ease-out"; 

    /* QUÉ ES: Crea un pequeño retraso de 200ms antes de que aparezca suavemente */
    setTimeout(() => {
        /* QUÉ ES: Hace que el cuadro aparezca (opacidad 1) y suba a su posición original */
        contenido.style.opacity = "1";
        contenido.style.transform = "translateY(0)";
    }, 200);
});