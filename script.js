console.log("%c Sistema de Arquitectura de Software v1.0", "color: #00d4ff; font-weight: bold; font-size: 14px;");

window.addEventListener('scroll', function() {
    const header = document.querySelector('#mi-encabezado');
    if (window.scrollY > 50) {
        header.style.backgroundColor = "rgba(0, 11, 24, 0.9)";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contenido = document.querySelector('.contenido');
    contenido.style.opacity = "0";
    contenido.style.transform = "translateY(20px)";
    contenido.style.transition = "all 0.8s ease-out";

    setTimeout(() => {
        contenido.style.opacity = "1";
        contenido.style.transform = "translateY(0)";
    }, 200);
});