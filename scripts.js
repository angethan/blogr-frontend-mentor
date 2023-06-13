//MOBILE DROPDOWN
const toggleMobileDropdown = document.querySelector("#toggleMobileDropdown");
const toggleIcon = document.querySelector(".toggle-icon");
const mobileDropdown = document.querySelector(".mobile-dropdown");

let isDropdownVisible = false;

toggleMobileDropdown.addEventListener("click", () => {
  if (isDropdownVisible) {
    mobileDropdown.style.display = "none";
    toggleIcon.src = "./images/icon-hamburger.svg";
  } else {
    mobileDropdown.style.display = "block";
    toggleIcon.src = "./images/icon-close.svg";
  }

  isDropdownVisible = !isDropdownVisible;
});

//ACCORDION
let accordion = document.querySelectorAll(".accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    let accordionItem = this.nextElementSibling;
    if (accordionItem.style.display === "block") {
      accordionItem.style.display = "none";
    } else {
      accordionItem.style.display = "block";
    }
  });
}
