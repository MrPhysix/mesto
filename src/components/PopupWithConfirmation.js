import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupElement) {
    super(popupElement)
    this._form = this._popupElement.querySelector('.pop-up__form');
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback();
    });
  }
  setSubmitCallback(submitCallback) {
    this._submitCallback = submitCallback;
  }
}