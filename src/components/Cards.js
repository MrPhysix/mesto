import PopupWithImage from './PopupWithImage.js';

export default class Card {
  constructor({
    name,
    link,
    likes,
    _id,
    owner
  }, cardSelector, handleCardClick, handleRemoveClick, handleLikeCounter, user) {
    this._userId = user.id;
    this._title = name;
    this._image = link;
    this._likes = likes;
    this._cardSelector = cardSelector;
    this._id = _id;
    this._owner = owner;

    this._isLiked = this.isCardLiked();
    console.log(this._isLiked);
    this._likesAmount = this._likes.length;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick; //
    this._handleLikeCounter = handleLikeCounter; //
    this._handleRemoveClick = handleRemoveClick;
    this._itemImage = this._element.querySelector('.item__image');
    this._itemLikeBtn = this._element.querySelector('.item__like');
    this._itemRemoveBtn = this._element.querySelector('.item__delele-button');
    this._likeCounter = this._element.querySelector('.likes__counter');

    //console.log(this);
  }

  isCardLiked() {
    //  console.log(Boolean(this._likes.find(item => item._owner._id === this._userId)));
    return Boolean(this._likes.find(item => item._id === this._userId));
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
    return new Promise((resolve, reject) => {
        this._handleLikeCounter(this, this._id);
        resolve();
      })
      .then(res => {
        this._isLiked = !this._isLiked;
        console.log('now liked is ' + this._isLiked);
        evt.target.classList.toggle('item__like_active');
      });
  }

  _remove() {
    this._element.remove();
  }

  _setEventListeners() {
    this._itemImage.addEventListener('click', () => this._handleCardClick(this._title, this._image));
    this._itemLikeBtn.addEventListener('click', (evt) => this._like(evt));
    this._itemRemoveBtn.addEventListener('click', () => {
      this._handleRemoveClick(this, this._id);
    });
  }

  generateCard() {
    this._itemImage.src = `${this._image}`;
    this._itemImage.alt = `${this._title}`;
    this._element.querySelector('.item__title').textContent = this._title;
    this._likeCounter.textContent = this._likesAmount;
    this._setEventListeners();

    return this._element;
  }
}