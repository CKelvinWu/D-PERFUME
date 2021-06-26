const ham_icon = document.querySelector(".ham-icon");
const dropdown = document.querySelector(".dropdown")

ham_icon.addEventListener("click", function (e) {
    for (var i = 0; i < dropdown.classList.length; i++) {
        if (dropdown.classList[i] === "dropdown-active") {
            dropdown.classList.remove("dropdown-active");
            return;
        }
    }
    dropdown.classList.add("dropdown-active");
})