import { html as html_1, play_song } from "./intro.js";

const body = document.querySelector("body");
body.innerHTML = html_1;

const heart = window.document.querySelector(".heart-main");
heart.addEventListener(
  "click",
  () => {
    window.console.log(":starting");
    heart.style.animation = "none";
    play_song();
    setTimeout(() => heart.classList.add("enter"), 100);
    window.document
      .querySelectorAll(".heart")
      .forEach((heart) => (heart.style.opacity = 0));
  },
  {
    once: true,
  },
);
