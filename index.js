const openModalEl = document.getElementById("open-modal");
const overlayEl = document.getElementById("overlay");
const closeModalEl = document.getElementById("close-modal");


openModalEl.addEventListener("click", function() {
    overlayEl.style.display = "block";
})

closeModalEl.addEventListener("click", function() {
    overlayEl.style.display = "none";
})