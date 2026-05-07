// Selecciona el menú y el encabezado
const menu = document.querySelector("nav");
const header = document.querySelector("#mi-encabezado");

// Función que cambia el color de fondo del menú al hacer scroll
window.addEventListener("scroll", () => {
    // Obtén la altura del encabezado dinámicamente
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight - 50) { 
        // Cambia a morado sólido al pasar el encabezado
        menu.style.backgroundColor = "rgba(75, 0, 130, 1)"; 
        menu.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
    } else {
        // Vuelve a ser transparente o semi-transparente cuando está arriba
        menu.style.backgroundColor = "rgba(48, 0, 82, 0.9)"; 
        menu.style.boxShadow = "none";
    }
});