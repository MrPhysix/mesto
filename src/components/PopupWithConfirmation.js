import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector)
    this._submitCallback = submitCallback;
    this._submitButton = this._popupElement.querySelector('.pop-up__submit-button');
  }
  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', this._submitCallback);
  }
}