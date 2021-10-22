export default class Popup {
  constructor(popupSelector) {
    this._popupElement = popupSelector;
    this._handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
        evt.target.blur(); //отменяет фокус на button
      }
    }
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupElement.classList.add('pop-up_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popupElement.classList.remove('pop-up_opened');
  }

  setEventListeners() {
    this._popupElement.addEventListener('click', (evt) => {
      const popupCloseOverlay = evt.target === evt.currentTarget ||
        evt.target.classList.contains('pop-up__wrapper') ||
        evt.target.classList.contains('pop-up__close-button');

      popupCloseOverlay && this.close();
    });

  }
}