/*
Пытался сделать 1 функцией заполнение каждого из попапа,
но не понял как правильно возвращать например id из функции открытия togglePopUp
для того чтобы потом уже передавать в обработчик события submit делать проверку и тд.
Наставник посоветовал сделать отдельные функции(скорее тут процедуры),
как я и поступил, но оставил одну для togglePopUp (не уверен на счет правильности, но вроде работает :D)
*/
const editPopUp = document.querySelector("#edit-profile");
const addPopUp = document.querySelector("#add-item");
const imagePopUp = document.querySelector("#image-open");
//
const editForm = document.querySelector("#info-edit-form");
const addForm = document.querySelector("#add-item-form");
//
const profileInfo = {
  name: document.querySelector(".profile__title"),
  desc: document.querySelector(".profile__subtitle"),
}
//
let firstInput;
let secondInput;
//=============================================================
//=======================загрузка форм=========================
function formHandler(popUp) {
  if (popUp === editPopUp) {
    firstInput = editForm.querySelector("#name");
    secondInput = editForm.querySelector("#description");
    firstInput.value = profileInfo.name.textContent;
    secondInput.value = profileInfo.desc.textContent;
  } else if (popUp === addPopUp) {
    firstInput = addForm.querySelector("#place");
    secondInput = addForm.querySelector("#link");
    firstInput.value = "";
    secondInput.value = "";
  }
}
//=============================================================
//=============popUp toggle для всех===========================
const togglePopUp = (item) => {
  const closeButton = item.querySelector(".pop-up__close-button");
  closeButton.addEventListener("click", () => {
    togglePopUp(item);
  });
  return item.classList.toggle("pop-up_opened");
}
//==============кнопки ========================================
const editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", () => {
  formHandler(editPopUp);
  togglePopUp(editPopUp);
});
//
const addButton = document.querySelector(".profile__add-button");
addButton.addEventListener("click", () => {
  formHandler(addPopUp);
  togglePopUp(addPopUp);
});
//=============================================================
//=============submit editForm для профиля=====================
const editFormSubmit = (evt) => {
  const nameLength = firstInput.value.length; //орграничение длины имени
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  if (nameLength >= 2 && nameLength <= 24) {
    profileInfo.name.textContent = firstInput.value;
    profileInfo.desc.textContent = secondInput.value;
    togglePopUp(editPopUp);
  } else window.alert("Вы уверены, что вас правда так зовут? : )");
}
editForm.addEventListener("submit", editFormSubmit);
//=============================================================
//=============submit addForm для карточек=====================
const addFormSubmit = (evt) => {
  evt.preventDefault();
  //
  const placeLength = firstInput.value.length;
  const linkLength = firstInput.value.length;
  if (placeLength !== 0 && linkLength !== 0) {
    addItem(firstInput.value, secondInput.value);
    togglePopUp(addPopUp);
  } else window.alert("Не оставляйте поля пустыми");
}
addForm.addEventListener("submit", addFormSubmit);
//=============================================================
//========загрузка контейнера и работа с item карточек=========
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
  }
];
//
const itemsContainer = document.querySelector(".items");
const addItem = (titleValue, imageValue) => {
  const itemTemplate = document.querySelector("#item-template").content;
  const itemElement = itemTemplate.querySelector(".item").cloneNode(true);
  //-------------------------------------------------
  const itemImage = itemElement.querySelector(".item__image");
  itemElement.querySelector(".item__title").textContent = titleValue;
  itemImage.src = imageValue;
  //delete
  const itemDeleteButton = itemElement.querySelector(".item__delele-button");
  itemDeleteButton.addEventListener("click", (evt) => {
    itemElement.remove();
  });
  //like
  const itemLikeButton = itemElement.querySelector(".item__like");
  itemLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("item__like_active");
  });
  //open img
  itemImage.addEventListener("click", (evt) => {
    const imageLink = imagePopUp.querySelector(".pop-up__image");
    const imagePlace = imagePopUp.querySelector("#image-open-title");
    imageLink.src = evt.target.src;
    imagePlace.textContent = evt.target.nextElementSibling.textContent;
    togglePopUp(imagePopUp);
  });
  itemsContainer.prepend(itemElement);
}
//
initialCards.forEach((item) => {
  addItem(item["name"], item["link"]);
});
//=============================================================
//все
