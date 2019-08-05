import "./styles/main.scss";

import bindFootnotes from "littlefoot";
import bindToggles from "./js/toggle";
import bindAjaxForms from "./js/ajaxForm";
import bindSearch from "./js/search/index";
import bindEventTracking from "./js/eventTracking";

function init() {
  bindSearch();
  bindToggles();
  bindAjaxForms();
  bindEventTracking();
  bindFootnotes();

  document.documentElement.classList.remove("js-loading");
  document.documentElement.classList.add("js-loaded");
}

window.addEventListener("DOMContentLoaded", init);
