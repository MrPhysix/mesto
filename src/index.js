// index.js
import './page/index.css'; // добавьте импорт главного файла стилей

import {
  addPopUp,
  editPopUp,
  previewPopup,
  addCardButton,
  editProfileButton,
  itemsContainer,
  initialCards,
  validationConfig,
  profileInfo,

} from './scripts/utils.js';
//
//  с формой изменения user info
//
import Popup from './scripts/Popup.js';
import PopupWithForm from './scripts/PopupWithForm.js';
import UserInfo from './scripts/UserInfo.js';

const handleUserInfo = new UserInfo(profileInfo);

const handleEditProfile = new PopupWithForm(editPopUp, () => {
  const inputUserInfo = handleEditProfile._getInputValues();
  handleUserInfo.setUserInfo(inputUserInfo);
  handleEditProfile.close();
});

const openEditForm = () => {
  handleUserInfo.getUserInfo();
  handleEditProfile.setInputValues(profileInfo);
  handleEditProfile.setEventListeners();
  handleEditProfile.open();
};
editProfileButton.addEventListener('click', openEditForm);
//
//  с формой создания карточки
//
const handleAddCard = new PopupWithForm(addPopUp, () => {
  const card = new Card(handleAddCard._getInputValues(), '#item-template');
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  handleAddCard.close();
});

const openCardForm = () => {
  handleAddCard.setEventListeners();
  handleAddCard.open();
};
addCardButton.addEventListener('click', openCardForm);
//
//  карточки рендер
//
import Section from './scripts/Section.js';
import Card from './scripts/Cards.js';

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#item-template');
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
  }
}, itemsContainer);

cardList.renderItems();
//
//  валидация
//
import {
  FormValidator,
} from './scripts/FormValidator.js';

const validationHandler = (config) => {
  const formList = document.querySelectorAll(config.formSelector)
  formList.forEach((form) => {
    new FormValidator(validationConfig, form);
  })
}
validationHandler(validationConfig);
//