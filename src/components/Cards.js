import PopupWithImage from './PopupWithImage.js';

export default class Card {
  constructor({
    name,
    description,
  }, cardSelector, handleCardClick) {
    this._title = name;
    this._image = description;
    this._isLiked = false;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick;
    //
    this._itemImage = this._element.querySelector('.item__image');
    this._itemLikeBtn = this._element.querySelector('.item__like');
    this._itemRemoveBtn = this._element.querySelector('.item__delele-button');
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

  _setEventListeners() {
    this._itemImage.addEventListener('click', () => this._handleCardClick(this._title, this._image));
    this._itemLikeBtn.addEventListener('click', (evt) => this._like(evt));
    this._itemRemoveBtn.addEventListener('click', () => this._remove());
  }

  generateCard() {
    this._itemImage.src = `${this._image}`;
    this._itemImage.alt = `${this._title}`;
    this._element.querySelector('.item__title').textContent = this._title;
    this._setEventListeners();

    return this._element;
  }
}