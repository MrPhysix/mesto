const editPopUp = document.querySelector("#edit-profile");
const addPopUp = document.querySelector("#add-item");
const imagePopUp = document.querySelector("#image-open");
const editProfileForm = document.querySelector("#info-edit-form");
const addCardForm = document.querySelector("#add-item-form");
const profileNameInput = editProfileForm.querySelector("#name");
const profileDescriptionInput = editProfileForm.querySelector("#description");
const cardTitleInput = addCardForm.querySelector("#place");
const cardLinkInput = addCardForm.querySelector("#link");
const itemTemplate = document.querySelector("#item-template").content;
const itemsContainer = document.querySelector(".items");
const imageLink = imagePopUp.querySelector(".pop-up__image");
const imagePlace = imagePopUp.querySelector("#image-open-title");

const profileInfo = {
  name: document.querySelector(".profile__title"),
  desc: document.querySelector(".profile__subtitle"),
};

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

/*let closeButton;
const togglePopUp = (item) => {
  closeButton = item.querySelector(".pop-up__close-button");
  closeButton.addEventListener("click", () => {
    togglePopUp(item);
  });
  item.classList.toggle("pop-up_opened");
}*/

//переписал через Node массив
const togglePopUp = (item) => {
  item.classList.toggle("pop-up_opened");
};
const closeButton = document.querySelectorAll(".pop-up__close-button");
closeButton.forEach((button) => {
  button.addEventListener("click", (evt) => {
    evt = evt.target.closest(".pop-up");
    togglePopUp(evt);
  });
});

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", openEditProfileForm);

const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", openAddCardForm);

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

const addCardFormSubmit = (evt) => {
  evt.preventDefault();
  const placeLength = cardTitleInput.value.length;
  const linkLength = cardLinkInput.value.length;
  if (placeLength !== 0 && linkLength !== 0) {
    createCard(cardTitleInput.value, cardLinkInput.value);
    addCard(cardTitleInput.value, cardLinkInput.value);
    togglePopUp(addPopUp);
  } else window.alert("Не оставляйте поля пустыми");
}
addCardForm.addEventListener("submit", addCardFormSubmit);

const createCard = (titleValue, imageValue) => {
  const itemElement = itemTemplate.querySelector(".item").cloneNode(true);
  const itemImage = itemElement.querySelector(".item__image");

  itemElement.querySelector(".item__title").textContent = titleValue;
  itemImage.src = imageValue;
  itemImage.alt = titleValue;

  const itemDeleteButton = itemElement.querySelector(".item__delele-button");
  itemDeleteButton.addEventListener("click", (evt) => {
    itemElement.remove();
  });

  const itemLikeButton = itemElement.querySelector(".item__like");
  itemLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("item__like_active");
  });

  itemImage.addEventListener("click", (evt) => {
    imageLink.alt = titleValue;
    imageLink.src = evt.target.src;
    imagePlace.textContent = evt.target.nextElementSibling.textContent;
    togglePopUp(imagePopUp);
  });
  return itemElement;
};

const addCard = (titleValue, imageValue) => {
  itemsContainer.prepend(createCard(titleValue, imageValue));
};

initialCards.forEach((item) => {
  addCard(item["name"], item["link"]);
});
