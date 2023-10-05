document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleSlidesOnly'), {
        interval: 10000, // Cambia el intervalo a la cantidad de tiempo que desees entre las imágenes (en milisegundos)
        wrap: true // Establece esto en false si no deseas que el carrusel se "envuelva" después de llegar a la última imagen
    });
});