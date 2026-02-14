import { html as html_1, play_song } from "./intro.js";
import { html as html_2, play_lyrics as play_lyrcis_1 } from "./L1.js";
const root = document.getElementById("root");
root.innerHTML = html_1;

const heart = document.querySelector(".heart-main");
heart.addEventListener(
  "click",
  () => {
    window.console.log(":starting");
    heart.style.animation = "none";
    play_song();
    document.body.style.cursor = "none";
    setTimeout(() => {
      heart.classList.add("enter");
      heart_holder.classList.add("enter");
    }, 100);
    document
      .querySelectorAll(".heart")
      .forEach((heart) => (heart.style.opacity = 0));
    setTimeout(() => {
      root.innerHTML = html_2;
      play_lyrcis_1();
    }, 1000);
  },
  {
    once: true,
  },
);
