var deDerdeP;

deDerdeP = document.querySelector("article + div button");

deDerdeP.addEventListener("click", veranderMezelf);

function veranderMezelf() {

  deDerdeP.classList.add("donker");
}