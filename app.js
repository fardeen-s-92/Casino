let body = document.querySelector("body");

let loader = document.getElementById("loding");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

function login() {
  let form = document.querySelector(".container");
  let header = document.querySelector("#header");
  form.style.opacity = "1";
  header.style.opacity = "0.1";
  body.style.overflow = "hidden";
}

function login_btn() {
  let form = document.querySelector(".container");
  let header = document.querySelector("#header");
  form.style.opacity = "0";
  header.style.opacity = "1";
  body.style.overflow = "scroll";
}
