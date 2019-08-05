import "./styles/main.scss";

import bindFootnotes from "littlefoot";
import bindToggles from "./js/toggle";
import bindAjaxForms from "./js/ajaxForm";
import bindSearch from "./js/search/index";
import bindEventTracking from "./js/eventTracking";

function init(APP) {
  if (APP.CONFIG.ALGOLIA) {
    APP.SEARCH = bindSearch(APP.CONFIG.ALGOLIA); // eslint-disable-line no-param-reassign
  }
  bindToggles();
  bindAjaxForms();
  bindEventTracking();
  bindFootnotes();

  document.documentElement.classList.remove("js-loading");
  document.documentElement.classList.add("js-loaded");
}

window.addEventListener("DOMContentLoaded", () => init(window.APP));
