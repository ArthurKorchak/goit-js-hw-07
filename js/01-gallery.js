import { galleryItems } from './gallery-items.js';
// Change code below this line

const trgForAdd = document.querySelector('.gallery');

galleryGen(galleryItems);

trgForAdd.addEventListener('click', modalOperations);

function galleryGen(galleryItems) {
    const dataSet = galleryItems.reduce((acc, { preview, original, description }) => {
        return acc +=
            `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"/>
                </a>
            </div>`
    }, '');
    trgForAdd.innerHTML =  dataSet;
};

function modalOperations(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) { return };
    const bigImg = event.target.dataset.source;
    const handlePressEsc = (event) => event.key === 'Escape' ? instance.close() : null;
    const instance = basicLightbox.create((`<img src="${bigImg}">`), {
        onShow: () => {
            document.addEventListener("keydown", handlePressEsc);
        },
        onClose: () => {
            document.removeEventListener("keydown", handlePressEsc);
        },
    });
    instance.show();
};