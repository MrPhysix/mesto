//
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
  itemsContainer,
  initialCards,
  validationConfig,

} from './utils.js';

const profileInfo = {
  name: document.querySelector('.profile__title'),
  desc: document.querySelector('.profile__subtitle'),
};
//
export const closePopupOnKey = (evt) => {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.pop-up_opened');
    currentPopup && closePopup(currentPopup); // не знал что так можно
    evt.target.blur(); //отменяет фокус на button
  }
};

export const openPopup = (popup) => {
  popup.classList.add('pop-up_opened');
  document.addEventListener('keydown', closePopupOnKey);

};

export const closePopup = (popup) => {
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closePopupOnKey);
};
//
const closePopupOnClick = (evt) => {
  const targetClass = evt.target.classList;

  if (evt.target === evt.currentTarget ||
    targetClass.contains('pop-up__wrapper') ||
    targetClass.contains('pop-up__close-button')) {
    closePopup(evt.currentTarget); //тут не додумал, спасибо)
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
//карточки рендер
import {
  Card,
} from './Cards.js'

const createCard = (data) => {
  const card = new Card(data, '#item-template');
  return card.generateCard();
}

export const addCard = (data) => {
  const cardElement = createCard(data);
  itemsContainer.prepend(cardElement);
}

initialCards.forEach((item) => {
  addCard(item);
});
//валидация
import {
  FormValidator,
} from './FormValidator.js';

const validationHandler = (config) => {
  const formList = document.querySelectorAll(config.formSelector)
  formList.forEach((form) => {
    new FormValidator(validationConfig, form);
  })
}
validationHandler(validationConfig);
//