const mobileBtn = document.getElementById("mobile-menu");
const navBar = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
	navBar.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
	navBar.classList.remove("menu-btn");
});
