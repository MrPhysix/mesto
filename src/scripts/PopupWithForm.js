import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._submitCallback = submitCallback;
    this._form = this._popupElement.querySelector('.pop-up__form');
    this._inputValues = {};

  }
  _getInputValues() {
    this._inputValues.name = this._form.elements.name.value;
    this._inputValues.description = this._form.elements.description.value;

    return this._inputValues;
  }
  setInputValues(info) {
    this._form.elements.name.value = info.name.textContent;
    this._form.elements.description.value = info.description.textContent;
  }
  open() {
    super.open();
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