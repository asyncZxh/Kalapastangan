export const html = `<div class="container">
                       <div class="lyrics"></div>
                     </div>`;

export async function play_lyrics(done) {
  const lyrcis_ = {
    L1: "kapag ",
    L2: "ikaw ",
    L3: "ang ",
    L4: "nasa ",
    L5: "aking ",
    L6: "tabi ",
  };
  document.querySelector(".lyrics").innerHTML =
    `<span class="ly ly1">${lyrcis_.L5}</span>
     <span class="ly ly2">${lyrcis_.L6}</span>`;
  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly1").classList.add("animate");
      resolve();
    }, 100);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 800);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly2").classList.add("animate");
      resolve();
    }, 100);
  })
    .then(async () => {
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    })
    .then(async () => {
      document.querySelector(".lyrics").classList.add("out");
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 300);
      });
    });

  //

  document.querySelector(".lyrics").innerHTML =
    `<span class="ly ly3">${lyrcis_.L1}</span>
     <span class="ly ly4">${lyrcis_.L2}</span>
     <span class="ly ly5">${lyrcis_.L3}</span>
     <span class="ly ly6">${lyrcis_.L4}</span>
     <span class="ly ly7">${lyrcis_.L5}</span>
     <span class="ly ly8">${lyrcis_.L6}</span>`;

  await new Promise((resolve) => {
    document.querySelector(".lyrics").classList.remove("out");
    setTimeout(() => {
      document.querySelector(".ly3").classList.add("animate");
      resolve();
    }, 100);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly4").classList.add("animate");
      resolve();
    }, 100);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 100);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly5").classList.add("animate");
      resolve();
    }, 100);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly6").classList.add("animate");
      resolve();
    }, 100);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly7").classList.add("animate");
      resolve();
    }, 100);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 700);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly8").classList.add("animate");
      resolve();
    }, 100);
  })
    .then(async () => {
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    })
    .then(async () => {
      document.querySelector(".lyrics").classList.add("out");
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1500);
      });
    });

  //

  document.querySelector(".lyrics").innerHTML =
    `<span class="ly ly9">${lyrcis_.L2}</span>
     <span class="ly ly10">${lyrcis_.L3}</span>
     <span class="ly ly11">${lyrcis_.L4}</span>
     <span class="ly ly12">${lyrcis_.L5}</span>
     <span class="ly ly13">${lyrcis_.L6}</span>`;

  await new Promise((resolve) => {
    document.querySelector(".lyrics").classList.remove("out");
    setTimeout(() => {
      document.querySelector(".ly9").classList.add("animate");
      resolve();
    }, 50);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly10").classList.add("animate");
      resolve();
    }, 50);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 500);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly11").classList.add("animate");
      resolve();
    }, 50);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 1000);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly12").classList.add("animate");
      resolve();
    }, 50);
  }).then(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(), 800);
    });
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      document.querySelector(".ly13").classList.add("animate");
      resolve();
    });
  })
    .then(async () => {
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    })
    .then(async () => {
      document.querySelector(".lyrics").classList.add("out");
      await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    })
    .then(() => {
      document.querySelector("#root").style.backgroundColor = "#000";
      new Promise(() => {
        setTimeout(() => {
          console.log("done");
          done();
        }, 1000);
      });
    });
}
