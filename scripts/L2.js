const root = document.getElementById("root");

export function play_lyrics() {
  lyrics_1();
}

function lyrics_1() {
  const container = `<div class="container-v2">
                       <div class="lyrics-v2"></div>
                     </div>`;
  root.innerHTML = container;
  const lyrics = ["Ma", "ma", "ma", "tay ", "a", "kong ", "nakangiti"];
  lyrics.forEach(
    (l, i) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${i + 1}">${l}</span>`),
  );
}
function lyrics_2() {
  const lyrics = [
    "Ka",
    "pag ",
    "i",
    "kaw ",
    "ang ",
    "na",
    "sa ",
    "a",
    "king ",
    "tabi",
  ];
}
function lyrics_3() {
  const lyrics = [
    "Ma",
    "bu",
    "bu",
    "hay ",
    "a",
    "kong ",
    "nag",
    "si",
    "si",
    "si",
  ];
}
function lyrics_4() {
  const lyrics = [
    "Ka",
    "pag ",
    "'sang ",
    "a",
    "raw ",
    "hin",
    "di ",
    "ki",
    "ta ",
    "mapangiti",
  ];
}
function lyrics_5() {
  const lyrics = [
    "Ka",
    "la",
    "pas",
    "ta",
    "ngan ",
    "ang ",
    "'di ",
    "ka ",
    "ibigin",
  ];
}
function lyrics_6() {
  const lyrics = ["Ka", "lo", "ko", "han ", "ang ", "'di ", "ka ", "isipin"];
}
function lyrics_7() {
  const lyrics = [
    "Kung ",
    "ang ",
    "mun",
    "do ",
    "ay ",
    "big",
    "lang ",
    "gugunawin",
  ];
}
function lyrics_8() {
  const lyrcis = ["Ikaw ", "ang ", "una ", "kong ", "ha", "ha", "na", "pin"];
}
