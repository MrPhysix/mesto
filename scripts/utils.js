//popup
export const editPopUp = document.querySelector('#edit-profile');
export const addPopUp = document.querySelector('#add-item');
export const previewPopup = document.querySelector('#image-open');
export const popupOpened = document.querySelector('.pop-up-opened');
export const popupElement = document.querySelector('.pop-up');
//preview
export const previewImage = document.querySelector('.pop-up__image');
export const previewTitle = document.querySelector('#image-open-title');
//form
export const editProfileForm = document.forms.edit;
export const addCardForm = document.forms.add;
//input
export const titleInput = editProfileForm.elements.name;
export const descriptionInput = editProfileForm.elements.description;
export const cardTitleInput = addCardForm.elements.name;
export const cardLinkInput = addCardForm.elements.description;
//
export const itemsContainer = document.querySelector('.items');
//buttons
export const popupCloseBtn = document.querySelector('.pop-up__close-button');
export const editProfileButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
//
export const initialCards = [{
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
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