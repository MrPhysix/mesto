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

const openForm = (form, popup) => {
  if (form === editProfileForm) {
    titleInput.value = profileInfo.name.textContent;
    descriptionInput.value = profileInfo.desc.textContent;
  } else form.reset();
  togglePopUp(popup);
};

const togglePopUp = (item) => {
  item.classList.toggle('pop-up_opened');
  document.addEventListener('keydown', closePopupOnKey);
  item.addEventListener('click', closePopupOnOverlay);
};

//закрытие. Не получилось объединить. evt.key не срабатывает(
const closePopupOnKey = (evt) => {
  const currentPopup = document.querySelector('.pop-up_opened');

  if (currentPopup && evt.key === 'Escape') {
    togglePopUp(currentPopup);
    evt.target.blur(); //отменяет фокус на button
  }
};
//думаю как то можно это все сократить, но я не знаю как это делается с моей версткой по другому
const closePopupOnOverlay = (evt) => {
  const currentPopup = document.querySelector('.pop-up_opened');
  const targetClass = evt.target.classList;

  if (evt.target === evt.currentTarget ||
    targetClass.contains('pop-up__wrapper') ||
    targetClass.contains('pop-up__close-button')) {
    togglePopUp(currentPopup);
  }
};

const addCardButton = document.querySelector('.profile__add-button');
addCardButton.addEventListener('click', () => {
  openForm(addCardForm, addPopUp);
});
const editProfileButton = document.querySelector('.profile__edit-button');
editProfileButton.addEventListener('click', () => {
  openForm(editProfileForm, editPopUp);
});

const editProfileFormSubmit = (evt) => {
  profileInfo.name.textContent = titleInput.value;
  profileInfo.desc.textContent = descriptionInput.value;
  togglePopUp(editPopUp);
  console.log('edit submit')
};
editProfileForm.addEventListener('submit', editProfileFormSubmit);
console.log(editProfileForm)

const addCardFormSubmit = (evt) => {
  createCard(cardTitleInput.value, cardLinkInput.value);
  addCard(cardTitleInput.value, cardLinkInput.value);
  togglePopUp(addPopUp);
}
addCardForm.addEventListener('submit', addCardFormSubmit);

const createCard = (titleValue, imageValue) => {
  const itemElement = itemTemplate.querySelector('.item').cloneNode(true);
  const itemImage = itemElement.querySelector('.item__image');

  itemElement.querySelector('.item__title').textContent = titleValue;
  itemImage.src = imageValue;
  itemImage.alt = titleValue;

  const itemDeleteButton = itemElement.querySelector('.item__delele-button');
  itemDeleteButton.addEventListener('click', (evt) => {
    itemElement.remove();
  });

  const itemLikeButton = itemElement.querySelector('.item__like');
  itemLikeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('item__like_active');
  });

  itemImage.addEventListener('click', (evt) => {
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
  addCard(item['name'], item['link']);
});