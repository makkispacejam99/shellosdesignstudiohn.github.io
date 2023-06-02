window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var fabButton = document.getElementById("fab");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    fabButton.style.display = "block"; // Muestra el botón al hacer scroll hacia abajo
  } else {
    fabButton.style.display = "none"; // Oculta el botón al volver arriba
  }
}

function scrollToTop() {
  var scrollToTopButton = document.getElementById("fab");

  // Obtiene el elemento al que se va a desplazar suavemente (en este caso, el inicio de la página)
  var targetElement = document.documentElement;

  // Opciones de desplazamiento suave
  var scrollOptions = {
    behavior: 'smooth',
    block: 'start'
  };

  // Realiza el desplazamiento suave
  targetElement.scrollIntoView(scrollOptions);

}

window.addEventListener('scroll', function() {
  var fabButton = document.getElementById("fab");
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentPosition > 20) {
    fabButton.classList.add("show");
  } else {
    fabButton.classList.remove("show");
  }
});

window.addEventListener('scroll', function() {
  var fabButton = document.getElementById("fab");
  var currentPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (currentPosition > 20) {
    fabButton.classList.add("hide");
  } else {
    fabButton.classList.remove("hide");
  }
});







