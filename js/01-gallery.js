import { galleryItems } from './gallery-items.js';
// Change code below this line

const trgForAdd = document.querySelector('.gallery');
const modal = document.querySelector('template');

galleryGen(galleryItems);

trgForAdd.addEventListener('click', (event) => {
    const curEl = event.target.alt;
    if (event.target !== event.currentTarget) {
        const bigImg = galleryItems.find(({ description }) => description === curEl ? true : false).original;
        modal.innerHTML = `<div class="modal"><img src ="${bigImg}"></div>`;
        const instance = basicLightbox.create(document.querySelector('template'));
        instance.show();
    };
});

function galleryGen(galleryItems) {
    const dataSet = galleryItems.reduce((acc, { preview, description }) => {
        return acc +=
            `<img src="${preview}" width="372" height="240" alt="${description}">`
    }, '');
    trgForAdd.innerHTML = dataSet;
};