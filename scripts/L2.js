const root = document.getElementById("root");

export async function play_lyrics() {
  await new Promise((resolve) => setTimeout(() => resolve(), 2000));
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
  for (let i = 1; i <= 30; i++) {
    const flower = `<img src="flower_2.png" class="flower_A flower_${i}">`;
    document.querySelector(".flower-holder").innerHTML += flower;
  }

  const flower = `<img src="flower_1.png" class="flower_B flowerX_">`;
  document.querySelector(".flower-holder").innerHTML += flower;

  for (let i = 1; i <= 30; i++) {
    const flower = document.querySelector(`.flower_${i}`);
    flower.style.animation = "rise";
    flower.style.animationDuration = "2.5s";
    flower.style.animationDelay = `${i / 2}s`;
    flower.style.animationTimingFunction = "ease-in-out";
    flower.style.animationFillMode = "forwards";
  }
  setTimeout(
    () => document.querySelector(`.flowerX_`).classList.add("bloom"),
    16000,
  );
}

async function lyrics_1(resolve) {
  const container = `<div class="container-v2">
                       <div class="lyrics-v2"></div>
                     </div>`;
  root.innerHTML = container;
  document.querySelector(".lyrics-v2").style.top = "12%";
  document.querySelector(".lyrics-v2").style.left = "10%";
  const lyrics = ["Ma", "ma", "ma", "tay ", "a", "kong ", "nakangiti"];
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v2").innerHTML +=
        `<span class="lyv2 lyv2-${index + 1}">${element}</span>`),
  );

  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv2-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 800);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv2-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv2-3").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 150);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv2-4").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv2-5").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 150);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv2-6").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv2-7").classList.add("animatev2");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 2500);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v2").classList.add("out"),
    500,
  );
}

async function lyrics_2(resolve) {
  const container = document.createElement("div");
  container.classList.add("lyrics-v3");
  document.querySelector(".container-v2").append(container);
  document.querySelector(".lyrics-v3").style.top = "50%";
  document.querySelector(".lyrics-v3").style.right = "25%";
  1;
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
      (document.querySelector(".lyrics-v3").innerHTML +=
        `<span class="lyv3 lyv3-${index + 1}">${element}</span>`),
  );
  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv3-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 100);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv3-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-3").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-4").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-5").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-6").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-7").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-8").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-9").classList.add("animate");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".lyv3-10").classList.add("animatev3");
      resolve();
    }, 10);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 800);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v3").classList.add("out"),
    1800,
  );
}

async function lyrics_3(resolve) {
  const container = document.createElement("div");
  container.classList.add("lyrics-v4");
  document.querySelector(".container-v2").append(container);
  document.querySelector(".lyrics-v4").style.top = "35%";
  document.querySelector(".lyrics-v4").style.left = "5%";
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
      (document.querySelector(".lyrics-v4").innerHTML +=
        `<span class="lyv4 lyv4-${index + 1}">${element}</span>`),
  );

  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv4-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv4-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv4-3").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv4-4").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });
  await new Promise((resolve) => {
    document.querySelector(".lyv4-5").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });
  await new Promise((resolve) => {
    document.querySelector(".lyv4-6").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });
  await new Promise((resolve) => {
    document.querySelector(".lyv4-7").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });
  await new Promise((resolve) => {
    document.querySelector(".lyv4-8").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });
  await new Promise((resolve) => {
    document.querySelector(".lyv4-9").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });
  await new Promise((resolve) => {
    document.querySelector(".lyv4-10").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 1200);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v4").classList.add("out"),
    1800,
  );
}

async function lyrics_4(resolve) {
  const container = document.createElement("div");
  container.classList.add("lyrics-v5");
  document.querySelector(".container-v2").append(container);
  document.querySelector(".lyrics-v5").style.top = "30%";
  document.querySelector(".lyrics-v5").style.right = "12%";
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
      (document.querySelector(".lyrics-v5").innerHTML +=
        `<span class="lyv5 lyv5-${index + 1}">${element}</span>`),
  );

  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv5-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-3").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-4").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-5").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 300);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-6").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-7").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-8").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-9").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 600);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv5-10").classList.add("animatev5");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 1500);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v5").classList.add("out"),
    1800,
  );
}

async function lyrics_5(resolve) {
  const container = document.createElement("div");
  container.classList.add("lyrics-v6");
  document.querySelector(".container-v2").append(container);
  document.querySelector(".lyrics-v6").style.top = "50%";
  document.querySelector(".lyrics-v6").style.left = "25%";

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
      (document.querySelector(".lyrics-v6").innerHTML +=
        `<span class="lyv6 lyv6-${index + 1}">${element}</span>`),
  );

  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv6-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 500);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-3").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-4").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-5").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-6").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-7").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-8").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv6-9").classList.add("animatev6");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 1500);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v6").classList.add("out"),
    1800,
  );
}

async function lyrics_6(resolve) {
  const container = document.createElement("div");
  container.classList.add("lyrics-v7");
  document.querySelector(".container-v2").append(container);
  document.querySelector(".lyrics-v7").style.top = "15%";
  document.querySelector(".lyrics-v7").style.left = "10%";
  const lyrics = ["Ka", "lo", "ko", "han ", "ang ", "'di ", "ka ", "isipin"];
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v7").innerHTML +=
        `<span class="lyv7 lyv7-${index + 1}">${element}</span>`),
  );
  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv7-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv7-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv7-3").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv7-4").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv7-5").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv7-6").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv7-7").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv7-8").classList.add("animatev7");
    resolve();
  }).then(async () => {
    await new Promise((reslove) => {
      setTimeout(() => reslove(), 2000);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v7").classList.add("out"),
    1800,
  );
}

async function lyrics_7(resolve) {
  const container = document.createElement("div");
  container.classList.add("lyrics-v8");
  document.querySelector(".container-v2").append(container);
  document.querySelector(".lyrics-v8").style.top = "20%";
  document.querySelector(".lyrics-v8").style.right = "20%";
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
      (document.querySelector(".lyrics-v8").innerHTML +=
        `<span class="lyv8 lyv8-${index + 1}">${element}</span>`),
  );
  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv8-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv8-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv8-3").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 150);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv8-4").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv8-5").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv8-6").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv8-7").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv8-8").classList.add("animatev8");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 2300);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v8").classList.add("out"),
    500,
  );
}

async function lyrics_8(resolve) {
  const container = document.createElement("div");
  container.classList.add("lyrics-v9");
  document.querySelector(".container-v2").append(container);
  document.querySelector(".lyrics-v9").style.top = "40%";
  document.querySelector(".lyrics-v9").style.left = "30%";
  const lyrics = [
    "I",
    "kaw ",
    "ang ",
    "u",
    "na ",
    "kong ",
    "ha",
    "ha",
    "na",
    "pin",
  ];
  lyrics.forEach(
    (element, index) =>
      (document.querySelector(".lyrics-v9").innerHTML +=
        `<span class="lyv9 lyv9-${index + 1}">${element}</span>`),
  );

  await new Promise((resolve) => {
    setTimeout(
      () => document.querySelector(".lyv9-1").classList.add("animate"),
      20,
    );
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-2").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 200);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-3").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-4").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-5").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-6").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 400);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-7").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-8").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-9").classList.add("animate");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 300);
    });
  });

  await new Promise((resolve) => {
    document.querySelector(".lyv9-10").classList.add("animatev9");
    resolve();
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 2143);
    });
  });
  resolve();
  setTimeout(
    () => document.querySelector(".lyrics-v9").classList.add("out"),
    500,
  );
}
