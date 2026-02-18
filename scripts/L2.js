const root = document.getElementById("root");

export async function play_lyrics() {
  await new Promise((resolve) => setTimeout(() => resolve(), 2500));
  await new Promise((resolve) => {
    setTimeout(() => generate_background(), 10);
    lyrics_1(resolve);
  });
  await new Promise((resolve) => lyrics_2(resolve));
  await new Promise((resolve) => lyrics_3(resolve));
  await new Promise((resolve) => lyrics_4(resolve));
  await new Promise((resolve) => lyrics_5(resolve));
  await new Promise((resolve) => lyrics_6(resolve));
  await new Promise((resolve) => lyrics_7(resolve));
  await new Promise((resolve) => lyrics_8(resolve));
}

function generate_background() {
  const html = '<div class="flower-holder"></div>';
  root.innerHTML += html;
  for (let i = 1; i <= 20; i++) {
    const flower = `<img src="flower_2.png" class="flower_A flower_${i}">`;
    document.querySelector(".flower-holder").innerHTML += flower;
  }

  setTimeout(() => {
    for (let i = 1; i <= 20; i++) {
      const flower = document.querySelector(`.flower_${i}`);
      flower.style.animation = "rise";
      flower.style.animationDuration = `${i}s`;
      flower.style.animationTimingFunction = "ease-in-out";
      flower.style.animationFillMode = "forwards";
    }
  }, 500);
}

async function lyrics_1(resolve) {
  const container = `<div class="container-v2">
                       <div class="lyrics-v2"></div>
                     </div>`;
  root.innerHTML = container;
  const lyrics = ["Ma", "ma", "ma", "tay ", "a", "kong ", "nakangiti"];
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv2-1").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 800);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv2-2").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv2-3").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 150);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv2-4").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv2-5").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 150);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv2-6").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv2-7").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });
}
async function lyrics_2(resolve) {
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
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );
}
async function lyrics_3(resolve) {
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
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );
}
async function lyrics_4(resolve) {
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
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );
}
async function lyrics_5(resolve) {
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
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );
}
async function lyrics_6(resolve) {
  const lyrics = ["Ka", "lo", "ko", "han ", "ang ", "'di ", "ka ", "isipin"];
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );
}
async function lyrics_7(resolve) {
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
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );
}
async function lyrics_8(resolve) {
  const lyrics = ["Ikaw ", "ang ", "una ", "kong ", "ha", "ha", "na", "pin"];
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );
}
