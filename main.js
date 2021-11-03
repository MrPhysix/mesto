(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).catch((function(e){return console.log(e)}))}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).catch((function(e){return console.log(e)}))}},{key:"removeItem",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).catch((function(e){return console.log(e)}))}},{key:"likeHandler",value:function(e,t){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"changeUserAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).catch((function(e){return console.log(e)}))}}])&&e(n.prototype,r),t}(),n=document.querySelector("#confirm"),r=document.querySelector("#edit-profile"),o=document.querySelector("#add-item"),i=document.querySelector("#image-open"),u=document.querySelector("#avatar-update"),c=(document.querySelector(".pop-up-opened"),document.querySelector(".pop-up"),document.querySelector(".items")),s=(document.querySelector(".pop-up__close-button"),document.querySelector(".profile__edit-button")),a=document.querySelector(".profile__add-button"),l=document.querySelector(".profile__avatar-button"),f={name:document.querySelector(".profile__title"),about:document.querySelector(".profile__subtitle"),avatar:document.querySelector(".profile__avatar"),id:null},p={formSelector:".pop-up__form",inputSelector:".pop-up__input",submitButtonSelector:".pop-up__submit-button",inactiveButtonClass:"pop-up__submit-button_disabled",inputErrorClass:"pop-up__input_type_error",errorClass:"pop-up__error_visible"};function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=function(e){"Escape"===e.key&&(n.close(),e.target.blur())}}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("pop-up_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("pop-up_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains("pop-up__wrapper")||t.target.classList.contains("pop-up__close-button"))&&e.close()}))}}])&&h(t.prototype,n),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},y(e,t,n||e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitCallback=t,n._form=n._popupElement.querySelector(".pop-up__form"),n}return t=u,(n=[{key:"getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".pop-up__input"),this._formValues={},this._inputList.forEach((function(t,n){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList=this._form.querySelectorAll(".pop-up__input");var t=Object.values(e);this._inputList.forEach((function(e,n){e.value=t[n].textContent}))}},{key:"close",value:function(){y(g(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){y(g(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitCallback)}}])&&d(t.prototype,n),u}(_);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},w(e,t,n||e)}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._previewImage=t._popupElement.querySelector(".pop-up__image"),t._previewTitle=t._popupElement.querySelector("#image-open-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._previewTitle.textContent=e,this._previewImage.src=t,this._previewImage.alt=e,w(O(u.prototype),"open",this).call(this)}}])&&S(t.prototype,n),u}(_);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}document.querySelector(".profile");var q=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){console.log("GET user info from API")}},{key:"setUserInfo",value:function(e){console.log("SET user info from API"),this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&j(t.prototype,n),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.reverse().forEach((function(t){e._renderer(t)}))}}])&&P(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n,r,o,i,u){var c=t.name,s=t.link,a=t.likes,l=t._id,f=t.owner;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userId=u.id,this._title=c,this._image=s,this._likes=a,this._cardSelector=n,this._id=l,this._owner=f,this._isLiked=this.isCardLiked(),console.log(this._isLiked),this._likesAmount=this._likes.length,this._element=this._getTemplate(),this._handleCardClick=r,this._handleLikeCounter=i,this._handleRemoveClick=o,this._itemImage=this._element.querySelector(".item__image"),this._itemLikeBtn=this._element.querySelector(".item__like"),this._itemRemoveBtn=this._element.querySelector(".item__delele-button"),this._likeCounter=this._element.querySelector(".likes__counter")}var t,n;return t=e,(n=[{key:"isCardLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.children[0].cloneNode(!0)}},{key:"_like",value:function(e){var t=this;return new Promise((function(e,n){t._handleLikeCounter(t,t._id),e()})).then((function(n){t._isLiked=!t._isLiked,console.log("now liked is "+t._isLiked),e.target.classList.toggle("item__like_active")}))}},{key:"_remove",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._itemImage.addEventListener("click",(function(){return e._handleCardClick(e._title,e._image)})),this._itemLikeBtn.addEventListener("click",(function(t){return e._like(t)})),this._itemRemoveBtn.addEventListener("click",(function(){e._handleRemoveClick(e,e._id)}))}},{key:"generateCard",value:function(){return this._itemImage.src="".concat(this._image),this._itemImage.alt="".concat(this._title),this._element.querySelector(".item__title").textContent=this._title,this._likeCounter.textContent=this._likesAmount,this._setEventListeners(),this._element}}])&&B(t.prototype,n),e}();function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},A(e,t,n||e)}function V(e,t){return V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},V(e,t)}function D(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitCallback=t,n._submitButton=n._popupElement.querySelector(".pop-up__submit-button"),n}return t=u,(n=[{key:"setEventListeners",value:function(){A(H(u.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",this._submitCallback)}}])&&U(t.prototype,n),u}(_);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this.enableValidation()}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass)}},{key:"_checkInputValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._disableSubmitButton()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValid(t),e._toggleButton()})),e._toggleButton()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&J(t.prototype,n),e}(),G=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"2181393e-dcbd-4ec4-b795-5358ac072ebb","Content-Type":"application/json"}});s.addEventListener("click",(function(){Z.getUserInfo(),ee.setInputValues(f),ee.open()}));var M=new I(i);M.setEventListeners();var F,K=function(e,t){M.open(e,t)},Q=new k(o,(function(){var e=Q.getInputValues(),t=G.addCard(e),n=Q._popupElement.querySelector(".pop-up__submit-button");n.textContent="Создание.",console.log(n.textContent),t.then((function(e){return e.json()})).then((function(e){return n.textContent="Создание..",Y(e)})).then((function(e){n.textContent="Создание...",e.querySelector(".item__delele-button").style.visibility="visible",F.addItem(e)})).finally((function(e){Q.close(),n.textContent="Создан"}))}));Q.setEventListeners(),a.addEventListener("click",(function(){Q.open()}));var W=function(e,t){var r=new N(n,(function(){return G.removeItem(t).then((function(t){e._owner._id===f.id&&e._remove()})).then((function(e){return r.close()}))}));r.setEventListeners(),r.open()},X=function(e,t){var n=e._element.querySelector(".likes__counter");G.likeHandler(e._id,e.isCardLiked()).then((function(e){n.textContent=e.likes.length})).then((function(e){return console.log("refresh element")}))},Y=function(e){return new T(e,"#item-template",K,W,X,f).generateCard()};G.getInitialCards().then((function(e){var t=new R({data:e,renderer:function(e){var n=Y(e);e.owner._id===f.id&&(n.querySelector(".item__delele-button").style.visibility="visible"),e.likes.forEach((function(e){e._id===f.id&&n.querySelector(".item__like").classList.toggle("item__like_active")})),t.addItem(n)}},c);return t})).then((function(e){return e.renderItems(),F=e,e})).then((function(e){}));var Z=new q(f);G.getUserInfo().then((function(e){Z.setUserInfo(e),f.id=e._id})),l.addEventListener("click",(function(e){var t=new k(u,(function(){var e=t.getInputValues().avatar,n=Q._popupElement.querySelector(".pop-up__submit-button");n.textContent="Сохранение.",G.changeUserAvatar(e).then((function(t){n.textContent="Сохранение..",f.avatar.src=e})).then((function(e){n.textContent="Сохранен",t.close()}))}));t.open(),t.setEventListeners()}));var $,ee=new k(r,(function(){var e=ee.getInputValues(),t=Q._popupElement.querySelector(".pop-up__submit-button");t.textContent="Сохранение.",console.log(t),G.setUserInfo(e).then((function(n){t.textContent="Сохранение..",Z.setUserInfo({name:e.name,about:e.about,avatar:f.avatar.src})})).then((function(e){t.textContent="Сохранен",ee.close()}))}));ee.setEventListeners(),$=p,document.querySelectorAll($.formSelector).forEach((function(e){new z(p,e)}))})();