const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const itemSlider = document.querySelector('.items');
const thumbnailContainer = document.querySelector('.thumbnails');
let slideIndex = 0;
let autoplayInterval;

function updateSlider() {
    const activeImage = images[slideIndex];
    const itemContent = `
        <div class="item active">
            <img src="${activeImage.image}" alt="">
            <div class="bottom-right">
                <h3 class="img-title">${activeImage.title}</h3>
                <p class="img-p">${activeImage.text}</p>
            </div>
        </div>
    `;
    itemSlider.innerHTML = itemContent;
}

function updateThumbnails() {
    const thumbnailsContainer = document.querySelector('.thumbs');
    thumbnailsContainer.innerHTML = ''; // Clear previous content

    images.forEach((img, index) => {
        const thumbnail = `
            <div class="thumbnail ${index === slideIndex ? 'active' : ''}">
                <img src="${img.image}" alt="">
            </div>
        `;
        thumbnailsContainer.innerHTML += thumbnail;
    });
}



function showPreviousSlide() {
    console.log('slide precedente cliccata');
    console.log('slideIndex:', slideIndex);
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    console.log('slideindex aggiornata:', slideIndex);
    updateSlider();
    console.log('dopo updateSlider');
    updateThumbnails();
    console.log('dopo updateThumbnails');
}

function showNextSlide() {
    console.log('prossima slide cliccata');
    console.log('slideIndex:', slideIndex);
    slideIndex = (slideIndex + 1) % images.length;
    console.log('slideindex aggiornata:', slideIndex);
    updateSlider();
    console.log('prima di updateSlider');
    updateThumbnails();
    console.log('dopo updateThumbnails');
}

function startAutoplay() {
    autoplayInterval = setInterval(showNextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
    console.log('Autoplay stopped');
}

itemSlider.addEventListener('mouseenter', () => stopAutoplay());
itemSlider.addEventListener('mouseleave', () => startAutoplay());

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        showNextSlide();
    } else if (event.key === 'ArrowDown') {
        showPreviousSlide();
    }
});


updateSlider();
updateThumbnails();
startAutoplay();

const prevButton = document.querySelector('.prev');
if (prevButton) {
    prevButton.addEventListener('click', showPreviousSlide);
}

// document.querySelector('.prev').addEventListener('click', showPreviousSlide);
// document.querySelector('.next').addEventListener('click', showNextSlide);


