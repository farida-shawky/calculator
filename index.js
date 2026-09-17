var numbtns = document.querySelectorAll("div button");
var _display = document.querySelector(".display");
var _delbtn = document.querySelector(".delbtn");

numbtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    var _input = e.target.innerText;
    if (_input !== "del" && _input !== "C" && _input !== "=") {
      _display.value += _input;
    }
  });
});

_delbtn.addEventListener("click", () => {
  _display.value = "";
});
