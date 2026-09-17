var numbtns = document.querySelectorAll(".numbtn");
var _display = document.querySelector(".display");
var _delbtn = document.querySelector(".delbtn");

numbtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    var _input = e.target.innerText;

    _display.value += _input;
  });
});

_delbtn.addEventListener("click", () => {
  _display.value = "";
});
