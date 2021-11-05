export default class UserInfo {
  constructor({
    name,
    about,
    avatar
  }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }
  getUserInfo() {
    return {
      name: document.querySelector('.profile__title'),
      about: document.querySelector('.profile__subtitle'),
      avatar: document.querySelector('.profile__avatar'),
    }
    console.log('GET user info from API');
  }

  setUserInfo(info) {
    console.log('SET user info from API');
    if (info.name) this._name.textContent = info.name;
    if (info.about) this._about.textContent = info.about;
    if (info.name) this._avatar.src = info.avatar;
  }
}