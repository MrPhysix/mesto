// PopupWithImage popupCloseOverlay клик теряет контекст
// cmd 8 для быстрого перехода по файлам

import './index.css'; // добавьте импорт главного файла стилей

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

} from '../utils/constants.js';
//
//
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
//
//  с формой изменения user info
//
const handleUserInfo = new UserInfo(profileInfo);

const handleEditProfile = new PopupWithForm(editPopUp, () => {
  const inputUserInfo = handleEditProfile.getInputValues();
  handleUserInfo.setUserInfo(inputUserInfo);
  handleEditProfile.close();
});
handleEditProfile.setEventListeners();

const openEditForm = () => {
  const userData = handleUserInfo.getUserInfo();
  handleEditProfile.setInputValues(profileInfo);
  handleEditProfile.open();
};
editProfileButton.addEventListener('click', openEditForm);
//
//  с формой создания карточки
//
const createCard = (values) => {
  const card = new Card(values, '#item-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

const handlePopup = new PopupWithImage(previewPopup);
handlePopup.setEventListeners();

const handleCardClick = (title, image) => {
  handlePopup.open(title, image);
};

const handleAddCard = new PopupWithForm(addPopUp, () => {
  const cardElement = createCard(handleAddCard.getInputValues());
  cardList.addItem(cardElement);
  handleAddCard.close();
});
handleAddCard.setEventListeners();

const openCardForm = () => {
  handleAddCard.open();
};
addCardButton.addEventListener('click', openCardForm);
//
//  карточки рендер
//
import Section from '../components/Section.js';
import Card from '../components/Cards.js';

const cardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, itemsContainer);

cardList.renderItems();
//
//  валидация
//
import {
  FormValidator,
} from '../components/FormValidator.js';

const validationHandler = (config) => {
  const formList = document.querySelectorAll(config.formSelector)
  formList.forEach((form) => {
    new FormValidator(validationConfig, form);
  })
}
validationHandler(validationConfig);
//
//window.addEventListener('click', (evt) => console.log(evt.target));