const showInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
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
});