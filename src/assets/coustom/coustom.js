import Swiper from "swiper";
import "swiper/css";

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const body = document.body;
const popup = document.querySelectorAll(`.pop-up`);
const popped = document.createElement("div");
const closePopup = document.createElement("span");
const popupImage = document.createElement("img");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

popup.forEach((p) =>
  p.addEventListener(`click`, () => {
    body.appendChild(popped);
    popped.classList.add("poped");
    popped.innerHTML = "";
    popped.appendChild(closePopup);
    body.style.overflow = "hidden";

    popped.appendChild(popupImage);
    popupImage.src = p.src;

    closePopup.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>`;
    closePopup.classList.add("close_btn");
    closePopup.addEventListener("click", () => {
      body.removeChild(document.querySelector(`.poped`));

      body.style.overflow = "auto";
    });
  })
);
