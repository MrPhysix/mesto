// cmd 8 для быстрого перехода

import './index.css'; // добавьте импорт главного файла стилей
import Api from '../components/Api.js';


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

//
import Popup from '../components/Popup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
//
//  с формой изменения user info
//
const openEditForm = () => {
  const userData = handleUserInfo.getUserInfo();
  handleEditProfile.setInputValues(profileInfo);
  handleEditProfile.open();
};
editProfileButton.addEventListener('click', openEditForm);
//
//  с формой создания карточки
//


const handlePopup = new PopupWithImage(previewPopup);
handlePopup.setEventListeners();

const handleCardClick = (title, image) => {
  handlePopup.open(title, image);
};

const handleAddCard = new PopupWithForm(addPopUp, () => {
  const data = handleAddCard.getInputValues();
  const addCard = api.addCard(data);
  const button = handleAddCard._popupElement.querySelector('.pop-up__submit-button');
  button.textContent = 'Создание.';
  console.log(button.textContent);
  addCard.then(res => res.json())
    .then(res => {
      button.textContent = 'Создание..';
      return createCard(res);
    })
    .then(res => {
      button.textContent = 'Создание...';
      res.querySelector('.item__delele-button').style.visibility = "visible";
      itemList.addItem(res);
    })
    .finally(res => {
      handleAddCard.close();
      button.textContent = 'Создан';
    });
});
handleAddCard.setEventListeners();

const openCardForm = () => {
  handleAddCard.open();
};
addCardButton.addEventListener('click', openCardForm);
//
//  создание cardList
//
import Section from '../components/Section.js';
import Card from '../components/Cards.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

let itemList; //список

const handleRemoveClick = (card, id) => {
  const popup = new PopupWithConfirmation(confirmPopUp, () => api.removeItem(id)
    .then(res => {
      if (card._owner._id === profileInfo.id) {
        card._remove();
      }
    })
    .then(res => popup.close()));
  popup.setEventListeners();
  popup.open();
};

const handleLikeCounter = (card, id) => {
  const counter = card._element.querySelector('.likes__counter');
  api.likeHandler(card._id, card.isCardLiked())
    .then(res => {
      counter.textContent = res.likes.length;
    })
    .then(res => console.log('refresh element'));
}

const createCard = (values) => {
  const card = new Card(values, '#item-template', handleCardClick, handleRemoveClick, handleLikeCounter, profileInfo);
  const cardElement = card.generateCard();
  return cardElement;
};

const initialCards = api.getInitialCards();
initialCards.then((data) => {
    const cardList = new Section({
      data: data,
      renderer: (item) => {
        const cardElement = createCard(item);
        if (item.owner._id === profileInfo.id) {
          cardElement.querySelector('.item__delele-button').style.visibility = "visible";
        }
        item.likes.forEach((item) => {
          if (item._id === profileInfo.id) {
            cardElement.querySelector('.item__like').classList.toggle('item__like_active');
          }
        });
        cardList.addItem(cardElement);
      }
    }, itemsContainer);
    return cardList;
  })
  .then((res) => {
    res.renderItems();
    itemList = res;
    return res
  })
  .then(res => { // удаление всех своих
    // console.log(res._renderedItems);
    // res._renderedItems.forEach((item) => {
    //   api.removeItem(item._id);
    // });

  });
//
//  set User Info
//
const handleUserInfo = new UserInfo(profileInfo);
const getUserInfo = api.getUserInfo();
getUserInfo.then((data) => {
  handleUserInfo.setUserInfo(data);
  profileInfo.id = data._id;
});


editAvatarButton.addEventListener('click', (evt) => {
  const handleEditAvatar = new PopupWithForm(editAvatarPopUp, () => {
    const inputUserAvatar = handleEditAvatar.getInputValues().avatar;
    const button = handleAddCard._popupElement.querySelector('.pop-up__submit-button');
    button.textContent = 'Сохранение.';
    api.changeUserAvatar(inputUserAvatar)
      .then(res => {
        button.textContent = 'Сохранение..';
        profileInfo.avatar.src = inputUserAvatar
      })
      .then(res => {
        button.textContent = 'Сохранен';
        handleEditAvatar.close();
      });
  });
  handleEditAvatar.open();
  handleEditAvatar.setEventListeners();
});

const handleEditProfile = new PopupWithForm(editPopUp, () => {
  const inputUserInfo = handleEditProfile.getInputValues();
  const button = handleAddCard._popupElement.querySelector('.pop-up__submit-button');
  button.textContent = 'Сохранение.';
  console.log(button);
  api.setUserInfo(inputUserInfo).then(res => {
      button.textContent = 'Сохранение..';
      handleUserInfo.setUserInfo({
        name: inputUserInfo.name,
        about: inputUserInfo.about,
        avatar: profileInfo.avatar.src
      });
    })
    .then(res => {
      button.textContent = 'Сохранен';
      handleEditProfile.close();
    });

});
handleEditProfile.setEventListeners();
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