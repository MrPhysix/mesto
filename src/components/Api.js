export default class Api {
  constructor(config) {
    this._url = config.baseUrl;
    this._headers = config.headers;
  }
  // .then(res => {
  //   if (res.ok) {
  //     return res.json()
  //   }
  //   return Promise.reject(`Ошибка: ${res.status}`);
  // })
  _resultCheck(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
        headers: this._headers
      })
      .then(res => this._resultCheck(res));
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    }).then(res => this._resultCheck(res));
  }

  setUserInfo(info) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        about: info.about
      })
    });
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    });
  }

  removeItem(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    });
  }

  likeHandler(id, status) {
    return fetch(`${this._url}/cards/likes/${id}`, {
        method: !status ? 'PUT' : 'DELETE',
        headers: this._headers,
      })
      .then(res => this._resultCheck(res));
  }

  changeUserAvatar(picture) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: picture
      })
    });
  }
}