const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // Active Link
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  // Remove Menu
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// Obtener el modal y elementos de control
const migrationModal = document.getElementById("migrationModal");
const closeModal = document.getElementById("closeModal");

// Elemento del proyecto "quedadas deportivas" para abrir el modal
const sportsProjectLink = document.getElementById("sportsProjectLink");

// Mostrar el modal cuando se haga clic en el proyecto
sportsProjectLink.addEventListener("click", function(event) {
  event.preventDefault(); // Evita cualquier redirección
  migrationModal.style.display = "block";
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModal.addEventListener("click", function() {
  migrationModal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target === migrationModal) {
    migrationModal.style.display = "none";
  }
});
