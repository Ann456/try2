parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IuX0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="4330ebfabc654a6992c2aa792f3173a3",t="https://newsapi.org/v2",s={headers:{Authorization:e}};class r{constructor(){this.searchQuery="",this.page=1}fetchArticles(){const e=`${t}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;return fetch(e,s).then(e=>e.json()).then(({articles:e})=>(this.incrementPage(),e))}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(e){this.searchQuery=e}}exports.default=r;
},{}],"RFle":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class e{constructor({selector:e,hidden:s=!1}){this.refs=this.getRefs(e),s&&this.hide()}getRefs(e){const s={};return s.button=document.querySelector(e),s.label=s.button.querySelector(".label"),s.spinner=s.button.querySelector(".spinner"),s}enable(){this.refs.button.disabled=!1,this.refs.label.textContent="Показать ещё",this.refs.spinner.classList.add("is-hidden")}disable(){this.refs.button.disabled=!0,this.refs.label.textContent="Загружаем...",this.refs.spinner.classList.remove("is-hidden")}show(){this.refs.button.classList.remove("is-hidden")}hide(){this.refs.button.classList.add("is-hidden")}}exports.default=e;
},{}],"IGHT":[function(require,module,exports) {
"use strict";var e=r(require("./news-service")),n=r(require("./components/load-more-btn"));function r(e){return e&&e.__esModule?e:{default:e}}const t={searchForm:document.querySelector(".js-search-form"),articlesContainer:document.querySelector(".js-articles-container")},a=new n.default({selector:'[data-action="load-more"]',hidden:!0}),i=new e.default;function o(e){if(e.preventDefault(),i.query=e.currentTarget.elements.query.value,""===i.query)return alert("Введите что-то нормальное");a.show(),i.resetPage(),s(),c()}function c(){a.disable(),i.fetchArticles().then(e=>{l(e),a.enable()})}function l(e){const n=e.map(({url:e,urlToImage:n,title:r,author:t,description:a})=>`\n  <li>\n    <a href="${e}" target="_blank" rel="noopener noreferrer">\n      <article>\n        <img src="${n}" alt="" width="480">\n        <h2>${r}</h2>\n        <p>Posted by: ${t}</p>\n        <p>${a}</p>\n      </article>\n    </a>\n  </li>`).join("");t.articlesContainer.insertAdjacentHTML("beforeend",n)}function s(){t.articlesContainer.innerHTML=""}t.searchForm.addEventListener("submit",o),a.refs.button.addEventListener("click",c);
},{"./news-service":"IuX0","./components/load-more-btn":"RFle"}]},{},["IGHT"], null)
//# sourceMappingURL=/try2/02-fetch-api-news.3cda09a0.js.map