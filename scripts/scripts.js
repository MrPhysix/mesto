const editPopUp = document.querySelector("#edit-profile");
const addPopUp = document.querySelector("#add-item");
const imagePopUp = document.querySelector("#image-open");
//
const editProfileForm = document.querySelector("#info-edit-form");
const addCardForm = document.querySelector("#add-item-form");
//
const profileInfo = {
  name: document.querySelector(".profile__title"),
  desc: document.querySelector(".profile__subtitle"),
}
//
const profileNameInput = editProfileForm.querySelector("#name");
const profileDescriptionInput = editProfileForm.querySelector("#description");
const cardTitleInput = addCardForm.querySelector("#place");
const cardLinkInput = addCardForm.querySelector("#link");
//=============================================================
//=======================загрузка форм=========================
const openEditProfileForm = () => {
  profileNameInput.value = profileInfo.name.textContent;
  profileDescriptionInput.value = profileInfo.desc.textContent;
  togglePopUp(editPopUp);
};
const openAddCardForm = () => {
  cardTitleInput.value = "";
  cardLinkInput.value = "";
  togglePopUp(addPopUp);
};
//=============================================================
//=============popUp toggle для всех===========================
let closeButton;
const togglePopUp = (item) => {
  closeButton = item.querySelector(".pop-up__close-button");
  closeButton.addEventListener("click", () => {
    togglePopUp(item);
  });
  item.classList.toggle("pop-up_opened");
}
//==============кнопки ========================================
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", openEditProfileForm);
//
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", openAddCardForm);
//=============================================================
//=============submit editProfileForm для профиля=====================
const editProfileFormSubmit = (evt) => {
  const nameLength = profileNameInput.value.length; //орграничение длины имени
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  if (nameLength >= 2 && nameLength <= 24) {
    profileInfo.name.textContent = profileNameInput.value;
    profileInfo.desc.textContent = profileDescriptionInput.value;
    togglePopUp(editPopUp);
  } else window.alert("Вы уверены, что вас правда так зовут? : )");
}
editProfileForm.addEventListener("submit", editProfileFormSubmit);
//=============================================================
//=============submit addCardForm для карточек=====================
const addCardFormSubmit = (evt) => {
  evt.preventDefault();
  //
  const placeLength = cardTitleInput.value.length;
  const linkLength = cardLinkInput.value.length;
  if (placeLength !== 0 && linkLength !== 0) {
    createCard(cardTitleInput.value, cardLinkInput.value);
    addCard();
    togglePopUp(addPopUp);
  } else window.alert("Не оставляйте поля пустыми");
}
addCardForm.addEventListener("submit", addCardFormSubmit);
//=============================================================
//========загрузка контейнера и работа с item карточек=========
const itemsContainer = document.querySelector(".items");


const createCard = (titleValue, imageValue) => {
  const itemTemplate = document.querySelector("#item-template").content;
  const itemElement = itemTemplate.querySelector(".item").cloneNode(true);
  //-------------------------------------------------
  const itemImage = itemElement.querySelector(".item__image");
  itemElement.querySelector(".item__title").textContent = titleValue;
  itemImage.src = imageValue;
  itemImage.alt = titleValue;
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
    imageLink.alt = titleValue;
    imageLink.src = evt.target.src;
    imagePlace.textContent = evt.target.nextElementSibling.textContent;
    togglePopUp(imagePopUp);
  });
  return itemElement;
};
console.log(createCard())

const addCard = (titleValue, imageValue) => {
  itemsContainer.prepend(createCard(titleValue, imageValue));
};
//

initialCards.forEach((item) => {
  createCard(item["name"], item["link"]);
  addCard(item["name"], item["link"]);
});
//=============================================================
//все
