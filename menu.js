"use strict";function e(e){var c=document.querySelector(".".concat(t)),o="--hidden";e.target===n?(console.log("Show menu!"),e.target.classList.add("header__menu-btn".concat(o)),a.classList.remove("header__menu-close".concat(o)),c.classList.remove("header__mobile".concat(o)),document.body.style.overflow="hidden"):(console.log("Hide menu!"),a.classList.add("header__menu-close".concat(o)),n.classList.remove("header__menu-btn".concat(o)),c.classList.add("header__mobile".concat(o)),document.body.style.overflow="")}var t,n,a,c;t="header__mobile",n=document.querySelector(".".concat("header__menu-btn")),a=document.querySelector(".".concat("header__menu-close")),c=document.querySelector(".".concat("header__menu-icon")),document.querySelector(".".concat(t)),n.addEventListener("click",e,!1),a.addEventListener("click",e,!1),c.addEventListener("click",e,!1);