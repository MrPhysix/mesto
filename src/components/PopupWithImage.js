import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._previewImage = this._popupElement.querySelector('.pop-up__image');
    this._previewTitle = this._popupElement.querySelector('#image-open-title');
  }
  open(title, image) {
    this._previewTitle.textContent = title;
    this._previewImage.src = image;
    this._previewImage.alt = title;
    super.open();
  }
}