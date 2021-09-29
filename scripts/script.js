//esc key
// disableSubmitButton add
import {
  addPopUp,
  editPopUp,
  previewPopup,
  addCardButton,
  addCardForm,
  editProfileForm,
  editProfileButton,
  titleInput,
  descriptionInput,
  cardTitleInput,
  cardLinkInput,

} from './utils.js';

import {
  addCard,
} from './Cards.js'

const profileInfo = {
  name: document.querySelector('.profile__title'),
  desc: document.querySelector('.profile__subtitle'),
};
//
export const closePopupOnKey = (evt) => {
  const currentPopup = document.querySelector('.pop-up_opened');

  if (currentPopup && evt.key === 'Escape') {
    closePopup(currentPopup);
    evt.target.blur(); //отменяет фокус на button
  }
  console.log(currentPopup);
};

const openPopup = (popup) => {
  popup.classList.add('pop-up_opened');
  document.addEventListener('keydown', closePopupOnKey);

};

const closePopup = (popup) => {
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closePopupOnKey);
};
//
const closePopupOnClick = (evt) => {
  const currentPopup = document.querySelector('.pop-up_opened');
  const targetClass = evt.target.classList;

  if (evt.target === evt.currentTarget ||
    targetClass.contains('pop-up__wrapper') ||
    targetClass.contains('pop-up__close-button')) {
    closePopup(currentPopup);
  }
};
addPopUp.addEventListener('click', closePopupOnClick);
editPopUp.addEventListener('click', closePopupOnClick);
previewPopup.addEventListener('click', closePopupOnClick);


addCardButton.addEventListener('click', () => {
  addCardForm.reset();
  openPopup(addPopUp);
});


editProfileButton.addEventListener('click', () => {
  titleInput.value = profileInfo.name.textContent;
  descriptionInput.value = profileInfo.desc.textContent;
  openPopup(editPopUp);
});

const editProfileFormSubmit = (evt) => {
  profileInfo.name.textContent = titleInput.value;
  profileInfo.desc.textContent = descriptionInput.value;
  closePopup(editPopUp);
};
editProfileForm.addEventListener('submit', editProfileFormSubmit);

const addCardFormSubmit = (evt) => {
  addCard({
    name: cardTitleInput.value,
    link: cardLinkInput.value
  });
  closePopup(addPopUp);
};
addCardForm.addEventListener('submit', addCardFormSubmit);