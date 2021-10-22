//popup
export const editPopUp = document.querySelector('#edit-profile');
export const addPopUp = document.querySelector('#add-item');
export const previewPopup = document.querySelector('#image-open');
export const popupOpened = document.querySelector('.pop-up-opened');
export const popupElement = document.querySelector('.pop-up');
//preview
// export const previewImage = document.querySelector('.pop-up__image');
// export const previewTitle = document.querySelector('#image-open-title');
//
export const itemsContainer = document.querySelector('.items');
//buttons
export const popupCloseBtn = document.querySelector('.pop-up__close-button');
export const editProfileButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
//
export const profileInfo = {
  name: document.querySelector('.profile__title'),
  description: document.querySelector('.profile__subtitle'),
};
//  images
const arkhyzImage = new URL('../images/arkhyz.jpeg',
  import.meta.url);
const chelyabinskImage = new URL('../images/chelyabinsk-oblast.jpeg',
  import.meta.url);
const ivanovoImage = new URL('../images/ivanovo.jpeg',
  import.meta.url);
const kamchatkaImage = new URL('../images/kamchatka.jpeg',
  import.meta.url);
const kholmogorskyImage = new URL('../images/kholmogorsky-rayon.jpeg',
  import.meta.url);
const baikalImage = new URL('../images/baikal.jpeg',
  import.meta.url);


export const initialCards = [{
    name: "Архыз",
    description: arkhyzImage
  },
  {
    name: "Челябинская область",
    description: chelyabinskImage
  },
  {
    name: "Иваново",
    description: ivanovoImage
  },
  {
    name: "Камчатка",
    description: kamchatkaImage
  },
  {
    name: "Холмогорский район",
    description: kholmogorskyImage
  },
  {
    name: "Байкал",
    description: baikalImage
  }
];
//
export const validationConfig = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit-button',
  inactiveButtonClass: 'pop-up__submit-button_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
}