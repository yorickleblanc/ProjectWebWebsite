var deButton = document.querySelector("article + div button ");

deButton.addEventListener("click", klikkie);

function klikkie() {
    deButton.classList.add("donker");
}
