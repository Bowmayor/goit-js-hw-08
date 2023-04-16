import SimpleLightbox from 'simplelightbox';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log('galleryItems');


const galleryList = document.querySelector(".gallery");

const createGalleryMarkup = (items) => {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
    })
    .join("");
};

galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));



galleryList.addEventListener("click", (event) => {
  event.preventDefault();
});

const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});