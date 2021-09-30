// Создайте класс FormValidator, который настраивает валидацию полей формы:
//
//   1. принимает в конструктор объект настроек с селекторами и классами формы;
// 2. принимает вторым параметром элемент той формы, которая валидируется;
// 3. имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
// 4. имеет публичный метод enableValidation, который включает валидацию формы.
//
// Для каждой проверяемой формы создайте экземпляр класса FormValidator.


// const inputList = Array.from(document.querySelectorAll(inputSelector));

// enableValidation({
//   formSelector: '.pop-up__form',
//   inputSelector: '.pop-up__input',
//   submitButtonSelector: '.pop-up__submit-button',
//   inactiveButtonClass: 'pop-up__submit-button_disabled',
//   inputErrorClass: 'pop-up__input_type_error',
//   errorClass: 'pop-up__error_visible'
// });

class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    //
    this._formElement = form;
    this._inputElement = this._formElement.querySelector('.pop-up__input');
    this._errorElement = this._formElement.querySelector(`#${this._inputElement.id}-error`);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    //
    this.enableValidation();
  }

  _showInputError() {
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
    this._errorElement.classList.add(this._errorClass);
  }

  _hideInputError() {
    this._inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this._errorClass);
  }

  _checkInputValid() {
    !this._inputElement.validity.valid ? this._showInputError() : this._hideInputError();
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  }

  _toggleButton() {
    this._hasInvalidInput() ? this._disableSubmitButton() : this._enableSubmitButton();
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._disableSubmitButton();
    });

    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValid();
        this._toggleButton();
      });
      this._toggleButton();
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

// const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//   });
//
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValid(formElement, inputElement, inputErrorClass, errorClass);
//       toggleButton(formElement, submitButtonSelector, inputList, inactiveButtonClass);
//     });
//   });
//
//   toggleButton(formElement, submitButtonSelector, inputList, inactiveButtonClass);
//
// };
import {
  validationConfig
} from './utils.js';

const validationHandler = (config) => {
  const formList = document.querySelectorAll(config.formSelector)
  formList.forEach((form) => {
    new FormValidator(validationConfig, form);
  })
}
validationHandler(validationConfig);

// const editFormModalWindow = document.forms.edit;
// const editFormValidator = new FormValidator(validationConfig, editFormModalWindow);
//
// const addFormModalWindow = document.forms.add;
// const addFormValidator = new FormValidator(validationConfig, addFormModalWindow);
//
//
// console.log(editFormValidator instanceof FormValidator);

// const enableValidation = (config) => {
//   const formList = document.querySelectorAll(config.formSelector);
//   formList.forEach((form) => {
//     new FormValidator(config, form)
//     console.log(form);
//     console.log(form instanceof FormValidator);
//   });
// }
// enableValidation(validationConfig);
// const enableValidation = (config, form) => {
//   const formList = document.querySelectorAll(config.formSelector);
//   formList.forEach((form) => {
//     new FormValidator.enableValidation(config, form)
//   });
// }
// };
////








/*const showInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass)

};

const hideInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass)
};

const checkInputValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if (!inputElement.validity.valid) {
    showInputError(inputElement, errorElement, inputErrorClass, errorClass);
  } else {
    hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const disableSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};

const enableSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
};

const toggleButton = (formElement, submitButtonSelector, inputList, inactiveButtonClass) => {
  const buttonElement = formElement.querySelector(submitButtonSelector);

  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, inactiveButtonClass);
  } else {
    enableSubmitButton(buttonElement, inactiveButtonClass);
  };
}

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValid(formElement, inputElement, inputErrorClass, errorClass);
      toggleButton(formElement, submitButtonSelector, inputList, inactiveButtonClass);
    });
  });

  toggleButton(formElement, submitButtonSelector, inputList, inactiveButtonClass);

};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, config.inputSelector, config.submitButtonSelector,
      config.inputErrorClass, config.errorClass, config.inactiveButtonClass);
  });
};

enableValidation({
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__input',
  submitButtonSelector: '.pop-up__submit-button',
  inactiveButtonClass: 'pop-up__submit-button_disabled',
  inputErrorClass: 'pop-up__input_type_error',
  errorClass: 'pop-up__error_visible'
});*/