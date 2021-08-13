let popUp = document.querySelector(".pop-up");
popUp.closeButton = popUp.querySelector(".pop-up__close-button");
let editButton = document.querySelector(".profile__edit-button");

//form
let formElement = document.querySelector(".pop-up__container");
let nameInput = formElement.querySelector("#name");
let jobInput = formElement.querySelector("#description");
//---
let nameValue = document.querySelector(".profile__title");
let jobValue = document.querySelector(".profile__subtitle");
//

function popUpDisplay() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;

  if (popUp.classList.contains("pop-up_opened") === false) {
    popUp.classList.add("pop-up_opened");
  } else {
    popUp.classList.remove("pop-up_opened");
  }
}

editButton.addEventListener("click", popUpDisplay);
popUp.closeButton.addEventListener("click", popUpDisplay);

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  let nameLength = document.getElementById("name").value.length;
  //орграничение длины имени

  // Выберите элементы, куда должны быть вставлены значения полей
  if (nameLength >= 3 && nameLength <= 70) {
    nameValue.textContent = `${nameInput.value}`;
    jobValue.textContent = `${jobInput.value}`;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    popUpDisplay();
  } else {
    window.alert("Вы уверены, что вас правда так зовут? : )");
    console.log(nameLength);
  }
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
