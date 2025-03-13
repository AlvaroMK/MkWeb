/*Codigo para poner la foto en primer plano (galeria de imágenes)*/ 
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const body = document.body;
    const images = document.querySelectorAll(".gallery-item img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentIndex = 0; // Índice de la imagen actual

    function openModal(index) {
        currentIndex = index;
        modalImg.src = images[currentIndex].src;
        modal.classList.add("active");
        body.classList.add("no-scroll");
    }

    function closeModal() {
        modal.classList.remove("active");
        body.classList.remove("no-scroll");
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImg.src = images[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentIndex].src;
    }

    // Asignar evento a cada imagen para abrir el modal
    images.forEach((img, index) => {
        img.addEventListener("click", function() {
            openModal(index);
        });
    });

    // Cerrar modal haciendo clic en el fondo
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Eventos de navegación con botones
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    // Navegación con teclado
    document.addEventListener("keydown", function(event) {
        if (modal.classList.contains("active")) {
            if (event.key === "ArrowRight") showNextImage();
            else if (event.key === "ArrowLeft") showPrevImage();
            else if (event.key === "Escape") closeModal();
        }
    });
});