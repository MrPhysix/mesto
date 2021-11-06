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
    this._inputList.forEach(input => {
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
    // было //
    this._form.addEventListener('submit', this._submitCallback);
    // но нужно //
    //this._form.addEventListener('submit', this._submitCallback(this._getInputValues)); //ну тогда нарушается последовательность в Callback Queue и в результат _getInputValues() попадет объект с пустыми свойствами. Или я не знаю как правильно аргумент в параметр сделать
  }
}