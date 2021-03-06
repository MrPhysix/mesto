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
    this._likesAmount = this._likes.length;
    this._element = this._getTemplate();
    this._handleCardClick = handleCardClick; //
    this._handleLikeCounter = handleLikeCounter; //
    this._handleRemoveClick = handleRemoveClick;
    this._itemImage = this._element.querySelector('.item__image');
    this._itemLikeBtn = this._element.querySelector('.item__like');
    this._itemRemoveBtn = this._element.querySelector('.item__delele-button');
    this._likeCounter = this._element.querySelector('.likes__counter');
  }

  isCardLiked() {
    return Boolean(this._likes.find(item => item._id === this._userId));
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .children[0]
      .cloneNode(true);

    if (this._owner._id === this._userId) {
      cardElement.querySelector('.item__delele-button').style.visibility = "visible";
    }
    if (this._isLiked) {
      cardElement.querySelector('.item__like').classList.toggle('item__like_active');
    }
    return cardElement;
  }

  _like(evt) {
    this._isLiked = !this._isLiked;
    console.log('now liked is ' + this._isLiked);
    evt.target.classList.toggle('item__like_active');
    this._handleLikeCounter(this, this._id);
  }

  _remove() {
    this._element.remove();
  }

  _setEventListeners() {
    this._itemImage.addEventListener('click', () => this._handleCardClick(this._title, this._image));
    this._itemLikeBtn.addEventListener('click', (evt) => this._like(evt));
    this._itemRemoveBtn.addEventListener('click', () => {
      this._handleRemoveClick(this);
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