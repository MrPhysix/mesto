const editPopUp = document.querySelector('#edit-profile');
const addPopUp = document.querySelector('#add-item');
const imagePopUp = document.querySelector('#image-open');
//
const editProfileForm = document.forms.edit;
const addCardForm = document.forms.add;
//
const titleInput = editProfileForm.elements.name;
const descriptionInput = editProfileForm.elements.description;
//
const cardTitleInput = addCardForm.elements.name;
const cardLinkInput = addCardForm.elements.description;
//
const itemTemplate = document.querySelector('#item-template').content;
const itemsContainer = document.querySelector('.items');
//
const imageLink = imagePopUp.querySelector('.pop-up__image');
const imagePlace = imagePopUp.querySelector('#image-open-title');

const profileInfo = {
  name: document.querySelector('.profile__title'),
  desc: document.querySelector('.profile__subtitle'),
};
//разбил togglePopup на две функции
//
const openPopup = (popup) => {
  popup.classList.add('pop-up_opened');
  document.addEventListener('keydown', closePopupOnKey);
  popup.addEventListener('click', closePopupOnClick);
};

const closePopup = (popup) => {
  popup.classList.remove('pop-up_opened');
  document.removeEventListener('keydown', closePopupOnKey);
  popup.removeEventListener('click', closePopupOnClick);
};

const closePopupOnKey = (evt) => {
  const currentPopup = document.querySelector('.pop-up_opened');

  if (currentPopup && evt.key === 'Escape') {
    closePopup(currentPopup);
    evt.target.blur(); //отменяет фокус на button
  }
};

const closePopupOnClick = (evt) => {
  const currentPopup = document.querySelector('.pop-up_opened');
  const targetClass = evt.target.classList;

  if (evt.target === evt.currentTarget ||
    targetClass.contains('pop-up__wrapper') ||
    targetClass.contains('pop-up__close-button')) {
    closePopup(currentPopup);
  }
};

const addCardButton = document.querySelector('.profile__add-button');
addCardButton.addEventListener('click', () => {
  addCardForm.reset();
  openPopup(addPopUp);
});

const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', () => {
  titleInput.value = profileInfo.name.textContent;
  descriptionInput.value = profileInfo.desc.textContent;
  openPopup(editPopUp);
});

const editProfileFormSubmit = (evt) => {
  profileInfo.name.textContent = titleInput.value;
  profileInfo.desc.textContent = descriptionInput.value;
  closePopup(editPopUp);
};
editProfileForm.addEventListener('submit', editProfileFormSubmit);
//лишнее удалил
const addCardFormSubmit = (evt) => {
  addCard(cardTitleInput.value, cardLinkInput.value);
  closePopup(addPopUp);
};
addCardForm.addEventListener('submit', addCardFormSubmit);

//вынес колбэки. не совсем понимаю, нужно ли
//их выносить глобально или лучше в createCard?
const handleRemoveClick = (itemElement) => {
  itemElement.remove();
};

const handleLikeClick = (evt) => {
  evt.target.classList.toggle('item__like_active');
};
//как то опять много параметров получается
const handleImageClick = (evt, titleValue, imageLink, imagePlace, imagePopUp) => {
  imageLink.alt = titleValue;
  imageLink.src = evt.target.src;
  imagePlace.textContent = evt.target.nextElementSibling.textContent;
  openPopup(imagePopUp);
};

const createCard = (titleValue, imageValue) => {
  const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
  const itemImage = itemElement.querySelector('.item__image');

  itemElement.querySelector('.item__title').textContent = titleValue;
  itemImage.src = imageValue;
  itemImage.alt = titleValue;

  const itemDeleteButton = itemElement.querySelector('.item__delele-button');
  itemDeleteButton.addEventListener('click', () => {
    handleRemoveClick(itemElement);
  });

  const itemLikeButton = itemElement.querySelector('.item__like');
  itemLikeButton.addEventListener('click', (evt) => {
    handleLikeClick(evt);
  });

  itemImage.addEventListener('click', (evt) => {
    handleImageClick(evt, titleValue, imageLink, imagePlace, imagePopUp);
  });

  return itemElement;
};

const addCard = (titleValue, imageValue) => {
  itemsContainer.prepend(createCard(titleValue, imageValue));
};

initialCards.forEach((item) => {
  addCard(item.name, item.link);
});