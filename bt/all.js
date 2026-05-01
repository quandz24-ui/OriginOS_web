const dev_name = document.getElementById("name_dev");
if (
  !dev_name ||
  dev_name.textContent.trim() != "TikTok: @sungsamtech - galaxyA15"
) {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}
let home_wallpaper = "";
let lock_wallpaper = "";

initOriginDB(() => {
  getData("lock_wallpaper", (value) => {
    if (value) {
      const wallpaper_preview2 = document.querySelector(".wallpaper-preview2");
      const wallPaper2 = document.querySelector(".wallpaper2");
      const wallpaper = document.querySelector(".wallpaper");

      lock_wallpaper = value;
      wallpaper.style.backgroundImage = `url(${value})`;
      wallPaper2.style.backgroundImage = `url(${value})`;
      wallpaper_preview2.style.backgroundImage = `url(${value})`;

      console.log("✅ Đã lấy lock wallpaper");
    } else {
      console.warn("⚠️ lock_wallpaper không tồn tại trong DB");
    }
  });

  getData("home_wallpaper", (value) => {
    if (value) {
      home_wallpaper = value;

      const wallpaper_preview = document.querySelector(".wallpaper-preview");
      wallpaper_preview.style.backgroundImage = `url(${value})`;
      console.log("✅ Đã lấy home wallpaper");
    }
  });

  getData("wallpaper_aod2_image", (value) => {
    if (value) {
      const wallpaper_aod2 = document.getElementById("wallpaper_aod2");

      wallpaper_aod2.style.backgroundImage = `url('${value}')`;
      console.log("✅ Đã lấy home wallpaper AOD 2");
    }
  });
});

const dateElement = document.getElementById("dateText");
const dateElement2 = document.getElementById("dateText2");
const root2 = document.documentElement;
let border_radius_phone = getComputedStyle(root2)
  .getPropertyValue("--bg--border_radius_phone")
  .trim();

let custom_text_lock_screen =
  localStorage.getItem("custom_text_lock_screen") || "";

const now = new Date();
const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
};
const formatted = now.toLocaleDateString("en-US", options);

dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
dateElement2.textContent = formatted;
document.getElementById("dateText3").textContent = formatted;
document.getElementById(
  "dateTextPreview"
).textContent = `${formatted} ${custom_text_lock_screen}`;

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("lockclock").textContent = `${hours}:${minutes}`;
  document.getElementById("lockclock2").textContent = `${hours}:${minutes}`;
  document.getElementById("lockclock3").textContent = `${hours}:${minutes}`;
}
function updateTime2() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById(
    "lock-screen-preview"
  ).textContent = `${hours}:${minutes}`;
  document.getElementById("clock_preview").textContent = `${hours}:${minutes}`;
}

updateTime();
setInterval(updateTime, 10000);

const boxes = {
  box1: document.getElementById("box1"),
  box2: document.getElementById("box2"),
  box3: document.getElementById("box3"),
  box4: document.getElementById("box4"),
  box5: document.getElementById("box5"),
  box6: document.getElementById("box6"),
  box7: document.getElementById("box7"),
  box8: document.getElementById("box8"),
  box9: document.getElementById("box9"),
  box10: document.getElementById("box10"),
  box11: document.getElementById("box11"),
};

const appopen = {
  box1: document.getElementById("app1"),
  box2: document.getElementById("app2"),
  box3: document.getElementById("app3"),
  box4: document.getElementById("app4main"),
  box5: document.getElementById("app5"),
  box6: document.getElementById("app6"),
  box7: document.getElementById("app7"),
  box8: document.getElementById("app8"),
  box9: document.getElementById("app9"),
  box10: document.getElementById("app10"),
  box11: document.getElementById("app11"),
};

const clickables = {
  box1: document.getElementById("clickableBox1"),
  box2: document.getElementById("clickableBox2"),
  box3: document.getElementById("clickableBox3"),
  box4: document.getElementById("clickableBox4"),
  box5: document.getElementById("clickableBox5"),
  box6: document.getElementById("clickableBox6"),
  box7: document.getElementById("clickableBox7"),
  box8: document.getElementById("clickableBox8"),
  box9: document.getElementById("clickableBox9"),
  box10: document.getElementById("clickableBox10"),
  box11: document.getElementById("clickableBox11"),
};

const thanh = document.getElementById("thanh");
const WallPaper = document.querySelector(".wallpaper");
const allApp = document.getElementById("allApp");
const lp = document.getElementById("lp");
const target = document.getElementById("name_dev");
document.getElementById("name_dev").textContent = "";

let currentOpeningBtn = null;
let nav = null;
let isMo = false;
let autoHideClickablesTimer = null;
let scale_app = null;
let hideBlur = null;
let closing = false;
let app = null;
let currentSpeed = 0.7;
let currentSpeed6 = 0.6 * currentSpeed;
let currentSpeed5 = 0.5 * currentSpeed;
let currentSpeed4 = 0.4 * currentSpeed;
let currentSpeed4_2 = 0.4 * currentSpeed * currentSpeed;
let currentSpeed3 = 0.3 * currentSpeed;
let currentSpeed2 = 0.2 * currentSpeed;

function hideAllClickables() {
  Object.values(clickables).forEach((el) => {
    el.style.display = "none";
  });
}

function openPopupFromCurrentButton() {
  if (!currentOpeningBtn) return;
  thanh.classList.add("open");
  showPopup_open_close(app);
  currentOpeningBtn.style.transition = `all ${currentSpeed5}s cubic-bezier(0.25, 0.46, 0.29, 0.97), height ${currentSpeed5}s cubic-bezier(.32,.82,1,1), top ${currentSpeed5}s cubic-bezier(.18,.55,.29,.78)`;

  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.style.scale = "100%";
  currentOpeningBtn.style.zIndex = "320";

  lp.style.transition = `all ${currentSpeed3}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.add("open");

  const boxId = Object.keys(boxes).find(
    (key) => boxes[key] === currentOpeningBtn
  );
  if (boxId) clickables[boxId].style.display = "none";

  nav = currentOpeningBtn.querySelector(".nav");
  if (nav) {
    nav.style.transition = `all ${currentSpeed3}s`;
    nav.classList.add("open");
  }
  isMo = true;
}

target.innerText += "Ti";
const scale = 1;
let hide_app = null;
function closePopup() {
  if (!currentOpeningBtn) return;
  hidePopup_open_close(app);

  currentOpeningBtn.style.transition = `all ${currentSpeed4}s, transform ${currentSpeed6}s`;
  clearTimeout(autoHideClickablesTimer);
  currentOpeningBtn.classList.remove("open");
  currentOpeningBtn.style.scale = `${scale_icon}%`;

  currentOpeningBtn.style.zIndex = "5";

  thanh.style.transform = "translateX(-50%)";
  thanh.classList.remove("open");

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.remove("open");

  if (nav) {
    nav.style.transition = `all ${currentSpeed3}s`;
    nav.classList.remove("open");
  }
  isMo = false;

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  currentOpeningBtn.style.transform = `scale(1)`;
  currentOpeningBtn.classList.remove("hien");

  if (currentOpeningBtn === boxes["box4"]) {
    document.getElementById("scaling-box").style.animation = "none";

    theme_option.style.pointerEvents = "auto";
    AboutInSetting.style.pointerEvents = "auto";
    animationInSetting.style.pointerEvents = "auto";

    removeAllUIEventListeners();

    hidePopup_open_close_noanim(app4);
    hidePopup_open_close_noanim(credits);
    hidePopup_open_close_noanim(app4_vesion);
    hidePopup_open_close_noanim(app4animation);
    hidePopup_open_close_noanim(app4_theme);
    hidePopup_open_close_noanim(app4_home);
    hidePopup_open_close_noanim(wallpaper_option);
    hidePopup_open_close_noanim(aod_option);
    hidePopup_open_close_noanim(lock_option);
    hidePopup_open_close_noanim(app4_finger);
    hidePopup_open_close_noanim("app4icon");
    hidePopup_open_close_noanim("app4audio");
    hidePopup_open_close_noanim(app4_lock_style);
    hidePopup_open_close_noanim(crea_pass);
  }

  currentOpeningBtn = null;
}

target.innerText += "kT";

function updateTransform(y, x) {
  if (y < 0) y = 0;
  if (y > 120) y = 120;
  currentOpeningBtn.style.transition = `all 0.02s`;
  currentOpeningBtn.style.transform = `translateX(${x}px) translateY(${-y}px) scale(${
    1 - y / 200
  })`;
}

function resetpop() {
  thanh.classList.add("open");
  currentOpeningBtn.style.transition = `all ${currentSpeed3}s`;
  currentOpeningBtn.style.transform = `none`;
  thanh.style.transform = `translateX(-50%) translateY(0%) scale(1)`;
}

let actions;
let handlersMap = new Map();

function updateActionsMap() {
  actions = new Map([
    [boxes["box3"], isPlaying_music ? closePopupToIsland3 : closePopup],
    [boxes["box9"], isRunning_clock ? closePopupToIsland : closePopup],
  ]);
  handlersMap.clear();
  if (isRunning_clock) handlersMap.set(boxes["box9"], handlers.box9);
  if (isPlaying_music) handlersMap.set(boxes["box3"], handlers.box3);
}

let startY = 0;
let startX = 0;
let deltaY = 0;
let deltaX = 0;
let dragging = false;

target.innerText += "ok";

thanh.addEventListener("touchstart", (e) => {
  if (!isMo) return;
  startY = e.touches[0].clientY;
  startX = e.touches[0].clientX;

  deltaY = 0;
  deltaX = 0;
});

thanh.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    if (!isMo) return;
    deltaY = startY - e.touches[0].clientY;
    deltaX = e.touches[0].clientX - startX;
    updateTransform(deltaY, deltaX);
  },
  {
    passive: false,
  }
);

target.innerText += ": ";

thanh.addEventListener("touchend", () => {
  if (deltaY > 40) (actions.get(currentOpeningBtn) || closePopup)();
  else resetpop();
  deltaY = 0;
  deltaX = 0;
});

thanh.addEventListener("mousedown", (e) => {
  hideAllClickables();
  deltaY = 0;
  deltaX = 0;
  startY = 0;
  startX = 0;

  if (!isMo) return;
  dragging = true;
  startY = e.clientY;
  startX = e.clientX;
});

target.innerText += "@su";

window.addEventListener("mousemove", (e) => {
  if (!dragging || !isMo) return;
  deltaY = startY - e.clientY;
  deltaX = e.clientX - startX;
  updateTransform(deltaY, deltaX);
});

window.addEventListener("mouseup", () => {
  if (!dragging || !isMo) return;
  dragging = false;
  if (deltaY > 40) (actions.get(currentOpeningBtn) || closePopup)();
  else resetpop();
});

function openPopupFromCurrentButton2() {
  if (!currentOpeningBtn) return;
  thanh.classList.add("open");
  showPopup_open_close(app);
  currentOpeningBtn.style.transition = `all ${currentSpeed4}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.classList.add("hien");
  currentOpeningBtn.style.scale = "100%";
  currentOpeningBtn.style.zIndex = "320";

  const boxId = Object.keys(boxes).find(
    (key) => boxes[key] === currentOpeningBtn
  );
  if (boxId) clickables[boxId].style.display = "none";

  nav = currentOpeningBtn.querySelector(".nav");
  if (nav) {
    nav.style.transition = `all ${currentSpeed3}s`;
    nav.classList.add("open");
  }

  isMo = true;
}

const handlers = {
  box9: () => {
    Object.assign(island.style, {
      height: "25px",
      borderRadius: "25px",
      width: "120px",
    });
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");

    if (isPlaying_music) {
      island2.style.transition =
        "transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)";
      island2.style.width = "25px";
      island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
      clickables["box3"].style.pointerEvents = "auto";

      island.style.width = "120px";
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";

      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
  },
  box3: () => {
    Object.assign(island2.style, {
      height: "25px",
      borderRadius: "25px",
      width: "120px",
    });

    image_island_right2.classList.remove("show");
    controls_music2.classList.remove("show");
    popupAuthor_music2.classList.remove("show");
    popupTitle_music2.classList.remove("show");
    progressBar_music2.classList.remove("show");

    if (isRunning_clock) {
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
  },
};

["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"].forEach((num) => {
  document
    .getElementById(`clickableBox${num}`)
    .addEventListener("pointerup", () => {
      clearTimeout(autoHideClickablesTimer);
      clearTimeout(scale_app);
      if (currentOpeningBtn) {
        currentOpeningBtn.style.transition = `all ${currentSpeed5}s cubic-bezier(.14,.56,.32,.8)`;
        currentOpeningBtn.classList.remove("open");
        currentOpeningBtn.classList.remove("hien");
        currentOpeningBtn.style.scale = `${scale_icon}%`;

        Object.values(clickables).forEach((el) => {
          el.style.display = "block";
        });

        hidePopup_open_close(app);
        app.style.display = "none";
        app = appopen[`box${num}`];

        if (nav) nav.classList.remove("open");

        currentOpeningBtn.style.zIndex = "12";

        const handler = handlersMap.get(currentOpeningBtn);
        if (handler) handler();

        currentOpeningBtn = boxes[`box${num}`];
        openPopupFromCurrentButton2();
        autoHideClickablesTimer = setTimeout(() => {
          if (isMo) hideAllClickables();
        }, 500 * currentSpeed);
      } else {
        currentOpeningBtn = boxes[`box${num}`];
        currentOpeningBtn.style.transition = `all ${currentSpeed5} cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        app = appopen[`box${num}`];
        app.style.display = "none";
        openPopupFromCurrentButton();
        autoHideClickablesTimer = setTimeout(() => {
          if (isMo) hideAllClickables();
        }, 500 * currentSpeed);
      }
    });
});

target.innerText += "ngs";

const island = document.getElementById("island");
const island_circle = document.getElementById("island_circle");
const buttons_island = document.querySelector(".buttons_island");
const time_island = document.querySelector(".time_island");
const image_island_right = document.querySelector(".image_island_right");
let timeHideIsland = null;

island.addEventListener("click", () => {
  if (island.offsetWidth >= 120) {
    hideAllClickables();
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island.style.width = "calc(var(--bg--size_width_phone) - 6%)";
    island.style.height = "75px";
    island.style.borderRadius = "calc(var(--bg--border_radius_phone) - 10px)";
    buttons_island.classList.add("show");
    time_island.classList.add("show");
    image_island_right.classList.remove("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";

    if (isPlaying_music) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(-50%) scale(1)";
    }
  }
});

document.addEventListener("pointerdown", function (e) {
  if (!island.contains(e.target) && island.offsetWidth >= 290) {
    island.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;

    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "120px";
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");

    battery1.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
    battery1.style.transform = "translateX(0px)";
    clock.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
    clock.style.transform = "translateX(0px)";

    if (!isRunning_clock) {
      setTimeout(() => {
        island.style.transition = `all ${currentSpeed5}s ease-out`;
        island.style.height = "25px";
        island.style.borderRadius = "25px";
        island.style.width = "25px";
        image_island_right.classList.remove("show");

        if (isPlaying_music) {
          clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
          clock.style.scale = "1";
          clock.style.left = "30px";

          island_circle.style.transition =
            "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
          island_circle.style.transform = "translateX(-50%) scale(1)";
          island2.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
          island2.style.width = "120px";
        }
      }, 20);
    }

    if (isPlaying_music) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    }

    if (!currentOpeningBtn) {
      Object.values(clickables).forEach((el) => {
        el.style.display = "block";
      });
    }
  }
});

clickables["box9"].addEventListener("pointerup", () => {
  if (isPlaying_music) {
    island.style.transition = `all 0.2s ease-out`;
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "25px";

    island_circle.style.transition = "all 0.3s";
    island_circle.style.transform = "translateX(-50%) scale(1)";

    island2.style.transition = "all 0.5s cubic-bezier(.68,.01,.62,.14)";
    island2.style.width = "120px";
    island2.style.transform = "translateX(-50%) translateY(0) scale(1)";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "1";
    clock.style.left = "30px";
  } else {
    island.style.transition = `all 0.35s ease-out`;
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "25px";
  }
});

function closePopupToIsland() {
  if (!currentOpeningBtn) return;

  hidePopup_open_close(app);
  currentOpeningBtn.style.transition = `all ${currentSpeed3}s, opacity ${currentSpeed2}s cubic-bezier(1,0,1,0.2)`;
  clearTimeout(autoHideClickablesTimer);
  clearTimeout(timeHideIsland);
  currentOpeningBtn.style.zIndex = "5";

  thanh.style.transform = "translateX(-50%)";
  thanh.classList.remove("open");

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.remove("open");

  if (nav) {
    nav.style.transition = `all ${currentSpeed3}s`;
    nav.classList.remove("open");
  }
  isMo = false;
  island.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
  document.querySelector(".camera").style.transform =
    "translateX(-50%) translateY(-1px) scale(1.4)";
  island.style.transform = "translateX(-50%) translateY(-1px) scale(1.4)";
  if (!isPlaying_music) {
    island.style.width = "120px";
  }
  if (isPlaying_music) {
    island2.style.transition = "all 0.4s";
    island2.style.width = "25px";
    island2.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island2.style.transform = "translateX(-50%) translateY(-1px) scale(1.4)";
    clickables["box3"].style.pointerEvents = "none";
  }

  battery1.style.transition = `transform 0.3s`;
  battery1.style.transform = "translateX(-7px)";
  clock.style.transition = `transform 0.3s`;
  clock.style.transform = "translateX(7px)";

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  boxes["box9"].style.transform = `translateY(-35%) scale(0.25)`;
  boxes["box9"].classList.add("island_200");
  boxes["box9"].classList.remove("hien");
  boxes["box9"].style.opacity = 0;
  currentOpeningBtn = null;

  clickables["box9"].style.pointerEvents = "none";

  setTimeout(() => {
    boxes["box9"].style.scale = `${scale_icon}%`;
    boxes["box9"].style.transition = "all 0s, opacity 0.3s";
    boxes["box9"].classList.remove("island_200");
    boxes["box9"].classList.remove("open");
    boxes["box9"].style.transform = `translateX(0%) translateY(0%) scale(1)`;
    boxes["box9"].style.opacity = 1;

    clickables["box9"].style.pointerEvents = "auto";
    island.style.transform = "translateX(-50%) translateY(0) scale(1)";
    document.querySelector(".camera").style.transform =
      "translateX(-50%) translateY(0px) scale(1)";
    if (isPlaying_music) {
      island2.style.transition = `transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)`;
      island.style.width = "120px";
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
      island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
      clickables["box3"].style.pointerEvents = "auto";
      clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
      clock.style.scale = "0.8";
      clock.style.left = "25px";
    }
    image_island_right.classList.add("show");
    battery1.style.transform = "translateX(0px)";
    clock.style.transform = "translateX(0px)";
  }, 300 * currentSpeed);
}

const island2 = document.getElementById("island2");
const image_island_right2 = document.querySelector(".image_island_right2");
const controls_music2 = document.querySelector(".controls_music2");

island_circle.addEventListener("click", () => {
  hideAllClickables();
  island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;

  Object.assign(island2.style, {
    height: "25px",
    borderRadius: "25px",
    width: "25px",
  });

  island.style.transition = `all 0.35s ease-out`;
  island.style.height = "25px";
  island.style.borderRadius = "25px";
  island.style.width = "25px";

  island_circle.style.transition = "all 0.3s";
  island_circle.style.transform = "translateX(-50%) scale(1)";

  setTimeout(() => {
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "calc(var(--bg--size_width_phone) - 6%)";
    island2.style.height = "150px";
    island2.style.borderRadius = "calc(var(--bg--border_radius_phone) - 10px)";

    image_island_right2.classList.add("show");
    controls_music2.classList.add("show");
    popupAuthor_music2.classList.add("show");
    popupTitle_music2.classList.add("show");
    progressBar_music2.classList.add("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";
  }, 200);
});

island2.addEventListener("click", () => {
  if (island2.offsetWidth >= 120) {
    hideAllClickables();
    if (timeHideIsland) clearTimeout(timeHideIsland);
    island2.style.transition = `all 0.56s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "calc(var(--bg--size_width_phone) - 6%)";
    island2.style.height = "150px";
    island2.style.borderRadius = "calc(var(--bg--border_radius_phone) - 10px)";

    image_island_right2.classList.add("show");
    controls_music2.classList.add("show");
    popupAuthor_music2.classList.add("show");
    popupTitle_music2.classList.add("show");
    progressBar_music2.classList.add("show");

    battery1.style.transition = `transform 0.3s`;
    battery1.style.transform = "translateX(100px)";
    clock.style.transition = `transform 0.3s`;
    clock.style.transform = "translateX(-100px)";
  }
});

document.addEventListener("pointerdown", function (e) {
  if (!island2.contains(e.target) && island2.offsetWidth >= 290) {
    if (!currentOpeningBtn) {
      Object.values(clickables).forEach((el) => {
        el.style.display = "block";
      });
    }
    if (!isRunning_clock) {
      island2.style.height = "25px";
      island2.style.borderRadius = "25px";

      if (!isPlaying_music) {
        island2.style.transition = `all 0.3s, width 0.4s`;
        island2.style.width = "25px";
        image_island_right2.classList.remove("show");
        controls_music2.classList.remove("show");
        popupAuthor_music2.classList.remove("show");
        popupTitle_music2.classList.remove("show");
        progressBar_music2.classList.remove("show");
      } else {
        island2.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;
        island2.style.width = "120px";
        image_island_right2.classList.remove("show");
        controls_music2.classList.remove("show");
        popupAuthor_music2.classList.remove("show");
        popupTitle_music2.classList.remove("show");
        progressBar_music2.classList.remove("show");
      }

      battery1.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
      battery1.style.transform = "translateX(0px)";
      clock.style.transition = `transform 0.7s cubic-bezier(.14,1.34,.41,1)`;
      clock.style.transform = "translateX(0px)";
    } else {
      island2.style.transition = `all 0.35s ease-out, width 1.2s cubic-bezier(.14,1.34,.41,1)`;
      island2.style.height = "25px";
      island2.style.borderRadius = "25px";
      island2.style.width = "25px";
      image_island_right2.classList.remove("show");
      controls_music2.classList.remove("show");
      popupAuthor_music2.classList.remove("show");
      popupTitle_music2.classList.remove("show");
      progressBar_music2.classList.remove("show");

      battery1.style.transform = "translateX(0px)";
      clock.style.transform = "translateX(0px)";
      setTimeout(() => {
        island.style.transform = "translateX(-50%) translateY(0) scale(1)";
        island2.style.transition = `transform 0.3s, width 1.2s cubic-bezier(1,-0.13,.27,1.34)`;
        island.style.width = "120px";
        island_circle.style.transition =
          "all 0.7s cubic-bezier(.67,.2,.38,1.27)";

        if (!isPlaying_music) {
          island2.style.transition = `all 0.3s`;
          island2.style.width = "25px";
          island_circle.style.transition =
            "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
          island_circle.style.transform = "translateX(-50%) scale(1)";
        } else {
          island_circle.style.transform =
            "translateX(calc(-50% - 77px)) scale(1)";
        }
        island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
        clickables["box3"].style.pointerEvents = "auto";
        clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
        clock.style.scale = "0.8";
        clock.style.left = "25px";
        image_island_right.classList.add("show");
      }, 300);
    }
  }
});

clickables["box3"].addEventListener("pointerup", () => {
  if (isRunning_clock) {
    island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
    island_circle.style.transform = "translateX(-50%) scale(1)";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "1";
    clock.style.left = "30px";
  } else {
    island2.style.transition = `all ${currentSpeed5}s ease-out`;
    island2.style.height = "25px";
    island2.style.borderRadius = "25px";
    island2.style.width = "25px";
  }
});

function closePopupToIsland3() {
  if (!currentOpeningBtn) return;
  hidePopup_open_close(app);

  currentOpeningBtn.style.transition = `all ${currentSpeed3}s, opacity ${currentSpeed2}s cubic-bezier(1,0,1,0.2)`;
  clearTimeout(autoHideClickablesTimer);
  clearTimeout(timeHideIsland);

  currentOpeningBtn.style.zIndex = "5";

  thanh.style.transform = "translateX(-50%)";
  thanh.classList.remove("open");

  lp.style.transition = `all ${currentSpeed5}s cubic-bezier(0.2, 0.2, 0.12, 1)`;
  lp.classList.remove("open");

  if (nav) {
    nav.style.transition = `all ${currentSpeed3}s`;
    nav.classList.remove("open");
  }
  isMo = false;

  document.querySelector(".camera").style.transform =
    "translateX(-50%) translateY(-1px) scale(1.4)";
  island2.style.transform = "translateX(-50%) translateY(-1px) scale(1.4)";
  if (isRunning_clock) {
    island2.style.transition = `all 0.3s`;

    island2.style.transform = "";
    island.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island.style.transform = "translateX(-50%) translateY(-1px) scale(1.4)";
    island.style.width = "80px";
    clickables["box9"].style.pointerEvents = "none";

    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";

    island2.style.width = clock.style.left = "25px";
    clock.style.scale = "0.8";
  } else {
    island2.style.transition = `transform 0.3s, width 0.6s cubic-bezier(.67,.2,.38,1.27)`;
    island2.style.width = "120px";
  }

  battery1.style.transition = `transform 0.3s`;
  battery1.style.transform = "translateX(-7px)";
  clock.style.transition = `transform 0.3s`;
  clock.style.transform = "translateX(7px)";

  Object.values(clickables).forEach((el) => {
    el.style.display = "block";
  });
  boxes["box3"].style.transform = `translateY(-35%) scale(0.25)`;
  boxes["box3"].classList.add("island_200");
  boxes["box3"].classList.remove("hien");
  boxes["box3"].style.opacity = 0;
  currentOpeningBtn = null;

  clickables["box3"].style.pointerEvents = "none";

  setTimeout(() => {
    document.querySelector(".camera").style.transform =
      "translateX(-50%) translateY(0) scale(1)";
    boxes["box3"].style.scale = `${scale_icon}%`;
    boxes["box3"].style.transition = "all 0s, opacity 0.3s";
    boxes["box3"].classList.remove("island_200");
    boxes["box3"].classList.remove("open");
    boxes["box3"].style.transform = `translateX(0%) translateY(0%) scale(1)`;
    boxes["box3"].style.opacity = 1;

    clickables["box3"].style.pointerEvents = "auto";
    if (isRunning_clock) {
      island.style.width = "120px";
      island.style.transform = "translateX(-50%) translateY(0) scale(1)";
      clickables["box9"].style.pointerEvents = "auto";
    } else {
      island2.style.width = "120px";
      island2.style.transform = "translateX(-50%) translateY(0) scale(1)";
    }
    battery1.style.transform = "translateX(0px)";
    clock.style.transform = "translateX(0px)";
    if (isRunning_clock) {
      island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
      island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    }
  }, 300 * currentSpeed);
}

function open_all_island() {
  if (isRunning_clock) {
    island.style.height = "25px";
    island.style.borderRadius = "25px";
    island.style.width = "120px";
    buttons_island.classList.remove("show");
    time_island.classList.remove("show");
    image_island_right.classList.add("show");
  }

  if (isPlaying_music) {
    island2.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.14,1.34,.41,1)`;
    island2.style.width = "120px";
    image_island_right2.classList.remove("show");
    controls_music2.classList.remove("show");
    popupAuthor_music2.classList.remove("show");
    popupTitle_music2.classList.remove("show");
    progressBar_music2.classList.remove("show");
  }

  if (isPlaying_music && isRunning_clock) {
    island2.style.transition = `all 0.2s`;
    island2.style.width = "25px";
    island.style.transition = `all 0.35s ease-out, width 0.7s cubic-bezier(.62,0,.25,1.36)`;
    island.style.width = "120px";
    island_circle.style.transition = "all 0.7s cubic-bezier(.67,.2,.38,1.27)";
    island_circle.style.transform = "translateX(calc(-50% - 77px)) scale(1)";
    island2.style.transform = "translateX(-50%) translateY(0px) scale(1)";
    clickables["box3"].style.pointerEvents = "auto";
    clock.style.transition = "all 0.6s cubic-bezier(.67,.2,.38,1.27)";
    clock.style.scale = "0.8";
    clock.style.left = "25px";
  }
}

function close_all_island() {
  island_circle.style.transition = "all 0.2s";
  island_circle.style.transform = "translateX(-50%) scale(1)";

  island.style.transition = `all 0.35s ease-out`;
  island.style.height = "25px";
  island.style.borderRadius = "25px";
  island.style.width = "25px";

  island2.style.transition = `all ${currentSpeed5}s ease-out`;
  island2.style.height = "25px";
  island2.style.borderRadius = "25px";
  island2.style.width = "25px";
}

// DOM elements
const lockscreen = document.getElementById("lockscreen");
const wallpaper = document.querySelector(".wallpaper");
const unlockBtn = document.getElementById("unlock-btn");
const powerbtn = document.querySelector(".power-button");
const fingerprint = document.querySelector(".lock-fingerprint");
const lockclock = document.querySelector(".lock-clock");
const lock_clock_date = document.getElementById("lock_content");
target.innerText += "amt";
const dateText = document.getElementById("dateText");
const clock = document.getElementById("lockclock2");
const battery3 = document.querySelector(".battery-num");
const battery1 = document.querySelector(".status-battery");
const phone = document.querySelector(".phone");
const footerText = document.querySelector(".footer-text2");

let finger_biometrics = 0;
const saved_finger_local = localStorage.getItem("finger_saved");
if (saved_finger_local !== null) {
  finger_biometrics = parseInt(saved_finger_local);
}

let ison = true;
let islock = true;
allApp.style.transition = "all 0s";
allApp.classList.add("lock");
hideAllClickables();

//lock();
clock.classList.add("hien");
let wallpaper_lock_off_height = 50; //%
let wallpaper_lock_off_scale = 40; //%
let wallpaper_lock_off_borderRadius = 0; //px
let wallpaper_lock_off_opacity = 1;
let wallpaper_lock_off_transform = "translateY(0px)";

let wallpaper_lock_height = 70; //%
let wallpaper_lock_scale = 80; //%
let wallpaper_lock_borderRadius = 15; //px
let wallpaper_lock_opacity = 1;
let wallpaper_lock_transform = "translateY(250px)";

let current_wallpaper_lock = 1;

let lockscreen_style_opacity = 1;

function lock() {
  if (!islock) {
    finger_print.stop();
    finger_print.play();
  }
  lockscreen.style.display = "flex";

  islock = true;
  dongnotification();

  lockscreen.style.transition = "all 0.3s";
  lockscreen.style.opacity = lockscreen_style_opacity;
  lockscreen.style.pointerEvents = "auto";
  wallpaper.classList.remove("unlock");

  //wallpaper.classList.add("open");

  allApp.style.transition = "all 0s";
  allApp.classList.add("lock");

  if (lock_wallpaper) {
    wallpaper.style.transition = `all ${currentSpeed3}s, height ${currentSpeed5}s, width ${currentSpeed5}s, scale ${currentSpeed5}s, borderRadius ${currentSpeed5}s, transform ${currentSpeed5}s, opacity ${currentSpeed5}s`;
    wallpaper.style.backgroundImage = `url("${lock_wallpaper}")`;
  }

  hideAllClickables();
  clock.classList.remove("hien");
  document.querySelector(
    ".khayapp"
  ).style.transition = `all 0s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  document.querySelector(".khayapp").classList.add("lock");
  fingerprint.style.pointerEvents = "auto";

  if (!pass_password || !finger_biometrics) fingerprint.style.display = "none";
  if (pass_password && finger_biometrics) fingerprint.style.display = "flex";

  addCustomLockscreenTime(); // để tắt

  playmusic("originos_data/ui/Lock.ogg", volume_unlock_volume);
}

function unlock() {
  fingerprint.style.pointerEvents = "none";
  island.style.pointerEvents = "auto";
  island2.style.pointerEvents = "auto";
  island_circle.style.pointerEvents = "auto";

  thanhS1.style.pointerEvents = "auto";

  islock = false;
  ison = true;

  phone.style.background = phone_lock_background;
  lockscreen.style.opacity = 0;
  lockscreen.style.transition = "none";
  lockscreen.style.display = "none";
  lockscreen.style.pointerEvents = "none";

  document.getElementById("lockclock").style.filter = "brightness(1)";
  document.getElementById("dateText").style.filter = "brightness(1)";

  wallpaper.style.display = "flex";
  wallpaper.style.height = "100%";
  wallpaper.style.width = `100%`;
  wallpaper.style.scale = "100%";
  border_radius_phone = getComputedStyle(root2)
    .getPropertyValue("--bg--border_radius_phone")
    .trim();
  wallpaper.style.borderRadius = border_radius_phone;
  wallpaper.style.opacity = 1;
  wallpaper.style.transform = "translateY(0px)";
  wallpaper.classList.add("unlock");

  if (home_wallpaper) {
    wallpaper.style.transition = `all 0.2s, height ${currentSpeed5}s, width ${currentSpeed5}s, scale ${currentSpeed5}s, borderRadius ${currentSpeed5}s, transform ${currentSpeed5}s, opacity ${currentSpeed5}s`;
    wallpaper.style.backgroundImage = `url("${home_wallpaper}")`;
  }

  lock_clock_date.style.transform = "none";
  lock_clock_date.style.filter = "brightness(1)";

  document.querySelector(".khayapp").transition =
    allApp.style.transition = `all ${currentSpeed5}s`;
  allApp.classList.remove("lock");

  document.querySelector(".khayapp").classList.remove("lock");

  battery1.classList.remove("close");
  battery3.classList.remove("close");
  battery3.style.opacity = battery1.style.opacity = 1;

  clock.classList.add("hien");

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;

  powerbtn.classList.add("hidden");
  setTimeout(() => {
    Object.values(clickables).forEach((el) => {
      el.style.display = "flex";
    });
    powerbtn.classList.remove("hidden");
  }, 440);

  input_password = "";
  updateDots_password();
  removeSwipeEvents();

  clearTimeout(id_holding_locksreen);
  clearTimeout(id_holding_locksreen2);
  id_holding_locksreen = null;
  id_holding_locksreen2 = null;
  is_holding_locksreen = false;

  removeCustomLockscreenTime();
  playmusic("originos_data/ui/Unlock.ogg", volume_unlock_volume);
}

target.innerText += "ech";

let unlock_time = null;
unlockBtn.addEventListener("pointerdown", () => {
  animation.stop();
  animation.play();
  unlock_time = setTimeout(() => {
    if (show_pass_for_cuslock) {
      currentOpeningBtn = boxes["box4"];
      app = appopen[`box4`];
      app.style.display = "none";
      hideAllClickables();
      handleShowLockOption_noanim();
      showPopup_open_close_noanim("app4theme");
      id_holding_locksreen = null;
      lock_preview.style.transform = "translateX(-50%) scale(1)";
      unlock_noanim();
      openPopupFromCurrentButton_noanim();
      updateTime2();

      id_holding_locksreen2 = setTimeout(() => {
        lock_preview.style.transform = "translateX(-50%) scale(0.7)";

        AboutInSetting.style.pointerEvents = "none";
        animationInSetting.style.pointerEvents = "none";

        lockscreen.style.transform = "translateX(-50%) scale(1)";
        id_holding_locksreen2 = null;
        is_holding_locksreen = false;
        show_pass_for_cuslock = false;

        wallpaper_btn.addEventListener("click", handleOpenWallpaperPopup);
        wallpaper_btn2.addEventListener("click", handleOpenWallpaperPopup);
        back4.addEventListener("click", handleCloseWallpaperPopup);

        aod_btn.addEventListener("click", handleOpenAODOption);
        back5.addEventListener("click", handleCloseAODOption);

        lock_btn.addEventListener("click", handleShowLockOption);
        back6.addEventListener("click", handleHideLockOption);

        home_btn.addEventListener("click", showHomeApp);
        back8.addEventListener("click", hideHomeApp);

        finger.addEventListener("click", showFingerPopup);
        back9.addEventListener("click", hideFingerPopup);

        removeCustomLockscreenTime(); // để tắt
        addEventListeners_aod_preview();
      }, 100);
    } else {
      open_all_island();
      unlock();
    }
  }, time_unlock_finger);
});
unlockBtn.addEventListener("pointerup", () => {
  clearTimeout(unlock_time);

  // Reset lại animation nếu đã từng chạy trước đó
  footerText.classList.remove("shake-animate");
  void footerText.offsetWidth; // trigger reflow
  footerText.classList.add("shake-animate");

  document.getElementById("wallpaper_aod2").classList.remove("open");
  document.getElementById("lockclock").style.filter = "brightness(1)";
  document.getElementById("dateText").style.filter = "brightness(1)";
});

let phone_lock_off_background = "#000000";
let phone_lock_background =
  "linear-gradient(to bottom, rgba(47, 11, 34, 255), rgba(147, 111, 134, 255))";
wallpaper.style.height = `${wallpaper_lock_height}%`;
wallpaper.style.scale = `${wallpaper_lock_scale}%`;
wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
wallpaper.style.opacity = 1;

let lockclock_style_transform = "scale(0.75) translateY(250px)";
let dateText_style_transform = "translateY(160px) translateX(-50%) scale(0.95)";

wallpaper.style.transform = "translateY(250px)";
phone.style.background = phone_lock_background;
function powerbtnEvent() {
  if (!islock) lock();
  lock_content.style.opacity = `1`;
  swipeHandle.style.opacity = "1";
  if (ison) {
    swipeHandle.style.opacity = `0`;
    swipeHandle.style.pointerEvents = `none`;

    battery3.style.transition =
      battery1.style.transition =
      lock_clock_date.style.transition =
      wallpaper.style.transition =
        `all calc(0.5s * ${currentSpeed}) cubic-bezier(0.23, 0.55, 0.54, 0.97)`;

    battery3.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
        lockscreen_style_opacity;

    if (
      current_wallpaper_lock == "1" ||
      !always_on_displays ||
      hide_wallpaper
    ) {
      wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
      wallpaper.style.height = `${wallpaper_lock_off_height}%`;
      wallpaper.style.width = `100%`;
      wallpaper.style.scale = `${wallpaper_lock_off_scale}%`;
      wallpaper.style.borderRadius = `${wallpaper_lock_off_borderRadius}px`;
      wallpaper.style.opacity = `${wallpaper_lock_off_opacity}`;
      wallpaper.style.transform = wallpaper_lock_off_transform;
      phone.style.background = phone_lock_off_background;
      lock_clock_date.style.transform = lockclock_style_transform;
    } else {
      wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
      wallpaper.style.height = `${wallpaper_lock_height}%`;
      wallpaper.style.scale = `calc(${wallpaper_lock_scale}% + 5%)`;
      wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
      wallpaper.style.opacity = `calc(${wallpaper_lock_opacity} * 0.5)`;
      wallpaper.style.transform = wallpaper_lock_transform;

      phone.style.background = phone_lock_off_background;
      lock_clock_date.style.transform = "scale(0.93) translateY(30px)";
    }

    document.getElementById("wallpaper_aod2").classList.remove("hidden");
    wallpaper.style.display = display_wallpaper_for_show_aod_img;

    ison = false;
    removeSwipeEvents();
    document.getElementById("lockclock").style.filter = "brightness(3)";
    document.getElementById("dateText").style.filter = "brightness(3)";

    battery1.classList.add("close");
    battery3.classList.add("close");
    thanhS1.style.pointerEvents = "none";
    closePopup_noanim();
    if (!always_on_displays) close_all_island();

    island.style.pointerEvents = "none";
    island2.style.pointerEvents = "none";
    island_circle.style.pointerEvents = "none";

    container_password.style.animation = "fadeOut_password 0s";
    container_password.style.display = "none";
    container_password.style.pointerEvents = "none";
    container_password.style.animation = "";
  } else {
    swipeHandle.style.opacity = `1`;
    swipeHandle.style.pointerEvents = `auto`;

    battery3.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
        1;

    wallpaper.style.display = "flex";
    wallpaper.style.transition = `all ${currentSpeed5}s cubic-bezier(0.23, 0.55, 0.54, 0.97)`;
    wallpaper.style.height = `${wallpaper_lock_height}%`;
    wallpaper.style.width = `100%`;
    wallpaper.style.scale = `${wallpaper_lock_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
    wallpaper.style.opacity = 1;

    document.getElementById("wallpaper_aod2").classList.add("hidden");

    wallpaper.style.transform = wallpaper_lock_transform;
    phone.style.background = phone_lock_background;

    ison = true;
    addSwipeEvents();
    lock_clock_date.style.transform = "none";
    document.getElementById("lockclock").style.filter = "brightness(1)";
    document.getElementById("dateText").style.filter = "brightness(1)";

    battery1.classList.remove("close");
    battery3.classList.remove("close");
    thanhS1.style.pointerEvents = "auto";

    island.style.pointerEvents = "auto";
    island2.style.pointerEvents = "auto";
    island_circle.style.pointerEvents = "auto";

    if (!always_on_displays) open_all_island();
  }

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;
}

target.innerText += " -";

lockscreen.addEventListener("click", () => {
  if (!ison) {
    battery3.style.opacity =
      battery1.style.opacity =
      lockscreen.style.opacity =
        1;
    battery1.classList.remove("close");
    battery3.classList.remove("close");

    wallpaper.style.display = "flex";
    wallpaper.style.height = `${wallpaper_lock_height}%`;
    wallpaper.style.scale = `${wallpaper_lock_scale}%`;
    wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
    wallpaper.style.width = `100%`;
    wallpaper.style.opacity = 1;

    document.getElementById("wallpaper_aod2").classList.add("hidden");

    wallpaper.style.transform = wallpaper_lock_transform;
    phone.style.background = phone_lock_background;

    ison = true;
    lock_clock_date.style.transform = "none";
    lock_clock_date.style.filter = "brightness(1)";
    thanhS1.style.pointerEvents = "auto";

    swipeHandle.style.opacity = `1`;
    swipeHandle.style.pointerEvents = `auto`;

    island.style.pointerEvents = "auto";
    island2.style.pointerEvents = "auto";
    island_circle.style.pointerEvents = "auto";

    open_all_island();

    document.getElementById("wallpaper_aod2").classList.remove("open");
    document.getElementById("lockclock").style.filter = "brightness(1)";
    document.getElementById("dateText").style.filter = "brightness(1)";
  }

  addSwipeEvents();
});

function openPopupFromCurrentButton_noanim() {
  if (!currentOpeningBtn) return;
  thanh.classList.add("open");
  showPopup_open_close_noanim(app);
  currentOpeningBtn.style.transition = "all 0s, height 0s, top 0s";

  currentOpeningBtn.classList.add("open");
  currentOpeningBtn.style.scale = "100%";
  currentOpeningBtn.style.zIndex = "320";

  lp.style.transition = "all 0s";
  lp.classList.add("open");

  const boxId = Object.keys(boxes).find(
    (key) => boxes[key] === currentOpeningBtn
  );
  if (boxId) clickables[boxId].style.display = "none";

  nav = currentOpeningBtn.querySelector(".nav");
  if (nav) {
    nav.style.transition = "all 0s";
    nav.classList.add("open");
  }

  isMo = true;
}

function unlock_noanim() {
  fingerprint.style.pointerEvents = "none";
  island.style.pointerEvents = "auto";
  island2.style.pointerEvents = "auto";
  island_circle.style.pointerEvents = "auto";

  thanhS1.style.pointerEvents = "auto";

  islock = false;
  ison = true;

  phone.style.background = phone_lock_background;
  lockscreen.style.opacity = 0;
  lockscreen.style.transition = "none";
  lockscreen.style.display = "none";
  lockscreen.style.pointerEvents = "none";

  document.getElementById("lockclock").style.filter = "brightness(1)";
  document.getElementById("dateText").style.filter = "brightness(1)";

  wallpaper.style.display = "flex";
  wallpaper.style.height = "100%";
  wallpaper.style.width = `100%`;
  wallpaper.style.scale = "100%";
  border_radius_phone = getComputedStyle(root2)
    .getPropertyValue("--bg--border_radius_phone")
    .trim();
  wallpaper.style.borderRadius = border_radius_phone;
  wallpaper.style.opacity = 1;
  wallpaper.style.transform = "translateY(0px)";
  wallpaper.classList.add("unlock");

  if (home_wallpaper) {
    wallpaper.style.transition = `all 0s`;
    wallpaper.style.backgroundImage = `url("${home_wallpaper}")`;
  }

  lock_clock_date.style.transform = "none";
  lock_clock_date.style.filter = "brightness(1)";

  allApp.style.transition = "all 0s";
  allApp.classList.remove("lock");

  battery1.classList.remove("close");
  battery3.classList.remove("close");
  battery1.style.opacity = battery3.style.opacity = 1;

  clock.classList.add("hien");

  footerText.classList.remove("shake-animate");
  footerText.style.opacity = 0;

  powerbtn.classList.add("hidden");

  powerbtn.classList.remove("hidden");

  input_password = "";
  updateDots_password();
  removeSwipeEvents();

  const khayapp = document.querySelector(".khayapp");
  if (khayapp) {
    khayapp.style.transition = "all 0s";
    khayapp.classList.remove("lock");
  }
}

function hidePopup_open_close_noanim(target) {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  el.classList.remove("open");

  hideTimeouts_open_close[id] = setTimeout(() => {
    el.style.display = "none";
    hideTimeouts_open_close[id] = null;
  }, 0);
}

function showPopup_open_close_noanim(target) {
  const target2 =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!target2) return;

  // Gỡ animation
  target2.style.transition = "none";

  // Hiển thị popup trước
  target2.style.display = "flex";
  target2.classList.remove("close");
  target2.classList.add("open");

  // Buộc trình duyệt render lại trước khi thêm transition (trick)
  requestAnimationFrame(() => {
    target2.style.transition = "all 0.4s ease";
  });
}

function handleShowLockOption_noanim() {
  showPopup_open_close_noanim(lock_option);

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", handleColorCircleClick);
  });
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  customColorBtn.addEventListener("click", handleCustomColorClick);
  colorPicker.addEventListener("input", handleColorPickerInput);
  sizeSlider.addEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").addEventListener("click", handleBtn1Click);
  document.getElementById("btn2").addEventListener("click", handleBtn2Click);

  button_decor.addEventListener("click", handleDecorClick);
  close_controls_locktext.addEventListener(
    "click",
    handleclose_controls_locktextClick
  );

  addeventlistener_color_circle2();
}

let is_holding_locksreen = false;
let id_holding_locksreen = null;
let id_holding_locksreen2 = null;

function addCustomLockscreenTime() {
  lockscreen.addEventListener("pointerdown", onLockscreenPointerDown);
  lockscreen.addEventListener("pointerup", onLockscreenPointerUp);
}

function removeCustomLockscreenTime() {
  lockscreen.removeEventListener("pointerdown", onLockscreenPointerDown);
  lockscreen.removeEventListener("pointerup", onLockscreenPointerUp);
  clearTimeout(id_holding_locksreen);
  clearTimeout(id_holding_locksreen2);
  id_holding_locksreen = null;
  id_holding_locksreen2 = null;
  is_holding_locksreen = false;
  lockscreen.style.transform = "translateX(-50%) scale(1)";
}

let show_pass_for_cuslock = false;
function onLockscreenPointerDown(e) {
  if (e.target !== lockscreen || !ison) return;
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  lockscreen.style.transform = "translateX(-50%) scale(0.98)";
  is_holding_locksreen = true;

  hidePopup_open_close(credits);
  hidePopup_open_close(app4_vesion);
  hidePopup_open_close(app4animation);
  hidePopup_open_close(app4_home);
  hidePopup_open_close(wallpaper_option);
  hidePopup_open_close(aod_option);
  hidePopup_open_close(app4_finger);
  hidePopup_open_close(app4icon);
  hidePopup_open_close(app4audio);
  hidePopup_open_close(app4_lock_style);
  hidePopup_open_close(crea_pass);

  id_holding_locksreen = setTimeout(() => {
    if (pass_password) {
      swipeHandle.style.opacity = "0";
      lock_content.style.opacity = `0`;
      container_password.style.animation = "none";
      container_password.style.display = "flex";
      container_password.style.pointerEvents = "auto";
      animateKeys_password();
      input_password = "";
      updateDots_password();
      show_pass_for_cuslock = true;
      lockscreen.style.transform = "translateX(-50%) scale(1)";
    } else {
      currentOpeningBtn = boxes["box4"];
      app = appopen[`box4`];
      app.style.display = "none";
      hideAllClickables();
      handleShowLockOption_noanim();
      showPopup_open_close_noanim("app4theme");
      id_holding_locksreen = null;
      lock_preview.style.transform = "translateX(-50%) scale(1)";
      unlock_noanim();
      openPopupFromCurrentButton_noanim();
      updateTime2();

      id_holding_locksreen2 = setTimeout(() => {
        lock_preview.style.transform = "translateX(-50%) scale(0.7)";

        AboutInSetting.style.pointerEvents = "none";
        animationInSetting.style.pointerEvents = "none";

        lockscreen.style.transform = "translateX(-50%) scale(1)";
        id_holding_locksreen2 = null;
        is_holding_locksreen = false;

        wallpaper_btn.addEventListener("click", handleOpenWallpaperPopup);
        wallpaper_btn2.addEventListener("click", handleOpenWallpaperPopup);
        back4.addEventListener("click", handleCloseWallpaperPopup);

        aod_btn.addEventListener("click", handleOpenAODOption);
        back5.addEventListener("click", handleCloseAODOption);

        lock_btn.addEventListener("click", handleShowLockOption);
        back6.addEventListener("click", handleHideLockOption);

        home_btn.addEventListener("click", showHomeApp);
        back8.addEventListener("click", hideHomeApp);

        finger.addEventListener("click", showFingerPopup);
        back9.addEventListener("click", hideFingerPopup);

        removeCustomLockscreenTime(); // để tắt
        addEventListeners_aod_preview();
      }, 100);
    }
  }, 600);
}

function onLockscreenPointerUp() {
  if (id_holding_locksreen) {
    clearTimeout(id_holding_locksreen);
    id_holding_locksreen = null;
    if (id_holding_locksreen2) {
      clearTimeout(id_holding_locksreen2);
      id_holding_locksreen2 = null;
    }
  }
  is_holding_locksreen = false;
  lockscreen.style.transform = "translateX(-50%) scale(1)";
}

addCustomLockscreenTime();

// in setting
let duration = 1.7 * currentSpeed;

const AboutInSetting = document.getElementById("about_setting");
const animationInSetting = document.getElementById("animation_setting");
const app4animation = document.getElementById("app4animation");
const khaysetting1_2 = document.getElementById("khaysetting1-2");
const credits = document.getElementById("app4credits");
const back7 = document.getElementById("back_to_setting7");

const back = document.getElementById("back_to_setting");
const back2 = document.getElementById("back_to_setting2");
const selectSpeed = document.querySelector(".select-speed-wrapper");

const app4 = document.getElementById("app4");
const app4main = document.getElementById("app4main");

const app4_theme = document.getElementById("app4theme");
const theme_option = document.getElementById("theme_setting");
const back3 = document.getElementById("back_to_setting3");

const wallpaper_btn = document.getElementById("wallpaper-btn");
const wallpaper_option = document.getElementById("app4wallpaper");
const back4 = document.getElementById("back_to_setting4");

const aod_option = document.getElementById("app4aod");
const aod_btn = document.getElementById("aod-btn");
const back5 = document.getElementById("back_to_setting5");

const lock_btn = document.getElementById("lock-btn");
const back6 = document.getElementById("back_to_setting6");
target.innerText += " ga";
const lock_option = document.getElementById("app4lock");
const wallpaper_btn2 = document.querySelector(".wallpaper-btn-2");

const home_btn = document.getElementById("home-btn");
const app4_home = document.getElementById("app4home");
const back8 = document.getElementById("back_to_setting8");

const finger = document.getElementById("finger-btn");
const app4_finger = document.getElementById("app4finger");
const back9 = document.getElementById("back_to_setting9");

const vesion_setting = document.querySelector(".khaysetting1-1");
const app4_vesion = document.getElementById("app4vesion");
const back10 = document.getElementById("back_to_setting10");

const language_btn = document.querySelector(".khaysetting5");
const app4audio = document.getElementById("app4audio");
const back11 = document.getElementById("back_to_setting11");

const icon_btn = document.getElementById("icon_btn");
const app4_icon = document.getElementById("app4icon");
const back12 = document.getElementById("back_to_setting12");

const lock_style_btn = document.getElementById("lock_style");
const app4_lock_style = document.getElementById("app4lockstyle");
const back13 = document.getElementById("back_to_setting13");

const crea_pass = document.querySelector(".container_crea_pass");
const box_pass1 = document.getElementById("box_pass1");
const box_pass2 = document.getElementById("box_pass2");
const pass_icon_btn = document.getElementById("icon_pass1");
const finger_icon_btn = document.getElementById("icon_pass2");
const back14 = document.getElementById("back_to_setting14");

const hideTimeouts_open_close = {};

function showPopup_open_close(target, mode = "flex") {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  if (hideTimeouts_open_close[id]) {
    clearTimeout(hideTimeouts_open_close[id]);
    hideTimeouts_open_close[id] = null;
  }

  el.style.display = mode;

  requestAnimationFrame(() => {
    el.classList.remove("close");
    el.classList.add("open");
  });
}

target.innerText += "lax";

function hidePopup_open_close(target, mode = "none") {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  const id = el.id;

  el.classList.remove("open");

  hideTimeouts_open_close[id] = setTimeout(() => {
    el.style.display = mode;
    hideTimeouts_open_close[id] = null;
  }, 400);
}

//about option
AboutInSetting.addEventListener("click", () => {
  showPopup_open_close(app4);

  theme_option.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";

  vesion_setting.addEventListener("click", handleShowVersion);
  back10.addEventListener("click", handleHideVersion);

  khaysetting1_2.addEventListener("click", handleShowCredits);
  back7.addEventListener("click", handleHideCredits);
});
back.addEventListener("click", () => {
  hidePopup_open_close(app4);

  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";

  vesion_setting.removeEventListener("click", handleShowVersion);
  back10.removeEventListener("click", handleHideVersion);

  khaysetting1_2.removeEventListener("click", handleShowCredits);
  back7.removeEventListener("click", handleHideCredits);
});

function handleShowCredits() {
  showPopup_open_close(credits);
}
function handleHideCredits() {
  hidePopup_open_close(credits);
}
function handleShowVersion() {
  showPopup_open_close(app4_vesion);
}
function handleHideVersion() {
  hidePopup_open_close(app4_vesion);
}

const blurAppBtn = document.getElementById("blurApp");

//animation option
animationInSetting.addEventListener("click", () => {
  showPopup_open_close(app4animation);
  document.getElementById(
    "scaling-box"
  ).style.animation = `scaleUpDown ${duration}s ease-out infinite`;

  AboutInSetting.style.pointerEvents = "none";
  theme_option.style.pointerEvents = "none";

  blurAppBtn.addEventListener("click", handleBlurAppToggle);
});
back2.addEventListener("click", () => {
  hidePopup_open_close(app4animation);
  document.getElementById("scaling-box").style.animation = "none";

  AboutInSetting.style.pointerEvents = "auto";
  theme_option.style.pointerEvents = "auto";

  blurAppBtn.removeEventListener("click", handleBlurAppToggle);
});

lock_style_btn.addEventListener("click", () => {
  showPopup_open_close(app4_lock_style);

  theme_option.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  AboutInSetting.style.pointerEvents = "none";

  add_pass_events();
  addSettingsListeners_finger_pass();
});
back13.addEventListener("click", () => {
  hidePopup_open_close(app4_lock_style);

  theme_option.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";
  AboutInSetting.style.pointerEvents = "auto";

  remove_pass_events();
  removeSettingsListeners_finger_pass();
});

let time_unlock_finger = 100;
let finger_fast = 0;
let transparent_password = 0;

// --- Hàm xử lý sự kiện ---
function onFastFingerClick(event) {
  const btn = event.target;
  btn.classList.toggle("active");
  finger_fast = btn.classList.contains("active") ? 1 : 0;
  time_unlock_finger = finger_fast ? 0 : 100;
  localStorage.setItem("fast_finger", finger_fast);
}

function onTransparentPasswordClick(event) {
  const btn = event.target;
  btn.classList.toggle("active");
  transparent_password = btn.classList.contains("active") ? 1 : 0;
  localStorage.setItem("transparent_password", transparent_password);

  document.querySelectorAll(".key_password").forEach((el) => {
    el.style.background = transparent_password ? "#ffffff00" : "#ffffff50";
  });
}

// --- Thêm sự kiện ---
function addSettingsListeners_finger_pass() {
  document
    .getElementById("fast_finger")
    .addEventListener("click", onFastFingerClick);
  document
    .getElementById("transparent_password")
    .addEventListener("click", onTransparentPasswordClick);
}

// --- Gỡ sự kiện ---
function removeSettingsListeners_finger_pass() {
  document
    .getElementById("fast_finger")
    .removeEventListener("click", onFastFingerClick);
  document
    .getElementById("transparent_password")
    .removeEventListener("click", onTransparentPasswordClick);
}

// --- Phục hồi trạng thái từ localStorage ---
function restoreSettings_finger_pass() {
  finger_fast = parseInt(localStorage.getItem("fast_finger")) || 0;
  transparent_password =
    parseInt(localStorage.getItem("transparent_password")) || 0;

  const fastBtn = document.getElementById("fast_finger");
  const transBtn = document.getElementById("transparent_password");

  if (finger_fast) {
    fastBtn.classList.add("active");
    time_unlock_finger = 0;
  } else {
    fastBtn.classList.remove("active");
    time_unlock_finger = 100;
  }

  if (transparent_password) {
    transBtn.classList.add("active");
    document.querySelectorAll(".key_password").forEach((el) => {
      el.style.background = "#ffffff00";
    });
  } else {
    transBtn.classList.remove("active");
    document.querySelectorAll(".key_password").forEach((el) => {
      el.style.background = "#ffffff50";
    });
  }
}

language_btn.addEventListener("click", () => {
  showPopup_open_close(app4audio);

  AboutInSetting.style.pointerEvents = "none";
  theme_option.style.pointerEvents = "none";

  addSystemVolumeListeners();
});
back11.addEventListener("click", () => {
  hidePopup_open_close(app4audio);

  AboutInSetting.style.pointerEvents = "auto";
  theme_option.style.pointerEvents = "auto";
});

let volume_all_volume = 1;
let volume_click_volume = 0;
let volume_unlock_volume = 1;
let volume_charge_volume = 1;

const slider_volume = document.getElementById("volume_all_slider");
const toggle_unlock_volume = document.getElementById("toggle_unlock_volume");
const toggle_charge_volume = document.getElementById("toggle_charge_volume");

function addSystemVolumeListeners() {
  slider_volume.addEventListener("input", onVolumeSliderInput);
  slider_volume.addEventListener("pointerup", onVolumeSliderRelease);
  toggle_unlock_volume.addEventListener("click", onUnlockToggle);
  toggle_charge_volume.addEventListener("click", onChargeToggle);
}

function removeSystemVolumeListeners() {
  slider_volume.removeEventListener("input", onVolumeSliderInput);
  slider_volume.removeEventListener("pointerup", onVolumeSliderRelease);
  toggle_unlock_volume.removeEventListener("click", onUnlockToggle);
  toggle_charge_volume.removeEventListener("click", onChargeToggle);
}

function updateIndividualVolumes() {
  if (toggle_unlock_volume.classList.contains("active")) {
    volume_unlock_volume = volume_all_volume;
  }
  if (toggle_charge_volume.classList.contains("active")) {
    volume_charge_volume = volume_all_volume;
  }
}

function onVolumeSliderInput() {
  volume_all_volume = parseFloat(slider_volume.value);
  localStorage.setItem("volume_all_volume", volume_all_volume);
  updateIndividualVolumes();
}

function onVolumeSliderRelease() {
  playmusic("originos_data/ui/Effect_Tick.ogg", volume_click_volume);
}

function onClickToggle() {
  const isActive = toggle_click_volume.classList.toggle("active");
  if (isActive) {
    volume_click_volume = volume_all_volume;
  } else {
    volume_click_volume = 0;
  }
  localStorage.setItem("volume_click_volume", volume_click_volume);
  if (volume_click_volume > 0) {
    playmusic("originos_data/ui/Effect_Tick.ogg", volume_click_volume);
  }
}

function onUnlockToggle() {
  const isActive = toggle_unlock_volume.classList.toggle("active");
  if (isActive) {
    volume_unlock_volume = volume_all_volume;
  } else {
    volume_unlock_volume = 0;
  }
  localStorage.setItem("volume_unlock_volume", volume_unlock_volume);
}

function onChargeToggle() {
  const isActive = toggle_charge_volume.classList.toggle("active");
  if (isActive) {
    volume_charge_volume = volume_all_volume;
  } else {
    volume_charge_volume = 0;
  }
  localStorage.setItem("volume_charge_volume", volume_charge_volume);
}

// Khôi phục trạng thái từ localStorage

function handleBoxPass1() {
  remove_pass_btn.style.display = "none";
  showPopup_open_close(crea_pass);
  if (pass_password == "") {
    stage_crea_pass = 1;
    document.getElementById("title_crea_pass").textContent =
      "Create new password";
  }
}

function handleBack14() {
  stage_crea_pass = 0;
  input_crea_pass = "";
  newPass_crea_pass = "";
  document.getElementById("title_crea_pass").textContent =
    pass_password === "" ? "Create new password" : "Enter old password";
  document.getElementById("error_crea_pass").textContent = "";
  updateDots_crea_pass();
  hidePopup_open_close(crea_pass);
  remove_pass_btn.style.display = "none";
}

function handleBoxPass2() {
  if (pass_password != "") {
    box_pass2.classList.toggle("off");
    status_pass2.textContent = box_pass2.classList.contains("off")
      ? "OFF"
      : "ON";

    finger_icon_btn.style.fill = box_pass2.classList.contains("off")
      ? "#000000"
      : "#ffffff";
    finger_biometrics = box_pass2.classList.contains("off") ? 0 : 1;
    localStorage.setItem("finger_saved", finger_biometrics.toString());
  } else tb_system("To add a fingerprint, please set a password");
}

function add_pass_events() {
  box_pass1.addEventListener("click", handleBoxPass1);
  back14.addEventListener("click", handleBack14);
  box_pass2.addEventListener("click", handleBoxPass2);
}

function remove_pass_events() {
  box_pass1.removeEventListener("click", handleBoxPass1);
  back14.removeEventListener("click", handleBack14);
  box_pass2.removeEventListener("click", handleBoxPass2);
}

if (saved_finger_local == 0) {
  box_pass2.classList.add("off");
  finger_icon_btn.style.fill = "#000000";
  status_pass2.textContent = box_pass2.classList.contains("off") ? "OFF" : "ON";
  finger_biometrics = box_pass2.classList.contains("off") ? 0 : 1;
}

let blur_app = 0;

function handleBlurAppToggle() {
  blurAppBtn.classList.toggle("active");
  blur_app = blurAppBtn.classList.contains("active") ? 1 : 0;

  if (blur_app) {
    lp.style.display = "flex";
    lp.style.filter = "blur(20px)";
    localStorage.setItem("blur_App_saved", "1");
  } else {
    lp.style.filter = "blur(0px)";
    lp.style.display = "none";
    localStorage.removeItem("blur_App_saved");
  }
}

//theme option
theme_option.addEventListener("click", () => {
  showPopup_open_close(app4_theme);

  AboutInSetting.style.pointerEvents = "none";
  animationInSetting.style.pointerEvents = "none";
  updateTime2();

  wallpaper_btn.addEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.addEventListener("click", handleOpenWallpaperPopup);
  back4.addEventListener("click", handleCloseWallpaperPopup);

  aod_btn.addEventListener("click", handleOpenAODOption);
  back5.addEventListener("click", handleCloseAODOption);

  lock_btn.addEventListener("click", handleShowLockOption);
  back6.addEventListener("click", handleHideLockOption);

  home_btn.addEventListener("click", showHomeApp);
  back8.addEventListener("click", hideHomeApp);

  finger.addEventListener("click", showFingerPopup);
  back9.addEventListener("click", hideFingerPopup);

  addEventListeners_aod_preview();
});
back3.addEventListener("click", () => {
  hidePopup_open_close("app4theme");

  AboutInSetting.style.pointerEvents = "auto";
  animationInSetting.style.pointerEvents = "auto";

  wallpaper_btn.removeEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.removeEventListener("click", handleOpenWallpaperPopup);
  back4.removeEventListener("click", handleCloseWallpaperPopup);

  aod_btn.removeEventListener("click", handleOpenAODOption);
  back5.removeEventListener("click", handleCloseAODOption);

  lock_btn.removeEventListener("click", handleShowLockOption);
  back6.removeEventListener("click", handleHideLockOption);

  home_btn.removeEventListener("click", showHomeApp);
  back8.removeEventListener("click", hideHomeApp);

  finger.removeEventListener("click", showFingerPopup);
  back9.removeEventListener("click", hideFingerPopup);

  removeEventListeners_aod_preview();
});

function handleOpenWallpaperPopup() {
  showPopup_open_close(wallpaper_option);
  addWallpaperImageListeners();
}
function handleCloseWallpaperPopup() {
  hidePopup_open_close(wallpaper_option);
  removeWallpaperImageListeners();
}

const buttons = document.querySelectorAll(".img-button");
const wallpaper_preview = document.querySelector(".wallpaper-preview");
const wallpaper_preview2 = document.querySelector(".wallpaper-preview2");
const wallPaper2 = document.querySelector(".wallpaper2");
const addBtn = document.getElementById("addBtn");

const popup_overlay_wallpaper = document.getElementById(
  "popup_overlay_wallpaper"
);
const btn_set_home_wallpaper = document.getElementById(
  "btn_set_home_wallpaper"
);
const btn_set_lock_wallpaper = document.getElementById(
  "btn_set_lock_wallpaper"
);
const btn_set_both_wallpaper = document.getElementById(
  "btn_set_both_wallpaper"
);
const btn_cancel_wallpaper = document.getElementById("btn_cancel_wallpaper");

let selectedImageUrl = "";
let selectedButton = null;

function setLockWallpaper(imageUrl, btn) {
  lock_wallpaper = imageUrl;
  setData("lock_wallpaper", imageUrl);

  wallPaper2.style.backgroundImage = `url(${imageUrl})`;
  wallpaper_preview2.style.backgroundImage = `url(${imageUrl})`;

  select_color_from_img(imageUrl);
}

function setHomeWallpaper(imageUrl, btn) {
  home_wallpaper = imageUrl;
  setData("home_wallpaper", home_wallpaper);

  wallpaper_preview.style.backgroundImage = `url(${imageUrl})`;
  wallpaper.style.backgroundImage = `url(${imageUrl})`;
}

function setBothWallpapers(imageUrl) {
  setHomeWallpaper(imageUrl);
  setLockWallpaper(imageUrl);
}

function showWallpaperPopup(imageUrl, button) {
  selectedImageUrl = imageUrl;
  selectedButton = button;
  showPopup_open_close(popup_overlay_wallpaper);
  showPopup_open_close("popup_wallpaperid", "block");
}

function hideWallpaperPopup() {
  hidePopup_open_close(popup_overlay_wallpaper);
  hidePopup_open_close("popup_wallpaperid");
  selectedImageUrl = "";
  selectedButton = null;
}

function setActive(btn) {
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  select_color_from_img(selectedImageUrl);
}

function handleImageButtonClick(e) {
  const img = e.currentTarget.getAttribute("data-img");
  showWallpaperPopup(img, e.currentTarget);
}

function handleAddButtonClick() {
  fileInput.value = "";
  fileInput.click();
}

function handleFileInputChange(event) {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const dataUrl = e.target.result;
      addBtn.setAttribute("data-img", dataUrl);
      showWallpaperPopup(dataUrl, addBtn);
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image.");
  }
}

// Popup button actions
btn_set_lock_wallpaper.addEventListener("click", () => {
  setLockWallpaper(selectedImageUrl, selectedButton);
  hideWallpaperPopup();
});

btn_set_home_wallpaper.addEventListener("click", () => {
  setHomeWallpaper(selectedImageUrl, selectedButton);
  hideWallpaperPopup();
});

btn_set_both_wallpaper.addEventListener("click", () => {
  setLockWallpaper(selectedImageUrl, selectedButton);
  setHomeWallpaper(selectedImageUrl, selectedButton);
  hideWallpaperPopup();
});

btn_cancel_wallpaper.addEventListener("click", () => {
  hideWallpaperPopup();
});

// Init listeners
function addWallpaperImageListeners() {
  buttons.forEach((btn) => {
    if (btn !== addBtn) {
      btn.addEventListener("click", handleImageButtonClick);
    }
  });

  addBtn.addEventListener("click", handleAddButtonClick);
  fileInput.addEventListener("change", handleFileInputChange);
}

function removeWallpaperImageListeners() {
  buttons.forEach((btn) => {
    if (btn !== addBtn) {
      btn.removeEventListener("click", handleImageButtonClick);
    }
  });

  addBtn.removeEventListener("click", handleAddButtonClick);
  fileInput.removeEventListener("change", handleFileInputChange);
}

// Tùy chọn: auto click ảnh đầu tiên
if (buttons[0]) {
  buttons[0].click();
}

function handleOpenAODOption() {
  showPopup_open_close(aod_option);
  addWallpaperSettingListeners();
}
function handleCloseAODOption() {
  hidePopup_open_close(aod_option);
  removeWallpaperSettingListeners();
}

let always_on_displays = 1;
let hide_wallpaper = 0;

function handleToggleAlwaysOnDisplays() {
  const el = document.getElementById("Alway-on-displays");
  el.classList.toggle("active");
  always_on_displays = el.classList.contains("active") ? 1 : 0;

  localStorage.setItem("always_on_displays_saved", always_on_displays);

  const hideWallEl = document.getElementById("setting-item-hide-wall");

  if (always_on_displays) {
    hideWallEl.style.filter = "brightness(1)";
    hideWallEl.style.pointerEvents = "auto";

    lockscreen_style_opacity = 1;
    hide_wallpaper = 0;

    wallpaper_lock_off_opacity = 1;
    wallpaper_lock_off_height = 50;
    wallpaper_lock_off_scale = 40;
    wallpaper_lock_off_borderRadius = 0;
    wallpaper_lock_off_transform = "translateY(0px)";

    lockclock_style_transform = "scale(0.75) translateY(250px)";
    dateText_style_transform = "translateY(160px) translateX(-50%) scale(0.95)";

    localStorage.removeItem("always_on_displays_saved");
    localStorage.removeItem("hide_wallpaper_saved");

    document.getElementById("wallpaper_aod2").classList.remove("hidden2");
  } else {
    hideWallEl.style.filter = "brightness(0.7)";
    hideWallEl.style.pointerEvents = "none";

    document.getElementById("Hide-wallPaper").classList.remove("active");
    hide_wallpaper = 1;
    lockscreen_style_opacity = 0;

    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.85) translateY(60px)";

    document.getElementById("wallpaper_aod2").classList.add("hidden2");
  }
}

function handleToggleHideWallpaper() {
  const el = document.getElementById("Hide-wallPaper");
  el.classList.toggle("active");
  hide_wallpaper = el.classList.contains("active") ? 1 : 0;

  localStorage.setItem("hide_wallpaper_saved", hide_wallpaper);

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.85) translateY(60px)";

    document.getElementById("wallpaper_aod2").classList.add("hidden2");
  } else {
    wallpaper_lock_off_opacity = 1;
    wallpaper_lock_off_height = 50;
    wallpaper_lock_off_scale = 40;
    wallpaper_lock_off_borderRadius = 0;
    wallpaper_lock_off_transform = "translateY(0px)";

    document.getElementById("wallpaper_aod2").classList.remove("hidden2");

    lockclock_style_transform = "scale(0.75) translateY(250px)";
    dateText_style_transform = "translateY(160px) translateX(-50%) scale(0.95)";

    localStorage.removeItem("hide_wallpaper_saved");
  }
}

let display_wallpaper_for_show_aod_img = "flex";
const wallpaper_aod2 = document.getElementById("wallpaper_aod2");

function addEventListeners_aod_preview() {
  document.querySelectorAll(".aod_preview_screen").forEach((div) => {
    div.addEventListener("click", handleAodPreviewClick);
  });

  document
    .getElementById("upload_aod_wallpaper")
    .addEventListener("change", handleUploadAodWallpaper);
}

function removeEventListeners_aod_preview() {
  document.querySelectorAll(".aod_preview_screen").forEach((div) => {
    div.removeEventListener("click", handleAodPreviewClick);
  });

  document
    .getElementById("upload_aod_wallpaper")
    .removeEventListener("change", handleUploadAodWallpaper);
}

function handleAodPreviewClick(event) {
  const div = event.currentTarget;

  if (hide_wallpaper || !always_on_displays) {
    tb_system("turn off Hide wallpaper fist");
    return;
  }

  current_wallpaper_lock = div.getAttribute("current_wallpaper_lock");

  if (div.id === "soon") {
    document.getElementById("upload_aod_wallpaper").click();
  }

  document.querySelectorAll(".aod_preview_screen").forEach((el) => {
    el.classList.remove("active");
  });
  div.classList.add("active");

  const display = div.getAttribute("display_wallpaper_aod2");
  const opacity = div.getAttribute("opacity") || "1";

  display_wallpaper_for_show_aod_img = opacity;
  localStorage.setItem("current_wallpaper_lock", current_wallpaper_lock);
  localStorage.setItem("wallpaper_aod2_display", display);
  localStorage.setItem("wallpaper_aod2_opacity", opacity);

  wallpaper_aod2.style.display = display;
  wallpaper_aod2.style.opacity = opacity;
}

function handleUploadAodWallpaper(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function () {
    const imageData = reader.result;

    const soonDiv = document.getElementById("soon");
    const display = soonDiv.getAttribute("display_wallpaper_aod2");
    const opacity = soonDiv.getAttribute("opacity");
    const currentWallpaper = soonDiv.getAttribute("current_wallpaper_lock");

    setData("wallpaper_aod2_image", imageData);
    localStorage.setItem("wallpaper_aod2_display", display);
    localStorage.setItem("wallpaper_aod2_opacity", opacity);
    localStorage.setItem("current_wallpaper_lock", currentWallpaper);

    wallpaper_aod2.style.backgroundImage = `url('${imageData}')`;
    wallpaper_aod2.style.display = display;
    wallpaper_aod2.style.opacity = opacity;

    display_wallpaper_for_show_aod_img = opacity;
    current_wallpaper_lock = currentWallpaper;

    document.querySelectorAll(".aod_preview_screen").forEach((el) => {
      el.classList.remove("active");
    });
    soonDiv.classList.add("active");
  };
  reader.readAsDataURL(file);
}

function addWallpaperSettingListeners() {
  document
    .getElementById("Alway-on-displays")
    .addEventListener("click", handleToggleAlwaysOnDisplays);
  document
    .getElementById("Hide-wallPaper")
    .addEventListener("click", handleToggleHideWallpaper);
}
function removeWallpaperSettingListeners() {
  document
    .getElementById("Alway-on-displays")
    .removeEventListener("click", handleToggleAlwaysOnDisplays);
  document
    .getElementById("Hide-wallPaper")
    .removeEventListener("click", handleToggleHideWallpaper);
}

//lock screen option
function handleShowLockOption() {
  showPopup_open_close(lock_option);

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", handleColorCircleClick);
  });
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  customColorBtn.addEventListener("click", handleCustomColorClick);
  colorPicker.addEventListener("input", handleColorPickerInput);
  sizeSlider.addEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").addEventListener("click", handleBtn1Click);
  document.getElementById("btn2").addEventListener("click", handleBtn2Click);

  button_decor.addEventListener("click", handleDecorClick);
  close_controls_locktext.addEventListener(
    "click",
    handleclose_controls_locktextClick
  );

  addeventlistener_color_circle2();
}
function handleHideLockOption() {
  hidePopup_open_close(lock_option);

  colorCircles.forEach((circle) => {
    circle.removeEventListener("click", handleColorCircleClick);
  });
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");

  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  controls_locktext.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  customColorBtn.removeEventListener("click", handleCustomColorClick);
  colorPicker.removeEventListener("input", handleColorPickerInput);
  sizeSlider.removeEventListener("input", handleSizeSliderInput);

  document.getElementById("btn1").removeEventListener("click", handleBtn1Click);
  document.getElementById("btn2").removeEventListener("click", handleBtn2Click);

  button_decor.removeEventListener("click", handleDecorClick);
  close_controls_locktext.removeEventListener(
    "click",
    handleclose_controls_locktextClick
  );

  removeeventlistener_color_circle2();
}

const clock_preview = document.getElementById("clock_preview");
const colorCircles = document.querySelectorAll(".color-circle");
const customColorBtn = document.getElementById("customColor");
const colorPicker = document.getElementById("colorPicker");
const sizeSlider = document.getElementById("sizeSlider");
target.innerText += "yA";
const date_preview = document.getElementById("dateTextPreview");
const button_decor = document.getElementById("button_decor");

const controls_main = document.getElementById("controls_main");
const controls_date = document.getElementById("controls_date");
const controls_locktext = document.getElementById("controls_locktext");

const close_controls_main = document.getElementById("close_controls_main");
const close_controls_date = document.getElementById("close_controls_date");
const close_controls_locktext = document.getElementById(
  "close_controls_locktext"
);

const lock_preview = document.querySelector(".lock_preview");

function handleDecorClick() {
  controls_locktext.classList.add("open");
  controls_main.classList.remove("open");
  controls_date.classList.remove("open");
  lock_preview.style.transform =
    "translateX(-50%) scale(0.53) translateY(-160px)";
}
function handleclose_controls_locktextClick() {
  controls_locktext.classList.remove("open");
  lock_preview.style.transform = "translateX(-50%) scale(0.7)";

  if (
    !document.querySelector(".wallpaper2")?.classList.contains("hidden_overlay")
  )
    document.getElementById("controls_colorful_photos").classList.add("open");
}
date_preview.addEventListener("click", () => {
  controls_locktext.classList.remove("open");

  controls_date.classList.add("open");
  controls_main.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.9) translateY(90px)";
  clock_preview.classList.add("hidden");
  dateTextPreview.classList.remove("hidden");
});
close_controls_date.addEventListener("click", () => {
  controls_date.classList.remove("open");
  lock_preview.style.transform = "translateX(-50%) scale(0.7)";
  clock_preview.classList.remove("hidden");
  dateTextPreview.classList.remove("hidden");
});

const lessMoreInput = document.getElementById("less_more_input");
const lessMoreEdit = document.getElementById("less_more_edit");

// Load từ localStorage hoặc mặc định
let custom_text_less_is_more =
  localStorage.getItem("custom_text_less_is_more") || "Less is more";

// Gán giá trị vào giao diện
lessMoreInput.value = custom_text_less_is_more;
document.getElementById("text_lock_cus").textContent = custom_text_less_is_more;
document.getElementById("text_lock_cus_2").textContent =
  custom_text_less_is_more;

// Bấm nút edit
lessMoreEdit.onclick = (e) => {
  e.stopPropagation();
  lessMoreInput.disabled = false;
  lessMoreInput.classList.add("editable");
  lessMoreInput.style.borderBottom = "6px solid gray";
  lessMoreInput.focus();
  // Đặt con trỏ ở cuối
  const len = lessMoreInput.value.length;
  lessMoreInput.setSelectionRange(len, len);
};

// Khi blur input
lessMoreInput.onblur = () => {
  lessMoreInput.disabled = true;
  lessMoreInput.classList.remove("editable");
  lessMoreInput.style.borderBottom = "none";

  // Nếu trống thì trả lại mặc định
  if (lessMoreInput.value.trim() === "") {
    lessMoreInput.value = "Less is more";
  }

  // Cập nhật preview và lưu
  custom_text_less_is_more = lessMoreInput.value;
  localStorage.setItem("custom_text_less_is_more", custom_text_less_is_more);
  document.getElementById("text_lock_cus").textContent =
    custom_text_less_is_more;
  document.getElementById("text_lock_cus_2").textContent =
    custom_text_less_is_more;
};

// Gõ tới đâu cập nhật tới đó
lessMoreInput.addEventListener("input", () => {
  if (lessMoreInput.value.length > 14) {
    lessMoreInput.value = lessMoreInput.value.slice(0, 14);
    tb_system("Maximum 14 characters!");
    lessMoreInput.style.borderBottom = "6px solid red";
  } else {
    lessMoreInput.style.borderBottom = "6px solid gray";
  }

  document.getElementById("text_lock_cus").textContent =
    custom_text_less_is_more;
  document.getElementById("text_lock_cus_2").textContent =
    custom_text_less_is_more;

  localStorage.setItem("custom_text_less_is_more", custom_text_less_is_more);
});

// Enter để blur
lessMoreInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    lessMoreInput.blur();
    lessMoreInput.style.borderBottom = "none";
  }
});

const optNone = document.getElementById("optNone");
const optText = document.getElementById("optText");
const textInput = document.getElementById("textInput");
const editBtn = document.getElementById("editBtn");

let saved = localStorage.getItem("custom_text_lock_screen") || "Text";
textInput.value = saved;

if (saved === "") optNone.classList.add("active");
else optText.classList.add("active");

function setActive_date(opt) {
  optNone.classList.remove("active");
  optText.classList.remove("active");
  opt.classList.add("active");
}

optNone.onclick = () => {
  setActive_date(optNone);
  custom_text_lock_screen = "";
  dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
  document.getElementById(
    "dateTextPreview"
  ).textContent = `${formatted} ${custom_text_lock_screen}`;
  if (!textInput.value.trim()) textInput.value = "Text";
  localStorage.setItem("custom_text_lock_screen", "");
};

optText.onclick = () => {
  setActive_date(optText);
  if (!textInput.value.trim()) textInput.value = "Text";

  custom_text_lock_screen = textInput.value;
  dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
  document.getElementById(
    "dateTextPreview"
  ).textContent = `${formatted} ${custom_text_lock_screen}`;
  localStorage.setItem("custom_text_lock_screen", textInput.value);
};

editBtn.onclick = (e) => {
  e.stopPropagation();
  setActive_date(optText);
  textInput.disabled = false;
  textInput.classList.add("editable");
  textInput.style.borderBottom = "6px solid gray";

  textInput.focus();
  textInput.setSelectionRange(textInput.value.length, textInput.value.length);
};

textInput.onblur = () => {
  textInput.disabled = true;
  textInput.classList.remove("editable");
  textInput.style.borderBottom = "none";

  if (optText.classList.contains("active")) {
    custom_text_lock_screen = textInput.value;
    dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
    document.getElementById(
      "dateTextPreview"
    ).textContent = `${formatted} ${custom_text_lock_screen}`;
    localStorage.setItem("custom_text_lock_screen", textInput.value);
  }
};

textInput.onkeydown = (e) => {
  if (e.key === "Enter") {
    if (!textInput.value.trim()) textInput.value = "Text";
    textInput.blur();

    dateElement.textContent = `${formatted} ${custom_text_lock_screen}`;
    document.getElementById(
      "dateTextPreview"
    ).textContent = `${formatted} ${custom_text_lock_screen}`;
  }
  custom_text_lock_screen = textInput.value;
};

textInput.addEventListener("input", () => {
  if (textInput.value.length > 14) {
    textInput.value = textInput.value.slice(0, 14);
    tb_system("Maximum 14 characters!");
    textInput.style.borderBottom = "6px solid red";
  } else {
    textInput.style.borderBottom = "6px solid gray";
  }

  custom_text_lock_screen = textInput.value;
  preview.textContent = custom_text_lock_screen;
  localStorage.setItem("custom_text_lock_screen", custom_text_lock_screen);
});

clock_preview.addEventListener("click", () => {
  controls_main.classList.add("open");

  controls_locktext.classList.remove("open");
  controls_date.classList.remove("open");

  lock_preview.style.transform = "translateX(-50%) scale(0.9) translateY(90px)";
  dateTextPreview.classList.add("hidden");
  clock_preview.classList.remove("hidden");
});
close_controls_main.addEventListener("click", () => {
  controls_main.classList.remove("open");
  lock_preview.style.transform = "translateX(-50%) scale(0.7)";
  dateTextPreview.classList.remove("hidden");
  clock_preview.classList.remove("hidden");
});

const btnThin = document.getElementById("btn_main");
const btnBold = document.getElementById("btn_font");

btnThin.addEventListener("click", () => {
  clock_preview.style.fontWeight = "300";
  lockclock.style.fontWeight = "300";

  localStorage.setItem("font_weight_lock", "300");
});

btnBold.addEventListener("click", () => {
  clock_preview.style.fontWeight = "600";
  lockclock.style.fontWeight = "600";

  localStorage.setItem("font_weight_lock", "600");
});

document.querySelectorAll(".font-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const font = btn.getAttribute("data-font");
    const min = parseInt(btn.getAttribute("data-min")) || 40;
    const max = parseInt(btn.getAttribute("data-max")) || 150;

    clock_preview.style.fontFamily = font;
    lockclock.style.fontFamily = font;

    sizeSlider.min = min;
    sizeSlider.max = max;

    if (sizeSlider.value < min) sizeSlider.value = min;
    if (sizeSlider.value > max) sizeSlider.value = max;

    clock_preview.style.fontSize = `${sizeSlider.value}px`;
    lockclock.style.fontSize = `${sizeSlider.value}px`;
    localStorage.setItem("fontSize", sizeSlider.value);

    localStorage.setItem("font_lock_saved", font);
    localStorage.setItem("font_min_lock_saved", min);
    localStorage.setItem("font_max_lock_saved", max);
  });
});

let color_contrastColor_saved = localStorage.getItem(
  "color_contrastColor_saved"
);
let color_contrastColor = true;
if (!color_contrastColor_saved) color_contrastColor = false;

function handleColorCircleClick(e) {
  const color = e.currentTarget.getAttribute("data-color");
  if (color) {
    color_contrastColor = false;
    localStorage.setItem("color_contrastColor_saved", 0);

    clock_preview.style.color = color;
    lockclock.style.color = color;
    dateText.style.color = color;
    date_preview.style.color = color;
    localStorage.setItem("color_lock_saved", color);
  }
}

function handleCustomColorClick() {
  colorPicker.click();
}

function handleColorPickerInput() {
  const value = colorPicker.value;
  clock_preview.style.color = value;
  lockclock.style.color = value;
  dateText.style.color = value;
  date_preview.style.color = value;
}

function handleSizeSliderInput() {
  const size = sizeSlider.value;
  clock_preview.style.fontSize = `${size}px`;
  lockclock.style.fontSize = `${size}px`;

  localStorage.setItem("fontSize", size);
}

function triggerColorPicker_lockscreen() {
  document.getElementById("color_input_lockscreen").click();
}

function darkenColor_lockscreen(rgb, amount = 100) {
  const [r, g, b] = rgb.match(/\d+/g).map(Number);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  contrastColor = brightness > 120 ? "#141414" : "#ffffff";
  updateWallpaperBorderColor(getReadableColor(rgb), rgb);

  if (color_contrastColor) {
    if (
      !document
        .querySelector(".wallpaper2")
        ?.classList.contains("hidden_overlay")
    ) {
      clock_preview.style.color = contrastColor;
      lockclock.style.color = contrastColor;
      dateText.style.color = contrastColor;
      date_preview.style.color = contrastColor;
      localStorage.setItem("color_lock_saved", contrastColor);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    } else {
      clock_preview.style.color = contrastColor2;
      lockclock.style.color = contrastColor2;
      dateText.style.color = contrastColor2;
      date_preview.style.color = contrastColor2;
      localStorage.setItem("color_lock_saved", contrastColor2);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    }
  }

  return `rgb(${Math.max(r - amount, 0)}, ${Math.max(
    g - amount,
    0
  )}, ${Math.max(b - amount, 0)})`;
}
function getReadableColor(color) {
  let r, g, b;

  // Nếu là rgb() hoặc rgba()
  if (color.startsWith("rgb")) {
    const values = color.match(/\d+/g).map(Number);
    [r, g, b] = values;
  }

  // Nếu là hex (#rrggbb hoặc #rgb)
  else if (color.startsWith("#")) {
    color = color.slice(1);
    if (color.length === 3) {
      color = color
        .split("")
        .map((c) => c + c)
        .join(""); // #abc -> #aabbcc
    }
    const bigint = parseInt(color, 16);
    r = (bigint >> 16) & 255;
    g = (bigint >> 8) & 255;
    b = bigint & 255;
  }

  // Nếu không hợp lệ
  else {
    console.warn("Unsupported color format:", color);
    return "#000"; // fallback
  }

  // Chuyển RGB → HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  // Điều chỉnh để dễ đọc
  s *= 100;
  l *= 100;
  if (l < 50) {
    l = Math.min(100, l + 40);
    s = Math.max(20, s - 30);
  } else {
    l = Math.max(0, l - 40);
    s = Math.max(20, s - 30);
  }

  h = Math.round(h * 360);
  s = Math.round(s);
  l = Math.round(l);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

let contrastColor = "#ffffff";
let contrastColor2 = "#ffffff";
function select_color_from_img(url_img) {
  const img = new Image();
  img.crossOrigin = "anonymous"; // Quan trọng nếu ảnh từ web khác
  img.src = url_img;

  img.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    let r = 0,
      g = 0,
      b = 0,
      total = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      total++;
    }

    r = Math.round(r / total);
    g = Math.round(g / total);
    b = Math.round(b / total);

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const darker = darkenColor_lockscreen(rgb, 100);
    phone_lock_background = `linear-gradient(to bottom, ${darker}, ${rgb})`;

    // Áp dụng nền
    lock_preview.style.background = phone_lock_background;
    phone.style.background = phone_lock_background;

    // 🔁 Tính màu chữ ngược lại (đen hoặc trắng)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    contrastColor = brightness > 120 ? "#131313" : "#ffffff";
    contrastColor2 = brightness > 120 ? "#131313" : "#ffffff";

    updateWallpaperBorderColor(getReadableColor(rgb), rgb);

    // Lưu
    localStorage.setItem("lockscreenColor", phone_lock_background);
  };
}

function updateWallpaperBorderColor(color, color_text) {
  const styleTagId = "wallpaper-style-dynamic";
  let styleTag = document.getElementById(styleTagId);

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  document.querySelectorAll(".text_lock").forEach((el) => {
    el.style.color = color_text;
  });
  document.querySelectorAll(".text_lock_2").forEach((el) => {
    el.style.color = color_text;
  });
  document.querySelectorAll(".img_lock_svg").forEach((el) => {
    el.style.fill = color_text;
  });

  styleTag.textContent = `
  .wallpaper::before,
  .wallpaper2::before {
    content: "";
    position: absolute;
    display: flex;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    height: calc(100% - 60px);
    width: calc(100% - ${wallpaper_border});
    border: ${wallpaper_border} solid ${color};
    border-bottom: 60px solid ${color};
    transition: none;
  }
`;
  localStorage.setItem("wallpaper_border_color", color_text);
}

function handleBtn1Click() {
  wallpaper_lock_height = 70;
  wallpaper_lock_scale = 80;
  wallpaper_lock_borderRadius = 15;
  wallpaper_lock_opacity = 1;
  wallpaper_lock_transform = "translateY(250px)";

  document.getElementById("btn1").style.border = "4px solid #f65268";
  document.getElementById("btn1").style.boxShadow =
    "0 0 10px rgba(246,82,104,0.5)";
  document.getElementById("btn2").style.border = "4px solid #ffffff";
  document.getElementById("btn2").style.boxShadow = "none";

  wallpaper2.style.height = `${wallpaper_lock_height}%`;
  wallpaper2.style.scale = `${wallpaper_lock_scale}%`;
  wallpaper2.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
  wallpaper2.style.opacity = 1;
  wallpaper2.style.transform = wallpaper_lock_transform;

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;
  }

  wallPaper2.classList.remove("hidden_overlay");
  wallpaper.classList.remove("hidden_overlay");

  localStorage.setItem("btn1_2_saved", "1");

  document.getElementById("controls_colorful_photos").classList.add("open");

  if (color_contrastColor) {
    if (
      !document
        .querySelector(".wallpaper2")
        ?.classList.contains("hidden_overlay")
    ) {
      clock_preview.style.color = contrastColor;
      lockclock.style.color = contrastColor;
      dateText.style.color = contrastColor;
      date_preview.style.color = contrastColor;
      localStorage.setItem("color_lock_saved", contrastColor);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    } else {
      clock_preview.style.color = contrastColor2;
      lockclock.style.color = contrastColor2;
      dateText.style.color = contrastColor2;
      date_preview.style.color = contrastColor2;
      localStorage.setItem("color_lock_saved", contrastColor2);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    }
  }
}

function handleBtn2Click() {
  wallpaper_lock_height = 100;
  wallpaper_lock_scale = 100;
  wallpaper_lock_borderRadius = border_radius_phone;
  wallpaper_lock_opacity = 1;
  wallpaper_lock_transform = "translateY(0px)";

  document.getElementById("btn2").style.border = "4px solid #f65268";
  document.getElementById("btn2").style.boxShadow =
    "0 0 10px rgba(246,82,104,0.5)";
  document.getElementById("btn1").style.border = "4px solid #ffffff";
  document.getElementById("btn1").style.boxShadow = "none";

  wallpaper2.style.height = `${wallpaper_lock_height}%`;
  wallpaper2.style.scale = `${wallpaper_lock_scale}%`;
  wallpaper2.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
  wallpaper2.style.opacity = 1;
  wallpaper2.style.transform = wallpaper_lock_transform;

  if (hide_wallpaper) {
    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;
  }

  wallPaper2.classList.add("hidden_overlay");
  wallpaper.classList.add("hidden_overlay");

  localStorage.setItem("btn1_2_saved", "0");

  document.getElementById("controls_colorful_photos").classList.remove("open");

  if (color_contrastColor) {
    if (
      !document
        .querySelector(".wallpaper2")
        ?.classList.contains("hidden_overlay")
    ) {
      clock_preview.style.color = contrastColor;
      lockclock.style.color = contrastColor;
      dateText.style.color = contrastColor;
      date_preview.style.color = contrastColor;
      localStorage.setItem("color_lock_saved", contrastColor);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    } else {
      clock_preview.style.color = contrastColor2;
      lockclock.style.color = contrastColor2;
      dateText.style.color = contrastColor2;
      date_preview.style.color = contrastColor2;
      localStorage.setItem("color_lock_saved", contrastColor2);
      color_contrastColor = true;
      localStorage.setItem("color_contrastColor_saved", color_contrastColor);
    }
  }
}

let wallpaper_border = "10px"; // mặc định

const styleTag = document.createElement("style");
document.head.appendChild(styleTag);

document
  .getElementById("button_style_colotful_photos")
  .addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName.toLowerCase() === "button") {
      const size = target.getAttribute("data-border-size");
      if (size) {
        wallpaper_border = size + "px"; // Gán border

        // Lưu vào localStorage
        localStorage.setItem("wallpaper_border", wallpaper_border);

        // Tách màu cuối cùng từ phone_lock_background
        const matches = phone_lock_background.match(
          /rgb\((\d+), (\d+), (\d+)\)/g
        );
        if (!matches || matches.length === 0) return;

        const lastRGB = matches[matches.length - 1];
        localStorage.setItem("wallpaper_border_color", lastRGB); // Lưu màu

        updateWallpaperBorderColor(getReadableColor(lastRGB), lastRGB); // Gọi lại hàm

        applyLockscreenLayout(wallpaper_border); // Cập nhật layout
      }
    }
  });

function applyLockscreenLayout(borderSize) {
  const isZero = borderSize === "0px";

  if (isZero) {
    document.getElementById("s1_colotful_photos").classList.remove("active");
    document.getElementById("s2_colotful_photos").classList.add("active");
  } else {
    document.getElementById("s1_colotful_photos").classList.add("active");
    document.getElementById("s2_colotful_photos").classList.remove("active");
  }

  document.getElementById("text_lock_cus_2").style.bottom = isZero
    ? "63px"
    : "17px";
  document.getElementById("text_lock_cus_2").style.fontSize = isZero
    ? "34px"
    : "25px";
  document.getElementById("text_lock_cus").style.bottom = isZero
    ? "63px"
    : "17px";
  document.getElementById("text_lock_cus").style.fontSize = isZero
    ? "34px"
    : "25px";

  document.querySelectorAll(".img_lock_2").forEach((el) => {
    el.style.left = isZero ? "10px" : "";
    el.style.right = isZero ? "" : "10px";
  });

  document.querySelectorAll(".img_lock").forEach((el) => {
    el.style.left = isZero ? "10px" : "";
    el.style.right = isZero ? "" : "10px";
  });

  document.querySelectorAll(".img_lock_svg").forEach((el) => {
    el.style.width = el.style.height = isZero ? "46px" : "24px";
  });
}

function addeventlistener_color_circle2() {
  document.querySelectorAll(".color-circle2").forEach((el) => {
    el.addEventListener("click", handle_color_circle2);
  });
}

function removeeventlistener_color_circle2() {
  document.querySelectorAll(".color-circle2").forEach((el) => {
    el.removeEventListener("click", handle_color_circle2);
  });
}

function handle_color_circle2(e) {
  const el = e.currentTarget;
  const color = el.getAttribute("data-color");
  if (color) {
    updateWallpaperBorderColor(getReadableColor(color), color);

    const color_lockscreen = color;
    const colorBtn_lockscreen = document.getElementById("color_lockscreen");

    // Convert hex to computed rgb
    const temp_lockscreen = document.createElement("div");
    temp_lockscreen.style.color = color_lockscreen;
    document.body.appendChild(temp_lockscreen);
    const computedColor_lockscreen = getComputedStyle(temp_lockscreen).color;
    document.body.removeChild(temp_lockscreen);

    const darkerColor_lockscreen = darkenColor_lockscreen(
      computedColor_lockscreen,
      100
    );

    phone_lock_background = `linear-gradient(to bottom, ${darkerColor_lockscreen}, ${computedColor_lockscreen})`;

    lock_preview.style.background = phone_lock_background;
    phone.style.background = phone_lock_background;
    localStorage.setItem("lockscreenColor", phone_lock_background);
  } else {
    const wallpaperEl = document.querySelector(".wallpaper2");
    const bg = window.getComputedStyle(wallpaperEl).backgroundImage;
    const match = bg.match(/url\(["']?(.*?)["']?\)/);
    const imageUrl = match ? match[1] : null;
    select_color_from_img(imageUrl);
  }
}

target.innerText += "15";

function showHomeApp() {
  showPopup_open_close(app4_home);

  // Scale Icon
  buttons_size.forEach((button2) => {
    button2.addEventListener("click", handleScaleIcon);
  });

  // Dock Bar Toggle
  document
    .getElementById("dock-bar")
    .addEventListener("click", handleDockBarToggle);

  // Dark Mode Toggle
  document
    .getElementById("dark-mode")
    .addEventListener("click", handleDarkModeToggle);

  icon_btn.addEventListener("click", showIconPopup);
  back12.addEventListener("click", hideIconPopup);
}
function hideHomeApp() {
  hidePopup_open_close(app4_home);

  buttons_size.forEach((button2) => {
    button2.removeEventListener("click", handleScaleIcon);
  });

  document
    .getElementById("dock-bar")
    .removeEventListener("click", handleDockBarToggle);
  document
    .getElementById("dark-mode")
    .removeEventListener("click", handleDarkModeToggle);

  icon_btn.removeEventListener("click", showIconPopup);
  back12.removeEventListener("click", hideIconPopup);
}

let scale_icon = 100; // Biến mặc định ban đầu là 120
let dock_bar = 1;
let dark_mode = 1;

const buttons_size = document.querySelectorAll(".scale-button");
const acctive_button_size = document.querySelector(
  '.scale-button[data-scale="120"]'
);

if (acctive_button_size) {
  acctive_button_size.classList.add("active");
}

function handleScaleIcon(e) {
  buttons_size.forEach((btn) => btn.classList.remove("active"));
  this.classList.add("active");

  scale_icon = parseInt(this.dataset.scale);
  localStorage.setItem("scale_icon_saved", scale_icon);

  for (let i = 1; i <= 11; i++) {
    boxes[`box${i}`].style.scale = `${scale_icon}%`;
  }
  if (currentOpeningBtn) currentOpeningBtn.style.scale = `100%`;
}

function handleDockBarToggle() {
  this.classList.toggle("active");
  dock_bar = this.classList.contains("active") ? 1 : 0;

  if (dock_bar) {
    document.querySelector(".khayapp").style.opacity = 1;
    localStorage.removeItem("dock_bar_saved");
  } else {
    document.querySelector(".khayapp").style.opacity = 0;
    localStorage.setItem("dock_bar_saved", 1);
  }
}

function handleDarkModeToggle() {
  this.classList.toggle("active");
  dark_mode = this.classList.contains("active") ? 1 : 0;

  localStorage.setItem("dark_mode_saved", dark_mode);
  if (dark_mode == 0) localStorage.removeItem("dark_mode_saved");

  set_dark_mode(dark_mode);
}

function set_dark_mode(mode) {
  if (mode) {
    aod_btn.style.background = "#171719";
    lock_btn.style.background = "#171719";
    home_btn.style.background = "#171719";
    wallpaper_btn.style.background = "#171719";

    aod_btn.style.color = "#eaeaea";
    lock_btn.style.color = "#eaeaea";
    home_btn.style.color = "#eaeaea";
    wallpaper_btn.style.color = "#eaeaea";

    document.querySelectorAll(".finger-btn").forEach((el) => {
      el.style.color = "#eaeaea";
      el.style.background = "#171719";
    });

    app4.style.background = "#010101";
    app4_finger.style.background = "#010101";
    app4_home.style.background = "#010101";
    app4_theme.style.background = "#010101";
    app4_vesion.style.background = "#010101";
    app4animation.style.background = "#010101";
    app4main.style.background = "#010101";
    app4audio.style.background = "#010101";
    app4_icon.style.background = "#010101";
    aod_option.style.background = "#010101";
    wallpaper_option.style.background = "#010101";
    app4_lock_style.style.background = "#010101";
    document.getElementById("app4credits").style.background = "#010101";

    for (let i = 1; i <= 11; i++) {
      appopen[`box${i}`].style.background = "#010101";
      appopen[`box${i}`].style.color = "#eaeaea";
    }

    document.querySelectorAll(".setting-item").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".setting-item_volume").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".volume-setting_volume").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".setting-item3").forEach((el) => {
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".settings-box").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".speed-box").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#171719";
    });

    document.querySelectorAll(".btn_calc").forEach((el) => {
      el.style.color = "#aba9ab";
      el.style.background = "#272627";
    });

    document.querySelectorAll(".equal_calc").forEach((el) => {
      el.style.color = "#ffeff6";
      el.style.background = "#f45e5a";
    });

    document.querySelectorAll(".orange_calc").forEach((el) => {
      el.style.color = "#e85f5c";
      el.style.background = "#341414";
    });

    document.querySelectorAll(".gray_calc").forEach((el) => {
      el.style.color = "#db5e61";
    });

    document.querySelectorAll(".btn_phone").forEach((el) => {
      el.style.color = "#b5b5b5";
    });

    document.querySelectorAll(".scale-button").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });
    document.querySelectorAll(".lang_button").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".content-box-vesion").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".track_music").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".player-popup_music").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });
    document.querySelectorAll(".khaysetting1").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });

    document.querySelectorAll(".popup_wallpaper").forEach((el) => {
      el.style.background = "#141414ff";
      el.style.color = "#ffffff";
    });
    document.querySelectorAll(".popup_wallpaper_button").forEach((el) => {
      el.style.background = "#222222ff";
      el.style.color = "#ffffff";
    });

    document.querySelector(".add-button").style.background = "#393939";
    document.querySelector(".add-button").style.color = "#eaeaea";
    document.querySelectorAll(".controls").forEach((el) => {
      el.style.background = "#000000";
    });
    document.querySelectorAll(".option").forEach((el) => {
      el.style.background = "#171719";
    });
    document.querySelectorAll(".lottie-box").forEach((el) => {
      el.style.background = "#171719";
    });

    app4.style.color = "#eaeaea";
    app4_finger.style.color = "#eaeaea";
    app4_home.style.color = "#eaeaea";
    app4_theme.style.color = "#eaeaea";
    app4_vesion.style.color = "#eaeaea";
    app4animation.style.color = "#eaeaea";
    app4main.style.color = "#eaeaea";
    app4audio.style.color = "#eaeaea";
    app4_icon.style.color = "#eaeaea";
    app4wallpaper.style.color = "#eaeaea";
    document.getElementById("app4credits").style.color = "#eaeaea";

    aod_option.style.color = "#eaeaea";
    wallpaper_option.style.color = "##d9d9d9ea";
    app4_lock_style.style.color = "#eaeaea";

    document.querySelectorAll(".button-finger").forEach((el) => {
      el.style.background = "#171719";
      el.style.color = "#ffffff";
    });
    document.querySelector(".input-group_text_less_is_more").style.background =
      "#171719";
    document.querySelector(".khaysetting3").style.background = "#171719";
    document.querySelector(".khaysetting5").style.background = "#171719";
    document.querySelector(".khaysetting4").style.background = "#171719";
  } else {
    aod_btn.style.background = "#ffffff";
    lock_btn.style.background = "#ffffff";
    home_btn.style.background = "#ffffff";
    wallpaper_btn.style.background = "#ffffff";

    aod_btn.style.color = "#000000";
    lock_btn.style.color = "#000000";
    home_btn.style.color = "#000000";
    wallpaper_btn.style.color = "#000000";

    document.querySelectorAll(".finger-btn").forEach((el) => {
      el.style.color = "#000000";
      el.style.background = "#ffffff";
    });

    app4.style.background = "#eaeaea";
    app4_finger.style.background = "#eaeaea";
    app4_home.style.background = "#eaeaea";
    app4_theme.style.background = "#eaeaea";
    app4_vesion.style.background = "#eaeaea";
    app4animation.style.background = "#eaeaea";
    app4main.style.background = "#eaeaea";
    app4audio.style.background = "#eaeaea";
    app4_icon.style.background = "#eaeaea";
    wallpaper_option.style.background = "#eaeaea";
    aod_option.style.background = "#eaeaea";
    app4_lock_style.style.background = "#eaeaea";
    document.getElementById("app4credits").style.background = "#eaeaea";

    for (let i = 1; i <= 11; i++) {
      appopen[`box${i}`].style.color = "#010101";
      appopen[`box${i}`].style.background = "#eaeaea";
    }

    document.querySelectorAll(".setting-item").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".setting-item_volume").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".volume-setting_volume").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".setting-item3").forEach((el) => {
      el.style.color = "#000000";
    });

    document.querySelectorAll(".finger-btn").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".settings-box").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".speed-box").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#000000";
    });

    document.querySelectorAll(".btn_calc").forEach((el) => {
      el.style.color = "#353535";
      el.style.background = "#f3f3f3";
    });

    document.querySelectorAll(".equal_calc").forEach((el) => {
      el.style.color = "#ffffff";
      el.style.background = "#f0625d";
    });

    document.querySelectorAll(".orange_calc").forEach((el) => {
      el.style.color = "#de4315";
      el.style.background = "#fbc4ab";
    });

    document.querySelectorAll(".gray_calc").forEach((el) => {
      el.style.color = "#d84315";
    });

    document.querySelectorAll(".btn_phone").forEach((el) => {
      el.style.color = "rgb(70, 70, 70)";
    });

    document.querySelectorAll(".scale-button").forEach((el) => {
      el.style.color = "#000000";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".lang_button").forEach((el) => {
      el.style.color = "#000000";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".button-finger").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".content-box-vesion").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".track_music").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".player-popup_music").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".khaysetting1").forEach((el) => {
      el.style.color = "#171719";
      el.style.background = "#ffffff";
    });

    document.querySelectorAll(".popup_wallpaper").forEach((el) => {
      el.style.background = "#eee";
      el.style.color = "#171719";
    });
    document.querySelectorAll(".popup_wallpaper_button").forEach((el) => {
      el.style.background = "#ffffff";
      el.style.color = "#171719";
    });

    app4.style.color = "#010101";
    app4_finger.style.color = "#010101";
    app4_home.style.color = "#010101";
    app4_theme.style.color = "#010101";
    app4_vesion.style.color = "#010101";
    app4animation.style.color = "#010101";
    app4main.style.color = "#010101";
    app4audio.style.color = "#010101";
    app4_icon.style.color = "#010101";
    wallpaper_option.style.color = "#010101";
    aod_option.style.color = "#010101";
    app4_lock_style.style.color = "#010101";
    document.getElementById("app4credits").style.color = "#010101";

    document.querySelectorAll(".nav").forEach((el) => {
      el.style.background = "#171719";
    });

    document.querySelector(".add-button").style.background = "#ffffff";
    document.querySelector(".add-button").style.color = "#000000";
    document.querySelectorAll(".controls").forEach((el) => {
      el.style.background = "#eaeaea";
    });
    document.querySelectorAll(".option").forEach((el) => {
      el.style.background = "#ffffff";
    });
    document.querySelectorAll(".lottie-box").forEach((el) => {
      el.style.background = "#ffffff";
    });

    document.querySelector(".input-group_text_less_is_more").style.background =
      "#ffffff";
    document.querySelector(".khaysetting3").style.background = "#ffffff";
    document.querySelector(".khaysetting5").style.background = "#ffffff";
    document.querySelector(".khaysetting4").style.background = "#ffffff";
  }
}

function showFingerPopup() {
  showPopup_open_close(app4_finger);

  btnWhite.addEventListener("click", handleBtnWhiteClick);
  btnBlue.addEventListener("click", handleBtnBlueClick);

  addLottiePreviewEvents();
}
function hideFingerPopup() {
  hidePopup_open_close(app4_finger);

  btnWhite.removeEventListener("click", handleBtnWhiteClick);
  btnBlue.removeEventListener("click", handleBtnBlueClick);

  removeLottiePreviewEvents();
}

const fingerprint_preview = document.getElementById("fingerprint_preview");
const btnWhite = document.getElementById("btn-white");
const btnBlue = document.getElementById("btn-blue");

fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
btnWhite.style.border = "4px solid #f65268";

function handleBtnWhiteClick() {
  fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
  fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
  btnWhite.classList.add("active");
  btnBlue.classList.remove("active");
  btnBlue.style.border = "4px solid rgb(225, 225, 225)";
  btnWhite.style.border = "4px solid #f65268";
  footerText.style.color = "rgb(255, 255, 255)";
  localStorage.setItem("btn_finger_saved", "btnWhite");
}

function handleBtnBlueClick() {
  fingerprint_preview.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  fingerprint.style.filter =
    "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
  btnWhite.style.border = "4px solid rgb(225, 225, 225)";
  btnBlue.style.border = "4px solid #f65268";
  footerText.style.color = "#6cd0ff";
  localStorage.setItem("btn_finger_saved", "btnBlue");
}

let lottieBoxes = [];

// Hàm đổi animation chính (không autoplay)
function changeLottieAnimation(newPath, newSpeed = 1) {
  if (animation) animation.destroy(); // Xóa animation cũ

  animation = lottie.loadAnimation({
    container: document.getElementById("lottie"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: newPath,
  });

  animation.setSpeed(newSpeed);

  // ✅ Lưu vào localStorage
  localStorage.setItem("selectedLottiePath", newPath);
  localStorage.setItem("selectedLottieSpeed", newSpeed);

  animation.addEventListener("DOMLoaded", () => {
    animation.goToAndStop(animation.totalFrames, true); // Dừng tại frame cuối
  });
}

function addLottiePreviewEvents() {
  const lottieBoxes = Array.from(document.querySelectorAll(".lottie-box"));

  lottieBoxes.forEach((box) => {
    const player = box.querySelector("lottie-player");
    const speed = parseFloat(box.getAttribute("data-speed")) || 1;

    player.setAttribute("loop", "true");

    const onReady = () => {
      player.setSpeed(speed);
      player.play();
    };

    if (player.shadowRoot?.querySelector("svg")) {
      onReady();
    } else {
      player.addEventListener("ready", onReady, { once: true });
    }

    box.addEventListener(
      "click",
      (box._clickHandler = () => {
        lottieBoxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
        const path = box.getAttribute("data-path");
        changeLottieAnimation(path, speed); // 👈 truyền path và speed vào
      })
    );
  });
}

// Tự động khởi động khi trang sẵn sàng

function showIconPopup() {
  showPopup_open_close(app4_icon);
}
function hideIconPopup() {
  hidePopup_open_close(app4_icon);
}

// ==-- ICON PACK FUNCTIONS WITH LOCALSTORAGE --==

function icon_originos() {
  localStorage.setItem("selected_icon_pack", "originos");
  updateIconBorder("originos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "105%");

  setIconAndBackgroundGradient(".box1", "originos_data/system_calculator.png");
  setIconAndBackgroundGradient(".box2", "originos_data/system_filemanager.png");
  setIconAndBackgroundGradient(".box3", "originos_data/system_music.png");
  setIconAndBackgroundGradient(".box4", "originos_data/system_settings.png");
  setIconAndBackgroundGradient(".box5", "originos_data/system_messages.png");
  setIconAndBackgroundGradient(".box6", "originos_data/system_photos.png");
  setIconAndBackgroundGradient(".box7", "originos_data/system_calendar.png");
  setIconAndBackgroundGradient(".box8", "originos_data/system_dialer.png");
  setIconAndBackgroundGradient(".box9", "originos_data/system_clock.png");
  setIconAndBackgroundGradient(".box10", "originos_data/system_compass.png");
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
}

function icon_hyperos() {
  localStorage.setItem("selected_icon_pack", "hyperos");
  updateIconBorder("hyperos_icon");
  document.documentElement.style.setProperty("--bg-size_img", "115%");

  setIconAndBackgroundGradient2(
    ".box1",
    "originos_data/hype_icon/system_calculator.png"
  );
  setIconAndBackgroundGradient2(
    ".box2",
    "originos_data/hype_icon/system_filemanager.png"
  );
  setIconAndBackgroundGradient2(
    ".box3",
    "originos_data/hype_icon/system_music.png"
  );
  setIconAndBackgroundGradient2(
    ".box4",
    "originos_data/hype_icon/system_settings.png"
  );
  setIconAndBackgroundGradient2(
    ".box5",
    "originos_data/hype_icon/system_messages.png"
  );
  setIconAndBackgroundGradient2(
    ".box6",
    "originos_data/hype_icon/system_photos.png"
  );
  setIconAndBackgroundGradient2(
    ".box7",
    "originos_data/hype_icon/system_calendar.png"
  );
  setIconAndBackgroundGradient2(
    ".box8",
    "originos_data/hype_icon/system_dialer.png"
  );
  setIconAndBackgroundGradient2(
    ".box9",
    "originos_data/hype_icon/system_clock.png"
  );
  setIconAndBackgroundGradient2(
    ".box10",
    "originos_data/hype_icon/system_compass.png"
  );
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
}

function icon_ios(e) {
  localStorage.setItem("selected_icon_pack", "ios");
  updateIconBorder("ios_icon");
  document.documentElement.style.setProperty("--bg-size_img", "115%");

  setIconAndBackgroundGradient(".box1", "originos_data/i_icon/calculator.png");
  setIconAndBackgroundGradient(".box2", "originos_data/i_icon/files.png");
  setIconAndBackgroundGradient(".box3", "originos_data/i_icon/music.png");
  setIconAndBackgroundGradient(".box4", "originos_data/i_icon/settings.png");
  setIconAndBackgroundGradient(".box5", "originos_data/i_icon/messages.png");
  setIconAndBackgroundGradient(".box6", "originos_data/i_icon/gallery.png");
  setIconAndBackgroundGradient(".box7", "originos_data/i_icon/calendar.png");
  setIconAndBackgroundGradient(".box8", "originos_data/i_icon/phone.png");
  setIconAndBackgroundGradient(".box9", "originos_data/i_icon/clock.png");
  setIconAndBackgroundGradient(".box10", "originos_data/i_icon/compass.png");
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
}

function icon_coloros() {
  localStorage.setItem("selected_icon_pack", "coloros");
  updateIconBorder("coloros_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  setIconAndBackgroundGradient(".box1", "originos_data/o_icon/calculator.png");
  setIconAndBackgroundGradient(".box2", "originos_data/o_icon/files.png");
  setIconAndBackgroundGradient(".box3", "originos_data/o_icon/music.png");
  setIconAndBackgroundGradient(".box4", "originos_data/o_icon/settings.png");
  setIconAndBackgroundGradient(".box5", "originos_data/o_icon/messages.png");
  setIconAndBackgroundGradient(".box6", "originos_data/o_icon/gallery.png");
  setIconAndBackgroundGradient(".box7", "originos_data/o_icon/calendar.png");
  setIconAndBackgroundGradient(".box8", "originos_data/o_icon/phone.png");
  setIconAndBackgroundGradient(".box9", "originos_data/o_icon/clock.png");
  setIconAndBackgroundGradient(".box10", "originos_data/o_icon/compass.png");
  slider.value = 20;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
}

const preview = document.getElementById("preview_icon");

function icon_oneui() {
  localStorage.setItem("selected_icon_pack", "oneui");
  updateIconBorder("oneui_icon");
  document.documentElement.style.setProperty("--bg-size_img", "100%");

  box1.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/calculator.png")`
  );
  box1.style.background = "#00000000";

  box2.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/files.png")`
  );
  box2.style.background = "#00000000";

  box3.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/music.png")`
  );
  box3.style.background = "#00000000";

  box4.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/settings.png")`
  );
  box4.style.background = "#00000000";

  box5.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/messages.png")`
  );
  box5.style.background = "#00000000";

  box6.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/gallery.png")`
  );
  box6.style.background = "#00000000";

  box7.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/calendar.png")`
  );
  box7.style.background = "#00000000";

  box8.style.setProperty(
    "--bg--originos",
    `url("originos_data/oui_icon/phone.png")`
  );
  box8.style.background = "#00000000";

  setIconAndBackgroundGradient(".box9", "originos_data/oui_icon/clock.png");
  setIconAndBackgroundGradient(".box10", "originos_data/oui_icon/compass.png");

  slider.value = 23;
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
  root.style.setProperty("--bg-border_radius", slider.value + "px");
}

// -- Shared helper to update border --
function updateIconBorder(activeId) {
  document.querySelectorAll(".box_icon").forEach((el) => {
    el.style.border = "4px solid gray";
  });
  const active = document.getElementById(activeId);
  if (active) active.style.border = "4px solid #f65268";
}

let pack = localStorage.getItem("selected_icon_pack");
// -- Restore icon pack when loading --
function restoreIconPack() {
  pack = localStorage.getItem("selected_icon_pack");
  if (pack === "originos") icon_originos();
  else if (pack === "hyperos") icon_hyperos();
  else if (pack === "ios") icon_ios();
  else if (pack === "coloros") icon_coloros();
  else if (pack === "oneui") icon_oneui();
}

const root = document.documentElement;
const slider = document.getElementById("radius_slider");

let value;

slider.addEventListener("input", () => {
  pack = localStorage.getItem("selected_icon_pack");
  if (pack === "oneui") {
    tb_system("Can't change the roundness of icons in One UI 7");
    slider.value = 23;
    return;
  }
  root.style.setProperty("--bg-border_radius", slider.value + "px");
  value = slider.value;
  preview.style.borderRadius = `${value}px`;
});

function setIconAndBackgroundGradient2(boxSelector, imageUrl) {
  const box = document.querySelector(boxSelector);
  if (!box) return;

  // Gán icon vào CSS biến
  box.style.setProperty("--bg--originos", `url("${imageUrl}")`);

  const img = new Image();
  img.crossOrigin = "anonymous"; // CORS: bắt buộc nếu ảnh từ CDN, GitHub...
  img.src = imageUrl;

  img.onload = () => {
    const w = img.width;
    const h = img.height;

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });
    ctx.drawImage(img, 0, 0);

    const middleY = Math.floor(h / 2);
    const leftX = Math.min(8, w - 1);
    const rightX = Math.max(w - 8, 0);

    try {
      const leftColorData = ctx.getImageData(leftX, middleY, 1, 1).data;
      const rightColorData = ctx.getImageData(rightX, middleY, 1, 1).data;

      const leftColor = `rgb(${leftColorData[0]}, ${leftColorData[1]}, ${leftColorData[2]})`;
      const rightColor = `rgb(${rightColorData[0]}, ${rightColorData[1]}, ${rightColorData[2]})`;

      box.style.background = `linear-gradient(to right, ${leftColor}, ${rightColor})`;
    } catch (e) {
      console.warn("getImageData error:", e);
      box.style.background = "#eaeaea"; // fallback
    }
  };
}

function setIconAndBackgroundGradient(boxSelector, imageUrl) {
  const box = document.querySelector(boxSelector);
  if (!box) return;

  // Set icon background
  box.style.setProperty("--bg--originos", `url("${imageUrl}")`);

  const img = new Image();
  img.crossOrigin = "anonymous"; // important for CORS
  img.src = imageUrl;

  img.onload = () => {
    const w = img.width;
    const h = img.height;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });
    ctx.drawImage(img, 0, 0);

    const centerX = Math.floor(w / 2);
    const topY = Math.min(8, h - 1);
    const bottomY = Math.max(h - 8, 0);

    try {
      const top = ctx.getImageData(centerX, topY, 1, 1).data;
      const bottom = ctx.getImageData(centerX, bottomY, 1, 1).data;

      const topColor = `rgb(${top[0]}, ${top[1]}, ${top[2]})`;
      const bottomColor = `rgb(${bottom[0]}, ${bottom[1]}, ${bottom[2]})`;

      box.style.background = `linear-gradient(to bottom, ${topColor}, ${bottomColor})`;
    } catch (e) {
      console.warn("Could not extract image data:", e);
      box.style.background = "#eaeaea"; // fallback
    }
  };
}

function removeAllUIEventListeners() {
  // Gỡ popup version
  vesion_setting.removeEventListener("click", showPopup_open_close(credits));
  back10.removeEventListener("click", handleHideVersion);

  khaysetting1_2.removeEventListener("click", handleShowCredits);
  back7.removeEventListener("click", handleHideCredits);

  wallpaper_btn.removeEventListener("click", handleOpenWallpaperPopup);
  wallpaper_btn2.removeEventListener("click", handleOpenWallpaperPopup);
  back4.removeEventListener("click", handleCloseWallpaperPopup);

  aod_btn.removeEventListener("click", handleOpenAODOption);
  back5.removeEventListener("click", handleCloseAODOption);

  lock_btn.removeEventListener("click", handleShowLockOption);
  back6.removeEventListener("click", handleHideLockOption);

  home_btn.removeEventListener("click", showHomeApp);
  back8.removeEventListener("click", hideHomeApp);

  finger.removeEventListener("click", showFingerPopup);
  back9.removeEventListener("click", hideFingerPopup);

  remove_pass_events();
  removeEventListeners_aod_preview();
}

// -- nofication --
const thanhS1 = document.querySelector(".thanh-status");
const thanhS2 = document.querySelector(".thanh-status2");
const lp2 = document.querySelector(".lp2");
const notificationcenter = document.querySelector(".left-text-tb");

let draggingS = false;
let isMoS = false;
let startYS = 0;
let startXS = 0;
let deltaYS = 0;
let deltaXS = 0;

function updateTransformS(y) {
  let y2 = y;
  if (y2 < -90) y2 = -90;
  if (y2 > 0) y2 = 0;
  //if (y < -50) y = -50;
  if (y > 0) y = 0;

  const scale = 1 + -y2 / 60;

  clock.style.transition = "all 0.2s";
  clock.style.transform = `translateX(calc(${-y2}px / 3)) translateY(${-y2}px) scale(${scale})`;
  lp2.style.transition = "all 0.1s";
  lp2.style.opacity = `${scale - 1} `;
  lp2.style.zIndex = 19999;

  thanhS1.style.transition = "none";
  thanhS1.style.transform = `translateY(${-y2}px)`;
}

thanhS1.addEventListener("touchstart", (e) => {
  if (!ison) return;

  isMoS = true;
  startYS = e.touches[0].clientY;
  startXS = e.touches[0].clientX;
  clock.classList.add("hien");
  notificationcenter.style.transform = "translateY(0px)";
});

thanhS1.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    if (!isMoS) return;
    deltaYS = startYS - e.touches[0].clientY;
    deltaXS = e.touches[0].clientX - startXS;
    updateTransformS(deltaYS);
  },
  {
    passive: false,
  }
);

thanhS1.addEventListener("touchend", () => {
  if (deltaYS < -70) monotification();
  else dongnotification();
  deltaYS = 0;
  deltaXS = 0;
  thanhS1.style.transform = ``;
});

thanhS1.addEventListener("mousedown", (e) => {
  if (!ison) return;

  deltaYS = 0;
  deltaXS = 0;
  startYS = 0;
  startXS = 0;

  isMoS = true;
  draggingS = true;

  startYS = e.clientY;
  startXS = e.clientX;
  clock.classList.add("hien");
  notificationcenter.style.transform = "translateY(0px)";
});

window.addEventListener("mousemove", (e) => {
  if (!draggingS || !isMoS) return;
  deltaYS = startYS - e.clientY;
  deltaXS = e.clientX - startXS;
  updateTransformS(deltaYS);
});

window.addEventListener("mouseup", () => {
  if (!draggingS || !isMoS) return;
  draggingS = false;
  if (deltaYS < -70) monotification();
  else dongnotification();
  deltaYS = 0;
  deltaXS = 0;
  thanhS1.style.transform = ``;
});

lp2.addEventListener("pointerup", () => {
  dongnotification();
});

function monotification() {
  clock.style.transition = "all 0.5s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
  clock.style.transform = `translateX(25px) translateY(50px) scale(calc(1 + 50 / 40))`;
  lp2.style.transition = "all 0s";
  notificationcenter.classList.add("open");
  lp2.style.opacity = `1`;
  lp2.style.zIndex = 19999;
  clock.classList.add("open");
  thanhS1.style.pointerEvents = "none";
}
function dongnotification() {
  clock.style.transition = "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
  clock.style.transform = `none`;
  lp2.style.transition = "all 0.3s";
  lp2.style.opacity = `0`;
  lp2.style.zIndex = 1;
  notificationcenter.style.transform = "translateY(-60px)";
  notificationcenter.classList.remove("open");
  clock.classList.remove("open");
  if (islock) clock.classList.remove("hien");
  thanhS1.style.pointerEvents = "auto";
}
function closePopup_noanim() {
  if (!currentOpeningBtn) return;
  hidePopup_open_close(app);

  currentOpeningBtn.style.transition = `all 0s`;
  clearTimeout(autoHideClickablesTimer);
  closing = true;
  setTimeout(() => {
    closing = false;
  }, 300);
  currentOpeningBtn.classList.remove("open");
  currentOpeningBtn.style.scale = `${scale_icon}%`;

  allApp.style.transition = `all 0s`;
  currentOpeningBtn.style.zIndex = "5";

  thanh.style.transform = "translateX(-50%)";
  thanh.classList.remove("open");
  lp.classList.remove("open");

  allApp.classList.remove("open");

  if (nav) {
    nav.style.transition = `all 0s`;
    nav.classList.remove("open");
  }
  isMo = false;

  currentOpeningBtn.classList.remove("hien");
  currentOpeningBtn = null;

  open_all_island();
}

const speedBoxes = document.querySelectorAll(".speed-box");
speedBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Bỏ class 'active' ở tất cả box
    speedBoxes.forEach((b) => b.classList.remove("active"));

    // Gắn class 'active' cho box được bấm
    box.classList.add("active");

    // Cập nhật biến tốc độ
    currentSpeed = parseFloat(box.dataset.speed);
    currentSpeed6 = 0.6 * currentSpeed;
    currentSpeed5 = 0.5 * currentSpeed;
    currentSpeed4 = 0.4 * currentSpeed;
    currentSpeed3 = 0.3 * currentSpeed;
    currentSpeed2 = 0.2 * currentSpeed;
    duration = 1.7 * currentSpeed;
    document.getElementById(
      "scaling-box"
    ).style.animation = `scaleUpDown ${duration}s ease-out infinite`;
  });
});

let animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "originos_data/1m8zg1YIac.json",
});
animation.setSpeed(2 * currentSpeed);
animation.goToAndStop(animation.totalFrames - 1, true);

const finger_print = lottie.loadAnimation({
  container: document.getElementById("unlock-btn2"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "originos_data/finger_print.json",
});
finger_print.setSpeed(currentSpeed);
finger_print.goToAndStop(animation.totalFrames - 1, true);

// battery
let battery_level = 100;
let charging = false;
const battery4 = document.querySelector(".battery-small2");
const battery_num = document.querySelector(".battery-num");

function updateBatteryInfo(battery) {
  battery_level = Math.round(battery.level * 100);
  charging = battery.charging;
  battery4.style.width = `calc(${battery_level}%)`;
  if (battery_level <= 20) battery4.style.background = "red";
  if (battery_level == 20) playmusic("originos_data/ui/LowBattery.ogg");
  if (battery_level > 20) battery4.style.background = "white";
  battery_num.textContent = `${battery_level}`;
  if (charging) {
    battery4.style.background = "#26bd44";
    playmusic("originos_data/ui/charge_full.ogg", volume_charge_volume);
  }
}

if ("getBattery" in navigator) {
  navigator.getBattery().then((battery) => {
    updateBatteryInfo(battery);

    battery.addEventListener("levelchange", () => updateBatteryInfo(battery));
    battery.addEventListener("chargingchange", () =>
      updateBatteryInfo(battery)
    );
  });
}

const row = document.querySelector(".button-row");
const items = row.querySelectorAll(".img-button");

function updateRotation() {
  const rowRect = row.getBoundingClientRect();
  const centerX = rowRect.left + rowRect.width / 2;

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const distance = itemCenter - centerX;

    const maxAngle = 80; // càng lớn xoay càng mạnh
    const maxDistance = rowRect.width / 1.3;
    const ratio = Math.max(-1, Math.min(1, distance / maxDistance));
    const angle = ratio * maxAngle;

    const scale = 1 - Math.abs(ratio) * 0.5;
    const z = Math.round((1 - Math.abs(ratio)) * 100);

    item.style.transform = `
    rotateY(${-angle}deg)
    scale(${scale})
    translateX(${-ratio * 80}px)`;
    item.style.zIndex = z;
  });
}

row.addEventListener("scroll", updateRotation);
window.addEventListener("load", updateRotation);
window.addEventListener("resize", updateRotation);

function removeWithFade(elementOrId, duration = 500) {
  // Nếu là chuỗi (id), chuyển thành element
  let element =
    typeof elementOrId === "string"
      ? document.getElementById(elementOrId)
      : elementOrId;

  if (!element) return;

  // Thêm transition nếu chưa có
  element.style.transition = `opacity ${duration}ms ease`;
  element.style.opacity = "0";

  // Xóa khỏi DOM sau khi hoàn tất animation
  setTimeout(() => {
    if (element && element.parentNode) {
      element.remove();
    }
  }, duration);
}

const widthSlider_hws_phone = document.getElementById("widthSlider_hws_phone");
const heightSlider_hws_phone = document.getElementById(
  "heightSlider_hws_phone"
);
const radiusSlider_hws_phone = document.getElementById(
  "radiusSlider_hws_phone"
);
const scaleSlider_hws_phone = document.getElementById("scaleSlider_hws_phone");
const colorPicker_hws_phone = document.getElementById("colorPicker_hws_phone");

widthSlider_hws_phone.addEventListener("input", () => {
  root.style.setProperty(
    "--bg--size_width_phone",
    `${widthSlider_hws_phone.value}px`
  );
  document.getElementById("widthValue_hws_phone").textContent =
    widthSlider_hws_phone.value;
});

heightSlider_hws_phone.addEventListener("input", () => {
  root.style.setProperty(
    "--bg--size_height_phone",
    `${heightSlider_hws_phone.value}px`
  );
  document.getElementById("heightValue_hws_phone").textContent =
    heightSlider_hws_phone.value;
});

radiusSlider_hws_phone.addEventListener("input", () => {
  root.style.setProperty(
    "--bg--border_radius_phone",
    `${radiusSlider_hws_phone.value}px`
  );
  document.getElementById("radiusValue_hws_phone").textContent =
    radiusSlider_hws_phone.value;
  border_radius_phone = getComputedStyle(root2)
    .getPropertyValue("--bg--border_radius_phone")
    .trim();
  wallpaper.style.borderRadius = border_radius_phone;
  if (localStorage.getItem("btn1_2_saved") == 0)
    wallpaper_lock_borderRadius = border_radius_phone;
});

scaleSlider_hws_phone.addEventListener("input", () => {
  root.style.setProperty("--bg--scale_phone", scaleSlider_hws_phone.value);
  document.getElementById("scaleValue_hws_phone").textContent = parseFloat(
    scaleSlider_hws_phone.value
  ).toFixed(2);
});

const translateYSlider_hws_phone = document.getElementById(
  "translateYSlider_hws_phone"
);

// Cập nhật giá trị hiển thị ban đầu
document.getElementById("scaleValue_hws_phone").textContent =
  scaleSlider_hws_phone.value;
document.getElementById("translateYValue_hws_phone").textContent =
  translateYSlider_hws_phone.value;

// Hàm cập nhật transform cho phone
function updatePhoneTransform() {
  const scale = scaleSlider_hws_phone.value;
  const translateY = translateYSlider_hws_phone.value;
  phone.style.transform = `translateY(${translateY}px) scale(${scale})`;
  document.querySelector(
    ".area-thanh"
  ).style.transform = `translateY(${translateY}px) scale(${scale})`;
}

// Gắn sự kiện
scaleSlider_hws_phone.addEventListener("input", () => {
  document.getElementById("scaleValue_hws_phone").textContent =
    scaleSlider_hws_phone.value;
  updatePhoneTransform();
});

translateYSlider_hws_phone.addEventListener("input", () => {
  document.getElementById("translateYValue_hws_phone").textContent =
    translateYSlider_hws_phone.value;
  updatePhoneTransform();
});
