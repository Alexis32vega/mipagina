let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showImage(index) {
    const totalImages = images.length;
    if (index >= totalImages) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = totalImages - 1;
    } else {
        currentImageIndex = index;
    }
    const offset = -currentImageIndex * 100;
    images.forEach(image => {
        image.style.transform = `translateX(${offset}%)`;
    });
}

function nextImage() {
    showImage(currentImageIndex + 1);
}

function prevImage() {
    showImage(currentImageIndex - 1);
}

function autoSlide() {
    nextImage();
}

setInterval(autoSlide, 3000); // Cambiar imagen cada 3 segundos

function scrollToVehicles() {
    const vehiclesSection = document.getElementById('vehicles');
    vehiclesSection.scrollIntoView({ behavior: 'smooth' });
}

function showDetails(vehicleName, description) {
    alert(`${vehicleName}\n\n${description}`);
}

function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Gracias, ${name}. Tu mensaje ha sido enviado.`);
    document.getElementById('contact-form').reset();
}
