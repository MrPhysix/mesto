import {
  profileInfo
} from './utils.js';

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
    profileInfo.name.textContent = info.name;
    profileInfo.description.textContent = info.description;
  }
}