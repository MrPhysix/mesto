import {
  previewPopup,
} from './utils.js';

import PopupWithImage from './PopupWithImage.js';

export default class Card {
  constructor({
    name,
    description,
  }, cardSelector) {
    this._title = name;
    this._image = description;
    this._isLiked = false;
    this._cardSelector = cardSelector;
  }

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

  _handleCardClick() {
    const handlePopup = new PopupWithImage(previewPopup, this._title, this._image);
    handlePopup.setEventListeners();
    handlePopup.open();
  }

  _setEventListeners() {
    const itemImage = this._element.querySelector('.item__image');
    const itemLikeBtn = this._element.querySelector('.item__like');
    const itemRemoveBtn = this._element.querySelector('.item__delele-button');

    itemImage.addEventListener('click', () => this._handleCardClick());
    itemLikeBtn.addEventListener('click', (evt) => this._like(evt));
    itemRemoveBtn.addEventListener('click', () => this._remove());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.item__image').src = `${this._image}`;
    this._element.querySelector('.item__image').alt = `${this._title}`;
    this._element.querySelector('.item__title').textContent = this._title;

    return this._element;
  }
}