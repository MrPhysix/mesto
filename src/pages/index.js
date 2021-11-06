// cmd 8 для быстрого перехода

import './index.css'; // добавьте импорт главного файла стилей
import Api from '../components/Api.js';
//
import FormValidator from '../components/FormValidator.js';

//
import Section from '../components/Section.js';
import Card from '../components/Cards.js';
//
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
//
import UserInfo from '../components/UserInfo.js';

import {
  addPopUp,
  editPopUp,
  previewPopup,
  addCardButton,
  editProfileButton,
  itemsContainer,
  validationConfig,
  profileInfo,
  confirmPopUp,
  editAvatarPopUp,
  editAvatarButton,
  submitButton,

} from '../utils/constants.js';

import {
  renderLoading
} from '../utils/utils.js'
//
//  Api
//
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
  headers: {
    authorization: '2181393e-dcbd-4ec4-b795-5358ac072ebb',
    'Content-Type': 'application/json'
  }
});

const popupImage = new PopupWithImage(previewPopup);
popupImage.setEventListeners();

const handleCardClick = (title, image) => {
  popupImage.open(title, image);
};

const popupAddCard = new PopupWithForm(addPopUp, () => {
  const data = popupAddCard._getInputValues();
  const buttonInitialText = submitButton(popupAddCard).textContent;
  renderLoading(submitButton(popupAddCard), buttonInitialText, true);
  api.addCard(data)
    .then(res => {
      return createCard(res);
    })
    .then(res => {
      res.querySelector('.item__delele-button').style.visibility = "visible";
      cardList.addItem(res);
    })
    .then(res => {
      popupAddCard.close();
    })
    .finally(res => renderLoading(submitButton(popupAddCard), buttonInitialText, false))
    .catch(err => console.log(err))
});
popupAddCard.setEventListeners();

const openCardForm = () => {
  popupAddCard.open();
};
addCardButton.addEventListener('click', openCardForm);

const handleLikeCounter = (card, id) => {
  const counter = card._element.querySelector('.likes__counter');
  api.likeHandler(card._id, card.isCardLiked())
    .then(res => {
      counter.textContent = res.likes.length;
    })
    .catch(err => console.log(err));
}
//
//  handleRemoveClick
//
const popupDeleteCard = new PopupWithConfirmation(confirmPopUp);
popupDeleteCard.setEventListeners();

const handleRemoveClick = (card) => {
  popupDeleteCard.setSubmitCallback(() => {
    console.log('SubmitCallback');
    api.removeItem(card._id)
      .then(res => {
        card._remove();
        popupDeleteCard.close();
      })
      .catch(err => console.log(err))
  });
  popupDeleteCard.open();
};
//
const createCard = (values) => {
  const card = new Card(values, '#item-template', handleCardClick, handleRemoveClick, handleLikeCounter, profileInfo);
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({
    data: null,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    }
  },
  itemsContainer);

const userInfo = new UserInfo(profileInfo);

//
//  set User Info & renderItems
//

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(data => {
    userInfo.setUserInfo(data[0]);
    profileInfo.id = data[0]._id;
    cardList.renderItems(data[1])
  }).catch(err => console.log(err));

//
//  с формой изменения user info
//
const openEditForm = () => {
  const userData = userInfo.getUserInfo(); // это не api
  popupEditProfile.setInputValues(userData);
  popupEditProfile.open();
};
editProfileButton.addEventListener('click', openEditForm);
//
editAvatarButton.addEventListener('click', (evt) => {
  popupAvatar.open();
});

const popupAvatar = new PopupWithForm(editAvatarPopUp, () => {
  const inputUserAvatar = popupAvatar._getInputValues().avatar;
  const buttonInitialText = submitButton(popupAvatar).textContent;
  renderLoading(submitButton(popupAvatar), buttonInitialText, true);
  api.changeUserAvatar(inputUserAvatar)
    .then(res => {
      profileInfo.avatar.src = inputUserAvatar
    })
    .then(res => {
      popupAvatar.close();
    })
    .finally(res => renderLoading(submitButton(popupAvatar), buttonInitialText, false))
    .catch(err => console.log(err));
});
popupAvatar.setEventListeners();

const popupEditProfile = new PopupWithForm(editPopUp, () => {
  const inputUserInfo = popupEditProfile._getInputValues();

  const buttonInitialText = submitButton(popupEditProfile).textContent;
  renderLoading(submitButton(popupEditProfile), buttonInitialText, true);
  api.setUserInfo(inputUserInfo).then(res => {
      userInfo.setUserInfo({
        name: inputUserInfo.name,
        about: inputUserInfo.about,
        avatar: profileInfo.avatar.src
      });
    })
    .then(res => {
      popupEditProfile.close();
    })
    .finally(res => renderLoading(submitButton(popupEditProfile), buttonInitialText, false))
    .catch(err => console.log(err));
});
popupEditProfile.setEventListeners();
//
//  валидация
//
const validationHandler = (config) => {
  const addCardFormValidator = new FormValidator(config, document.forms.add);
  addCardFormValidator.enableValidation();

  const editProfileFormValidator = new FormValidator(config, document.forms.edit);
  editProfileFormValidator.enableValidation();

  const editAvatarFormValidator = new FormValidator(config, document.forms.avatar);
  editAvatarFormValidator.enableValidation();
}
validationHandler(validationConfig);

//window.addEventListener('click', (evt) => console.log(evt.target));