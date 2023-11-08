const images = [
    // Definiamo un array di oggetti, ognuno rappresenta un'immagine con titolo e testo.
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Vivi la crescita di Miles Morales, il nuovo eroe che domina incredibili e esplosivi poteri per diventare il suo Spider-Man.'
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Viaggia tra dimensioni con Ratchet e Clank mentre affrontano un malvagio imperatore proveniente da un\'altra realtà.'
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: 'Raccogli tutti i tuoi amici e tuffati in Epic Games Fortnite, un massiccio scontro tra 100 giocatori che combina saccheggi, crafting, sparatorie e caos.'
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Smarrito, ferito e solo, un gatto randagio deve dipanare un antico mistero per sfuggire a una città dimenticata da tempo.'
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers è un epico gioco d\'azione e avventura in terza persona che unisce una storia originale e cinematografica con il gameplay in singolo e cooperativo.'
    }
];

// seleziono gli elementi del DOM necessari per lo slider.
const itemSlider = document.querySelector('.items');
const thumbnailsContainer = document.querySelector('.thumbs');
let slideIndex = 0;
let autoplayInterval;

// seleziono i pulsanti di prev e next e il contenitore dei pulsanti.
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const buttonsContainer = document.querySelector('.buttons-container');

// Funzione per aggiornare il contenuto dello slider.
function updateSlider() {
    // si ottiene l'immagine attiva dal nostro array.
    const activeImage = images[slideIndex];
    // si crea l'HTML per l'elemento slider attivo.
    const itemContent = `
        <div class="item active">
            <img src="${activeImage.image}" alt="">
            <div class="bottom-right">
                <h3 class="img-title">${activeImage.title}</h3>
                <p class="img-p">${activeImage.text}</p>
            </div>
        </div>
        <div class="prev"></div>
        <div class="next"></div>
    `;

    const prevButtonHtml = '<div class="prev"></div>';
    const nextButtonHtml = '<div class="next"></div>';

    const fullContent = itemContent + prevButtonHtml + nextButtonHtml;
    itemSlider.innerHTML = fullContent;
    // aggiorno il contenuto dello slider con l'HTML generato.
    itemSlider.innerHTML = itemContent;
    
    // chiamo la funzione per mostrare i pulsanti.
    showButtons();
}

// Funzione per aggiornare le miniature delle immagini.
function updateThumbnails() {
    // Svuotiamo il contenitore delle miniature.
    thumbnailsContainer.innerHTML = ''; 

    // iterazione attraverso le immagini per generare le miniature.
    images.forEach((img, index) => {
        const thumbnail = `
            <div class="thumbnail ${index === slideIndex ? 'active' : ''}">
                <img src="${img.image}" alt="">
            </div>
        `;
        // aggiungere la miniatura al contenitore.
        thumbnailsContainer.innerHTML += thumbnail;
    });
}

// Funzione per mostrare la slide precedente.
function showPreviousSlide() {
    // aggiornare l'indice della slide in base alla precedente.
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    // chiamare la funzione per aggiornare lo slider.
    updateSlider();
    // chiamare la funzione per aggiornare le miniature.
    updateThumbnails();
}

// Funzione per mostrare la prossima slide.
function showNextSlide() {
    // aggiornare l'indice della slide in base alla successiva.
    slideIndex = (slideIndex + 1) % images.length;
    // chiamare la funzione per aggiornare lo slider.
    updateSlider();
    // chiamare  la funzione per aggiornare le miniature.
    updateThumbnails();
}

// Funzione per avviare la riproduzione automatica dello slider.
function startAutoplay() {
    autoplayInterval = setInterval(showNextSlide, 3000);
}

// Funzione per interrompere la riproduzione automatica dello slider.
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// aggiungere gli eventi per gestire la riproduzione automatica.
itemSlider.addEventListener('mouseenter', () => stopAutoplay());
itemSlider.addEventListener('mouseleave', () => startAutoplay());

// aggiungere l'evento per gestire le frecce della tastiera.
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') {
        showNextSlide();
    } else if (event.key === 'ArrowDown') {
        showPreviousSlide();
    }
});

// chiamare le funzioni necessarie per l'inizializzazione dello slider.
updateThumbnails();
showButtons();
updateSlider();
startAutoplay();

// Funzione per mostrare i pulsanti.
function showButtons() {
    // selezionare nuovamente i fottuti pulsanti di prev e next che non funzionano.
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // mostrare i fottuti pulsanti solo se sono presenti nel DOM.
    if (prevButton && nextButton) {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }
}





// const images = [
//     {
//         image: 'img/01.webp',
//         title: 'Marvel\'s Spiderman Miles Morale',
//         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//     }, {
//         image: 'img/02.webp',
//         title: 'Ratchet & Clank: Rift Apart',
//         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//     }, {
//         image: 'img/03.webp',
//         title: 'Fortnite',
//         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//     }, {
//         image: 'img/04.webp',
//         title: 'Stray',
//         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//     }, {
//         image: 'img/05.webp',
//         title: "Marvel's Avengers",
//         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//     }
// ];


// const itemSlider = document.querySelector('.items');
// const thumbnailsContainer = document.querySelector('.thumbs');
// let slideIndex = 0;
// let autoplayInterval;

// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const buttonsContainer = document.querySelector('.buttons-container');

// if (buttonsContainer) {
//     buttonsContainer.addEventListener('click', function (event) {
//         const clickedButton = event.target.closest('button');
//         if (clickedButton) {
//             if (clickedButton.classList.contains('prev')) {
//                 showPreviousSlide();
//             } else if (clickedButton.classList.contains('next')) {
//                 showNextSlide();
//             }
//         }
//     });
// }





// function updateSlider() {
//     const activeImage = images[slideIndex];
//     const itemContent = `
//         <div class="item active">
//             <img src="${activeImage.image}" alt="">
//             <div class="bottom-right">
//                 <h3 class="img-title">${activeImage.title}</h3>
//                 <p class="img-p">${activeImage.text}</p>
//             </div>
//         </div>
//     `;
//     itemSlider.innerHTML = itemContent;
//     console.log('Thumbnails updated:', thumbnailsContainer.innerHTML);
    
//  showButtons();
// }

// function updateThumbnails() {
//     const thumbnailsContainer = document.querySelector('.thumbs');
//     thumbnailsContainer.innerHTML = ''; 

//     images.forEach((img, index) => {
//         const thumbnail = `
//             <div class="thumbnail ${index === slideIndex ? 'active' : ''}">
//                 <img src="${img.image}" alt="">
//             </div>
//         `;
//         thumbnailsContainer.innerHTML += thumbnail;
//     });

   
// }



// function showPreviousSlide() {
//     console.log('slide precedente cliccata');
//     console.log('slideIndex:', slideIndex);
//     slideIndex = (slideIndex - 1 + images.length) % images.length;
//     console.log('slideindex aggiornata:', slideIndex);
//     updateSlider();
//     console.log('dopo updateSlider');
//     updateThumbnails();
//     console.log('dopo updateThumbnails');
    
// }

// function showNextSlide() {
//     console.log('prossima slide cliccata');
//     console.log('slideIndex:', slideIndex);
//     slideIndex = (slideIndex + 1) % images.length;
//     console.log('slideindex aggiornata:', slideIndex);
//     updateSlider();
//     console.log('prima di updateSlider');
//     updateThumbnails();
//     console.log('dopo updateThumbnails');
// }

// function startAutoplay() {
//     autoplayInterval = setInterval(showNextSlide, 3000);
// }

// function stopAutoplay() {
//     clearInterval(autoplayInterval);
//     console.log('Autoplay stopped');
// }

// itemSlider.addEventListener('mouseenter', () => stopAutoplay());
// itemSlider.addEventListener('mouseleave', () => startAutoplay());

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'ArrowUp') {
//         showNextSlide();
//     } else if (event.key === 'ArrowDown') {
//         showPreviousSlide();
//     }
// });


// updateThumbnails();
// showButtons();
// updateSlider();
// startAutoplay();

// // const prevButton = document.querySelector('.prev');
// // if (prevButton) {
// //     prevButton.addEventListener('click', showPreviousSlide);
// // }

// function showButtons() {
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
//     console.log('Prev Button:', prevButton);
//     console.log('Next Button:', nextButton);

//     console.log('Showing buttons');
//     console.log('Prev Button:', prevButton);
//     console.log('Next Button:', nextButton);

//     if (prevButton && nextButton) {
//         prevButton.style.display = 'block';
//         nextButton.style.display = 'block';
//     }
// }

// // document.querySelector('.prev').addEventListener('click', showPreviousSlide);
// // document.querySelector('.next').addEventListener('click', showNextSlide);


