import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitCallback) {
    super(popupElement);
    this._submitCallback = submitCallback;
    this._form = this._popupElement.querySelector('.pop-up__form');
    this._inputList = this._form.querySelectorAll('.pop-up__input');
  }
  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input, index) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setInputValues(info) {
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