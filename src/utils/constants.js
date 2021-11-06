//popup
export const confirmPopUp = document.querySelector('#confirm');
export const editPopUp = document.querySelector('#edit-profile');
export const addPopUp = document.querySelector('#add-item');
export const previewPopup = document.querySelector('#image-open');
export const editAvatarPopUp = document.querySelector('#avatar-update');
export const popupOpened = document.querySelector('.pop-up-opened');
export const popupElement = document.querySelector('.pop-up');
//
export const submitButton = (popup) => {
  return popup._popupElement.querySelector('.pop-up__submit-button');
};
//
export const itemsContainer = document.querySelector('.items');
//buttons
export const popupCloseBtn = document.querySelector('.pop-up__close-button');
export const editProfileButton = document.querySelector('.profile__edit-button');
export const addCardButton = document.querySelector('.profile__add-button');
export const editAvatarButton = document.querySelector('.profile__avatar-button');
//
export const profileInfo = {
  name: document.querySelector('.profile__title'),
  about: document.querySelector('.profile__subtitle'),
  avatar: document.querySelector('.profile__avatar'),
  id: null,
};
//
export const avatarDefault = new URL('../images/avatar.svg',
  import.meta.url);

export const validationConfig = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit-button',
  inactiveButtonClass: 'pop-up__submit-button_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
}