export default class UserInfo {
  constructor({
    name,
    description
  }) {
    this._name = name;
    this._description = description;
  }
  getUserInfo() {
    return {
      name: this._name,
      description: this._description,
    }
  }

  setUserInfo(info) {
    this._name.textContent = info.name;
    this._description.textContent = info.description;
  }
}