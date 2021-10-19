import Popup from './Popup.js';
import {
  previewTitle,
  previewImage
} from './utils.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, title, image) {
    super(popupSelector);
    this._title = title;
    this._image = image;
  }
  open() {
    previewTitle.textContent = this._title;
    previewImage.src = this._image;
    super.open();
  }
}