"use strict";

var toggleButton = document.getElementById('toggle-button');
var sideBar = document.getElementById('side-bar');
toggleButton.addEventListener('click', show);

function show() {
  sideBar.classList.toggle('active');
} // REMOVE SIDEBAR IF CLICK ON THE MAIN CONTENT


var content = document.querySelector('.content');
content.addEventListener('click', function () {
  sideBar.classList.remove('active');
});