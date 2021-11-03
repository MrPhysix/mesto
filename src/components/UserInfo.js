const profileSection = document.querySelector('.profile');
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
    console.log('GET user info from API');
  }

  setUserInfo(info) {
    console.log('SET user info from API');
    this._name.textContent = info.name;
    this._about.textContent = info.about;
    this._avatar.src = info.avatar;
  }
}
// // const profileSection = document.querySelector('.profile');
//
// fetch('https://mesto.nomoreparties.co/v1/cohort-29/users/me', {
//     headers: {
//       authorization: '2181393e-dcbd-4ec4-b795-5358ac072ebb'
//     }
//   })
//   .then(res => res.json())
//   .then((result) => {
//     profileInfo.name.textContent = result.name;
//     profileInfo.description.textContent = result.about;
//     profileInfo.avatar.src = result.avatar;
//     profileInfo.id = result._id;
//   })
//   .catch((err) => {
//     profileInfo.avatar.src = avatarDefault;
//     profileInfo.name.textContent = "User";
//     profileInfo.description.textContent = "Not found";
//     profileInfo.id = null;
//   })
//   .finally(() => {
//     profileSection.style.visibility = "visible";
//   });