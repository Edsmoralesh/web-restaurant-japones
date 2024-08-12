let MenuEntradas = document.getElementById('custom-menu-entradas');

let MenuPprincipal = document.getElementById('custom-menu-principal');

let MenuPostres = document.getElementById('custom-menu-postres');

let MenuBebidas = document.getElementById('custom-menu-bebidas');

// Iframes

let Entradas = document.getElementById('entradas');

let Pprincipal = document.getElementById('platos-principales');

let Postres = document.getElementById('postres');

let Bebidas = document.getElementById('bebidas');

// metodos
MenuEntradas.addEventListener('click', function(){
    Entradas.classList.remove("ocultar");
    Pprincipal.classList.add("ocultar");
    Postres.classList.add("ocultar");
    Bebidas.classList.add("ocultar");

    MenuEntradas.classList.add("activo-menu");
    MenuPprincipal.classList.remove("activo-menu");
    MenuPostres.classList.remove("activo-menu");
    MenuBebidas.classList.remove("activo-menu");
});

MenuPprincipal.addEventListener('click', function(){
    Pprincipal.classList.remove("ocultar");
    Entradas.classList.add("ocultar");
    Postres.classList.add("ocultar");
    Bebidas.classList.add("ocultar");

    MenuEntradas.classList.remove("activo-menu"); 
    MenuPprincipal.classList.add("activo-menu");
    MenuPostres.classList.remove("activo-menu");
    MenuBebidas.classList.remove("activo-menu");
});

MenuPostres.addEventListener('click', function(){
    Postres.classList.remove("ocultar");
    Pprincipal.classList.add("ocultar");
    Entradas.classList.add("ocultar");
    Bebidas.classList.add("ocultar");

    MenuEntradas.classList.remove("activo-menu");
    MenuPprincipal.classList.remove("activo-menu");
    MenuPostres.classList.add("activo-menu");
    MenuBebidas.classList.remove("activo-menu");
});

MenuBebidas.addEventListener('click', function(){
    Bebidas.classList.remove("ocultar");
    Pprincipal.classList.add("ocultar");
    Postres.classList.add("ocultar");
    Entradas.classList.add("ocultar");

    MenuEntradas.classList.remove("activo-menu");
    MenuPprincipal.classList.remove("activo-menu");
    MenuPostres.classList.remove("activo-menu");
    MenuBebidas.classList.add("activo-menu");
});

// boton scroll up
const backToTopButton = document.querySelector("#back-to-top-btn");

if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
        // Solo simula el desplazamiento con CSS
        document.documentElement.scrollTop = 0; // Compatible con la mayoría de los navegadores
        document.body.scrollTop = 0; // Para Safari
        document.body.scrollIntoView({
            behavior: 'smooth'
          });
    });
} else {
    console.error("El botón de volver arriba no se encontró.");
}

// navbar, animacion de scroll
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  