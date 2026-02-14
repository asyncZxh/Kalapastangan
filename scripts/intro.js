function play_song() {
  const audio = window.document.createElement("audio");
  audio.src = "kalapastangan.mp3";
  audio.autoplay = true;
  window.document.body.append(audio);
  window.document.body.style.cursor = "none";
  window.console.log(":audio_playing");
}

const html = `<div class="intro">
                <div class="heart-container">
                  <ion-icon name="heart" class="heart-main hm"></ion-icon>
                  <div class="heart-holder">
                    <ion-icon name="heart" id="heart-main-inside"></ion-icon>
                    <ion-icon name="heart" class="heart heart-1"></ion-icon>
                    <ion-icon name="heart" class="heart heart-2"></ion-icon>
                    <ion-icon name="heart" class="heart heart-3"></ion-icon>
                    <ion-icon name="heart" class="heart heart-4"></ion-icon>
                    <ion-icon name="heart" class="heart heart-5"></ion-icon>
                    <ion-icon name="heart" class="heart heart-6"></ion-icon>
                    <ion-icon name="heart" class="heart heart-7"></ion-icon>
                    <ion-icon name="heart" class="heart heart-8"></ion-icon>
                  </div>
                </div>
              </div>`;
document.body.innerHTML = html;
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
