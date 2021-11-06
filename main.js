(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkResult(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResult(e)}))}},{key:"removeItem",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"likeHandler",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return n._checkResult(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkResult(e)}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._inputErrorClass),this._errorElement.textContent=e.validationMessage,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._inputErrorClass),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass)}},{key:"_checkInputValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"_toggleButton",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._disableSubmitButton()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValid(t),e._toggleButton()})),e._toggleButton()}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;this._renderedItems=e,this._renderedItems.reverse().forEach((function(e){t._renderer(e)}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n,r,o,i,u){var c=t.name,a=t.link,s=t.likes,l=t._id,f=t.owner;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userId=u.id,this._title=c,this._image=a,this._likes=s,this._cardSelector=n,this._id=l,this._owner=f,this._isLiked=this.isCardLiked(),this._likesAmount=this._likes.length,this._element=this._getTemplate(),this._handleCardClick=r,this._handleLikeCounter=i,this._handleRemoveClick=o,this._itemImage=this._element.querySelector(".item__image"),this._itemLikeBtn=this._element.querySelector(".item__like"),this._itemRemoveBtn=this._element.querySelector(".item__delele-button"),this._likeCounter=this._element.querySelector(".likes__counter")}var t,n;return t=e,(n=[{key:"isCardLiked",value:function(){var e=this;return Boolean(this._likes.find((function(t){return t._id===e._userId})))}},{key:"_getTemplate",value:function(){var e=document.querySelector(this._cardSelector).content.children[0].cloneNode(!0);return this._owner._id===this._userId&&(e.querySelector(".item__delele-button").style.visibility="visible"),this._isLiked&&e.querySelector(".item__like").classList.toggle("item__like_active"),e}},{key:"_like",value:function(e){this._isLiked=!this._isLiked,console.log("now liked is "+this._isLiked),e.target.classList.toggle("item__like_active"),this._handleLikeCounter(this,this._id)}},{key:"_remove",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._itemImage.addEventListener("click",(function(){return e._handleCardClick(e._title,e._image)})),this._itemLikeBtn.addEventListener("click",(function(t){return e._like(t)})),this._itemRemoveBtn.addEventListener("click",(function(){e._handleRemoveClick(e)}))}},{key:"generateCard",value:function(){return this._itemImage.src="".concat(this._image),this._itemImage.alt="".concat(this._title),this._element.querySelector(".item__title").textContent=this._title,this._likeCounter.textContent=this._likesAmount,this._setEventListeners(),this._element}}])&&u(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._handleEscClose=function(e){"Escape"===e.key&&(n.close(),e.target.blur())}}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("pop-up_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("pop-up_opened")}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target===t.currentTarget||t.target.classList.contains("pop-up__wrapper")||t.target.classList.contains("pop-up__close-button"))&&e.close()}))}}])&&a(t.prototype,n),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},h(e,t,n||e)}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitCallback=t,n._form=n._popupElement.querySelector(".pop-up__form"),n._inputList=n._form.querySelectorAll(".pop-up__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){var t=Object.values(e);this._inputList.forEach((function(e,n){e.value=t[n].textContent}))}},{key:"close",value:function(){h(d(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){h(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._submitCallback)}}])&&f(t.prototype,n),u}(s);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},b(e,t,n||e)}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._previewImage=t._popupElement.querySelector(".pop-up__image"),t._previewTitle=t._popupElement.querySelector("#image-open-title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._previewTitle.textContent=e,this._previewImage.src=t,this._previewImage.alt=e,b(E(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),u}(s);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t,n){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},L(e,t,n||e)}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function I(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._popupElement.querySelector(".pop-up__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;L(j(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitCallback()}))}},{key:"setSubmitCallback",value:function(e){this._submitCallback=e}}])&&C(t.prototype,n),u}(s);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:document.querySelector(".profile__title"),about:document.querySelector(".profile__subtitle"),avatar:document.querySelector(".profile__avatar")}}},{key:"setUserInfo",value:function(e){console.log("SET user info from API"),e.name&&(this._name.textContent=e.name),e.about&&(this._about.textContent=e.about),e.name&&(this._avatar.src=e.avatar)}}])&&q(t.prototype,n),e}(),B=document.querySelector("#confirm"),T=document.querySelector("#edit-profile"),x=document.querySelector("#add-item"),V=document.querySelector("#image-open"),U=document.querySelector("#avatar-update"),A=(document.querySelector(".pop-up-opened"),document.querySelector(".pop-up"),function(e){return e._popupElement.querySelector(".pop-up__submit-button")}),D=document.querySelector(".items"),H=(document.querySelector(".pop-up__close-button"),document.querySelector(".profile__edit-button")),N=document.querySelector(".profile__add-button"),J=document.querySelector(".profile__avatar-button"),z={name:document.querySelector(".profile__title"),about:document.querySelector(".profile__subtitle"),avatar:document.querySelector(".profile__avatar"),id:null},M=function(e,t,n){e.textContent=n?"Сохранение..":t},F=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-29",headers:{authorization:"2181393e-dcbd-4ec4-b795-5358ac072ebb","Content-Type":"application/json"}}),G=new S(V);G.setEventListeners();var K=function(e,t){G.open(e,t)},Q=new m(x,(function(){var e=Q._getInputValues(),t=A(Q).textContent;M(A(Q),t,!0),F.addCard(e).then((function(e){return Z(e)})).then((function(e){e.querySelector(".item__delele-button").style.visibility="visible",$.addItem(e)})).then((function(e){Q.close()})).finally((function(e){return M(A(Q),t,!1)})).catch((function(e){return console.log(e)}))}));Q.setEventListeners(),N.addEventListener("click",(function(){Q.open()}));var W=function(e,t){var n=e._element.querySelector(".likes__counter");F.likeHandler(e._id,e.isCardLiked()).then((function(e){n.textContent=e.likes.length})).catch((function(e){return console.log(e)}))},X=new R(B);X.setEventListeners();var Y=function(e){X.setSubmitCallback((function(){console.log("SubmitCallback"),F.removeItem(e._id).then((function(t){e._remove(),X.close()})).catch((function(e){return console.log(e)}))})),X.open()},Z=function(e){return new c(e,"#item-template",K,Y,W,z).generateCard()},$=new i({data:null,renderer:function(e){var t=Z(e);$.addItem(t)}},D),ee=new P(z);Promise.all([F.getUserInfo(),F.getInitialCards()]).then((function(e){ee.setUserInfo(e[0]),z.id=e[0]._id,$.renderItems(e[1])})).catch((function(e){return console.log(e)})),H.addEventListener("click",(function(){var e=ee.getUserInfo();re.setInputValues(e),re.open()})),J.addEventListener("click",(function(e){te.open()}));var te=new m(U,(function(){var e=te._getInputValues().avatar,t=A(te).textContent;M(A(te),t,!0),F.changeUserAvatar(e).then((function(t){z.avatar.src=e})).then((function(e){te.close()})).finally((function(e){return M(A(te),t,!1)})).catch((function(e){return console.log(e)}))}));te.setEventListeners();var ne,re=new m(T,(function(){var e=re._getInputValues(),t=A(re).textContent;M(A(re),t,!0),F.setUserInfo(e).then((function(t){ee.setUserInfo({name:e.name,about:e.about,avatar:z.avatar.src})})).then((function(e){re.close()})).finally((function(e){return M(A(re),t,!1)})).catch((function(e){return console.log(e)}))}));re.setEventListeners(),new r(ne={formSelector:".pop-up__form",inputSelector:".pop-up__input",submitButtonSelector:".pop-up__submit-button",inactiveButtonClass:"pop-up__submit-button_disabled",inputErrorClass:"pop-up__input_type_error",errorClass:"pop-up__error_visible"},document.forms.add).enableValidation(),new r(ne,document.forms.edit).enableValidation(),new r(ne,document.forms.avatar).enableValidation()})();