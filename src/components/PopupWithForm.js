import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popupElement.querySelector('.pop-up__form');
  }
  getInputValues() {
    this._inputList = this._form.querySelectorAll('.pop-up__input');
    this._formValues = {};
    this._inputList.forEach((input, index) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(info) {
    this._inputList = this._form.querySelectorAll('.pop-up__input');
    const infoValues = Object.values(info);
    this._inputList.forEach((input, index) => {
      input.value = infoValues[index].textContent;
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitCallback);
  }
}