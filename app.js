let navIcons = document.querySelector(".nav-menu-icon");
let barIcon = document.querySelector(".fa-bars");
let timesIcon = document.querySelector(".fa-times");

// Function to Toggle Icon when clicked
navIcons.addEventListener("click", () => {
	barIcon.classList.toggle("hidden");
	timesIcon.classList.toggle("hidden");
});
