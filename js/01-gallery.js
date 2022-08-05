import { galleryItems } from './gallery-items.js';
// Change code below this line

const trgForAdd = document.querySelector('.gallery');
const modal = document.querySelector('template');

galleryGen(galleryItems);

trgForAdd.addEventListener('click', modalOperatorions);

function galleryGen(galleryItems) {
    const dataSet = galleryItems.reduce((acc, { preview, original, description }) => {
        return acc +=
            `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`
    }, '');
    trgForAdd.innerHTML = dataSet;
};

function modalOperatorions(event) {
    event.preventDefault();
    const curEl = event.target.alt;
    if (event.target === event.currentTarget) {return};
    const bigImg = galleryItems.find(({ description }) => description === curEl ? true : false).original;
    modal.innerHTML = `<div class="modal"><img src ="${bigImg}"></div>`;
    const instance = basicLightbox.create(document.querySelector('template'));
    instance.show();
    const handlePressEsc = (event) => {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener("keydown", handlePressEsc);
        };
    };
    document.addEventListener("keydown", handlePressEsc);  
}