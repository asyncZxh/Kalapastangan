import { html as html_1, play_song } from "./intro.js";
import { html as html_2, play_lyrics as play_lyrics_1 } from "./L1.js";
import { play_lyrics as play_lyrics_2 } from "./L2.js";

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
    }, 100);
    document
      .querySelectorAll(".heart")
      .forEach((heart) => (heart.style.opacity = 0));
    setTimeout(() => {
      root.innerHTML = html_2;
      new Promise((resolve) => {
        play_lyrics_1(resolve);
      }).then(() => {
        play_lyrics_2();
      });
    }, 1000);
  },
  {
    once: true,
  },
);
