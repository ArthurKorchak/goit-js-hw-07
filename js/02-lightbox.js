import { galleryItems } from './gallery-items.js';
// Change code below this line

const trgForAdd = document.querySelector('.gallery');

galleryGen(galleryItems);
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

function galleryGen(galleryItems) {
    const dataSet = galleryItems.reduce((acc, { preview, original, description }) => {
        return acc +=
            `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
    }, '');
    trgForAdd.innerHTML = dataSet;
};