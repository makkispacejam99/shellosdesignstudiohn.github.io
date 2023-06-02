// Archivo: visorview.js

// Función para abrir el visor de imagen
function openViewer(image) {
  var viewer = document.querySelector('.image-viewer');
  var viewerImg = viewer.querySelector('img');

  viewerImg.src = image.src;
  viewer.style.display = 'block';
}

// Función para cerrar el visor de imagen
function closeViewer() {
  var viewer = document.querySelector('.image-viewer');
  viewer.style.display = 'none';
}
