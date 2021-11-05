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
  const button = popupAddCard._popupElement.querySelector('.pop-up__submit-button');
  const buttonInitialText = button.textContent;
  renderLoading(button, buttonInitialText, true);
  api.addCard(data)
    .then(res => {
      return res.json();
    })
    .then(res => {
      return createCard(res);
    })
    .then(res => {
      res.querySelector('.item__delele-button').style.visibility = "visible";
      cardList.addItem(res);
    })
    .then(res => {
      renderLoading(button, buttonInitialText, false);
      popupAddCard.close();
    })
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
    .then(res => console.log('refresh element'))
    .catch(err => console.log(err));
}
//
//
const popupDeleteCard = new PopupWithConfirmation(confirmPopUp);

const handleRemoveClick = (card) => {
  new Promise((resolve, reject) => {
      console.log('promise');
      popupDeleteCard.getSubmitCallback(() => api.removeItem(card._id)
        .then(res => {
          card._remove();
        })
        .then(res => popupDeleteCard.close())
        .catch(err => console.log(err))
      );
      console.log(popupDeleteCard);
      resolve();
    })
    .then(res => popupDeleteCard.setEventListeners()) //в глобальной никак не навесить из за getSubmitCallback
    .then(res => popupDeleteCard.open())
};
//
const createCard = (values) => {
  const card = new Card(values, '#item-template', handleCardClick, handleRemoveClick, handleLikeCounter, profileInfo);
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({}, itemsContainer); //ну только если так

api.getInitialCards()
  .then((inputdata) => {
    cardList.getData({
      data: inputdata,
      renderer: (item) => {
        const cardElement = createCard(item);
        cardList.addItem(cardElement);
      }
    })
    return cardList
  })
  .then((res) => {
    Promise.all([api.getUserInfo()])
      .then(() => {
        res.renderItems();
      })
  })
  .catch(err => console.log(err));
//
//  set User Info
//
const userInfo = new UserInfo(profileInfo);
api.getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
    profileInfo.id = data._id;
  })
  .catch(err => console.log(err));
//
//  с формой изменения user info
//
const openEditForm = () => {
  const userData = userInfo.getUserInfo();
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
  const button = popupAvatar._popupElement.querySelector('.pop-up__submit-button');
  const buttonInitialText = button.textContent;
  renderLoading(button, buttonInitialText, true);
  api.changeUserAvatar(inputUserAvatar)
    .then(res => {
      profileInfo.avatar.src = inputUserAvatar
    })
    .then(res => {
      renderLoading(button, buttonInitialText, false);
      popupAvatar.close();
    })
    .catch(err => console.log(err));
});
popupAvatar.setEventListeners();

const popupEditProfile = new PopupWithForm(editPopUp, () => {
  const inputUserInfo = popupEditProfile._getInputValues();
  const button = popupEditProfile._popupElement.querySelector('.pop-up__submit-button');
  const buttonInitialText = button.textContent;
  renderLoading(button, buttonInitialText, true);
  api.setUserInfo(inputUserInfo).then(res => {
      userInfo.setUserInfo({
        name: inputUserInfo.name,
        about: inputUserInfo.about,
        avatar: profileInfo.avatar.src
      });
    })
    .then(res => {
      renderLoading(button, buttonInitialText, false);
      popupEditProfile.close();
    })
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