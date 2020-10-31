var deEersteButton;

deEersteButton = document.querySelector("article + div button");

deEersteButton.addEventListener("click", veranderMezelf);

function veranderMezelf() {

  deEersteButton.classList.toggle("donker");
}

