// Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
//
//   1. принимает в конструктор её данные и селектор её template - элемента;
// 2. содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// 3. содержит приватные методы для каждого обработчика;
// 4. содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
//
// Для каждой карточки создайте экземпляр класса Card.

import {
  itemsContainer,
  initialCards,
  popupCloseBtn,
  addCardForm,
  previewTitle,
  previewImage,
  previewPopup,


} from './utils.js';

import {
  closePopupOnKey
} from './script.js'
export class Card {
  constructor(data, cardSelector) {
    this._title = data.name;
    this._image = data.link;
    this._isLiked = false;
    this._cardSelector = cardSelector;
  }

  //ищет и возвращает разметку темплейта по селектору
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .children[0]
      .cloneNode(true);

    return cardElement;
  }

  _like(evt) {
    this._isLiked = !this._isLiked;
    evt.target.classList.toggle('item__like_active');
  }

  _remove() {
    this._element.remove();
  }

  _handleOpenPopup() {
    previewImage.src = this._image;
    previewTitle.textContent = this._title;
    previewPopup.classList.add('pop-up_opened');
    document.addEventListener('keydown', closePopupOnKey);
  }

  _handleClosePopup() {
    previewImage.src = '';
    previewTitle.textContent = '';
    previewPopup.classList.remove('pop-up_opened');
    document.removeEventListener('keydown', closePopupOnKey);
  }

  _setEventListeners() {
    const itemImage = this._element.querySelector('.item__image');
    const itemLikeBtn = this._element.querySelector('.item__like');
    const itemRemoveBtn = this._element.querySelector('.item__delele-button');

    itemImage.addEventListener('click', () => this._handleOpenPopup());
    popupCloseBtn.addEventListener('click', () => this._handleClosePopup());
    itemLikeBtn.addEventListener('click', (evt) => this._like(evt));
    itemRemoveBtn.addEventListener('click', () => this._remove());
  }

  //берет разметку, устанавливает слушатели(с функциями), возвращает 1 элемент (для использования в цикле)
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.item__image').src = `${this._image}`;
    this._element.querySelector('.item__title').textContent = this._title;

    return this._element;
  }
}

export const addCard = (data) => {
  itemsContainer.innerHTM = '';
  const card = new Card(data, '#item-template');
  const cardElement = card.generateCard();
  itemsContainer.prepend(cardElement);
}

initialCards.forEach((item) => {
  addCard(item);
});


// export const renderCards = () => {
//   itemsContainer.innerHTM = '';
//   initialCards.forEach((item) => {
//     const card = new Card(item, '#item-template');
//     const cardElement = card.generateCard();
//     itemsContainer.prepend(cardElement);
//   });
// };
//
// renderCards();