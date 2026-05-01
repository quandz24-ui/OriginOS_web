setTimeout(() => {
  finger_print.stop();
  const loading = document.getElementById("loading-screen");
  loading.style.opacity = "0";
  setTimeout(() => {
    removeWithFade(loading);

    loading.style.display = "none";
    finger_print.play();

    const el = document.getElementById("lolhaha");
    if (!el || el.textContent.trim() !== "TikTok: @sungsamtech - @._naq.") {
      localStorage.clear();
      sessionStorage.clear();
      location.reload();
    }
  }, 300);
  const el = document.getElementById("lolhaha");
  if (!el || el.textContent.trim() !== "TikTok: @sungsamtech - @._naq.") {
    localStorage.clear();
    sessionStorage.clear();
    location.reload();
  }
}, 0); // 5 giây

const box0_setup = document.getElementById("box0_setup");
const box1_setup = document.getElementById("box1_setup");
const box2_setup = document.getElementById("box2_setup");
const clicke_setup = document.getElementById("click_setup");
const logo_setup = document.getElementById("originos_logo_setup");
const notes_setup = document.getElementById("screen_notes_setup");
const disagreeBtn_setup = document.getElementById("btn_disagree_setup");

function startAnimation_setup() {
  box0_setup.classList.add("anim");
  box1_setup.classList.add("anim");
  box2_setup.classList.add("anim");
  clicke_setup.style.transition = "all 0.3s";
  clicke_setup.style.opacity = 0;
  logo_setup.style.transition = "all 0.3s";
  logo_setup.style.opacity = 0;
  notes_setup.style.transition =
    "all 0.7s cubic-bezier(0.77, -0.1, 0.79, -0.52)";
  notes_setup.style.opacity = 1;
}

function resetAnimation_setup() {
  box0_setup.classList.remove("anim");
  box1_setup.classList.remove("anim");
  box2_setup.classList.remove("anim");
  clicke_setup.style.transition =
    "all 0.7s cubic-bezier(0.77, -0.1, 0.79, -0.52)";
  clicke_setup.style.opacity = 1;
  logo_setup.style.transition =
    "all 0.7s cubic-bezier(0.77, -0.1, 0.79, -0.52)";
  logo_setup.style.opacity = 1;
  notes_setup.style.transition = "all 0.3s";
  notes_setup.style.opacity = 0;
}

// Gắn sự kiện mặc định khi trang tải
clicke_setup.addEventListener("click", startAnimation_setup);
disagreeBtn_setup.addEventListener("click", resetAnimation_setup);

// Hàm gỡ bỏ event listener
function removeEventListener_setup() {
  clicke_setup.removeEventListener("click", startAnimation_setup);
  disagreeBtn_setup.removeEventListener("click", resetAnimation_setup);
}

setTimeout(() => {
  if (localStorage.getItem("hide_wallpaper_saved")) {
    document.getElementById("Hide-wallPaper").classList.add("active");
    hide_wallpaper = 1;

    wallpaper_lock_off_opacity = 0;
    wallpaper_lock_off_height = wallpaper_lock_height;
    wallpaper_lock_off_scale = wallpaper_lock_scale;
    wallpaper_lock_off_borderRadius = wallpaper_lock_borderRadius;
    wallpaper_lock_off_transform = wallpaper_lock_transform;

    dateText_style_transform = "translateX(-50%) scale(0.9) translateY(10px)";
    lockclock_style_transform = "scale(0.85) translateY(60px)";

    document.getElementById("wallpaper_aod2").classList.add("hidden2");
  }

  if (localStorage.getItem("always_on_displays_saved") == 0) {
    document.getElementById("Alway-on-displays").classList.remove("active");
    always_on_displays = 0;

    document.getElementById("setting-item-hide-wall").style.filter =
      " brightness(0.7)";
    document.getElementById("setting-item-hide-wall").style.pointerEvents =
      "none";

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

  if (localStorage.getItem("color_lock_saved")) {
    clock_preview.style.color = localStorage.getItem("color_lock_saved");
    lockclock.style.color = localStorage.getItem("color_lock_saved");
    dateText.style.color = localStorage.getItem("color_lock_saved");
    date_preview.style.color = localStorage.getItem("color_lock_saved");
  }

  const savedSize = localStorage.getItem("fontSize");
  if (savedSize) {
    clock_preview.style.fontSize = `${savedSize}px`;
    lockclock.style.fontSize = `${savedSize}px`;
    sizeSlider.value = savedSize;
  }

  const saved_btn = localStorage.getItem("btn1_2_saved");
  if (saved_btn != null) {
    if (saved_btn == 1) {
      handleBtn1Click();
      wallpaper_lock_height = 70; //%

      wallpaper_lock_scale = 80; //%

      wallpaper_lock_borderRadius = 15; //px
      wallpaper_lock_opacity = 1;
      wallpaper_lock_transform = "translateY(250px)";
      document.getElementById("btn1").style.border = "4px solid #f65268";
      document.getElementById("btn1").style.boxShadow =
        "0 0 10px rgba(246, 82, 104, 0.5)";
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
    } else {
      handleBtn2Click();
      wallpaper_lock_height = 100; //%

      wallpaper_lock_scale = 100; //%

      wallpaper_lock_borderRadius = 50; //px
      wallpaper_lock_opacity = 1;
      wallpaper_lock_transform = "translateY(0px)";
      document.getElementById("btn2").style.border = "4px solid #f65268";
      document.getElementById("btn2").style.boxShadow =
        "0 0 10px rgba(246, 82, 104, 0.5)";
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

      wallpaper.style.transition =
        "all 0.4s cubic-bezier(0.23, 0.55, 0.54, 0.97)";
      wallpaper.style.height = `${wallpaper_lock_height}%`;
      wallpaper.style.scale = `${wallpaper_lock_scale}%`;
      wallpaper.style.borderRadius = `${wallpaper_lock_borderRadius}px`;
      wallpaper.style.opacity = 1;

      wallpaper.style.transform = wallpaper_lock_transform;
    }
  }

  scale_icon = localStorage.getItem("scale_icon_saved");

  if (scale_icon) {
    for (let i = 1; i <= 11; i++) {
      boxes[`box${i}`].style.scale = `${scale_icon}%`;
    }
    document.querySelectorAll(".scale-button").forEach((el) => {
      el.classList.remove("active");
    });
    document
      .getElementById(`scale-button${scale_icon}`)
      .classList.add("active");
  }

  const savedFinger = localStorage.getItem("btn_finger_saved");

  if (savedFinger === "btnWhite") {
    fingerprint_preview.style.filter = "brightness(1000%) grayscale(100%)";
    fingerprint.style.filter = "brightness(1000%) grayscale(100%)";
    btnWhite.classList.add("active");
    btnBlue.classList.remove("active");
    btnBlue.style.border = "4px solid rgb(225, 225, 225)";
    btnWhite.style.border = "4px solid #f65268";
  } else if (savedFinger === "btnBlue") {
    fingerprint_preview.style.filter =
      "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
    fingerprint.style.filter =
      "brightness(0) saturate(100%) invert(72%) sepia(35%) saturate(1172%) hue-rotate(174deg) brightness(104%) contrast(104%)";
    btnWhite.classList.remove("active");
    btnBlue.classList.add("active");
    btnWhite.style.border = "4px solid rgb(225, 225, 225)";
    footerText.style.color = "#6cd0ff";
    btnBlue.style.border = "4px solid #f65268";
  }

  const savedDockBar = localStorage.getItem("dock_bar_saved");

  if (localStorage.getItem("dock_bar_saved")) {
    document.getElementById("dock-bar").classList.remove("active");
    document.querySelector(".khayapp").style.opacity = 0;
  }

  if (localStorage.getItem("blur_App_saved")) {
    lp.style.filter = "blur(20px)";
    lp.style.display = "flex";
    document.getElementById("blurApp").classList.add("active");
  }

  if (localStorage.getItem("dark_mode_saved")) {
    document.getElementById("dark-mode").classList.add("active");
    dark_mode = 1;
    set_dark_mode(localStorage.getItem("dark_mode_saved"));
  } else {
    set_dark_mode(0);
    dark_mode = 0;
    document.getElementById("dark-mode").classList.remove("active");
  }

  en_language();
}, 300);

restoreSettings_finger_pass();

window.addEventListener("DOMContentLoaded", () => {
  const savedFont = localStorage.getItem("font_lock_saved");
  const savedMin = localStorage.getItem("font_min_lock_saved");
  const savedMax = localStorage.getItem("font_max_lock_saved");
  const savedSize = localStorage.getItem("fontSize");

  restoreIconPack();

  if (savedFont) {
    clock_preview.style.fontFamily = savedFont;
    lockclock.style.fontFamily = savedFont;
  }

  if (savedMin && savedMax) {
    sizeSlider.min = savedMin;
    sizeSlider.max = savedMax;
  }

  if (savedSize) {
    sizeSlider.value = savedSize;
    clock_preview.style.fontSize = `${savedSize}px`;
    lockclock.style.fontSize = `${savedSize}px`;
  }

  const savedWeight = localStorage.getItem("font_weight_lock");
  if (savedWeight) {
    clock_preview.style.fontWeight = savedWeight;
    lockclock.style.fontWeight = savedWeight;
  }

  const lockscreenColor = localStorage.getItem("lockscreenColor");

  if (lockscreenColor) {
    phone_lock_background = lockscreenColor;
    lock_preview.style.background = phone_lock_background;
    phone.style.background = phone_lock_background;

    const matches = phone_lock_background.match(/rgb\((\d+), (\d+), (\d+)\)/g);
    if (!matches || matches.length === 0) return "#ffffff";

    const lastRGB = matches[matches.length - 1];

    updateWallpaperBorderColor(getReadableColor(lastRGB), lastRGB);
  }

  const savedBorder = localStorage.getItem("wallpaper_border");
  const savedBorderColor = localStorage.getItem("wallpaper_border_color");

  if (savedBorder) {
    wallpaper_border = savedBorder;

    if (savedBorderColor) {
      updateWallpaperBorderColor(
        getReadableColor(savedBorderColor),
        savedBorderColor
      );
    }

    applyLockscreenLayout(wallpaper_border);
  }

  // Khôi phục ảnh AOD và display
  const current_wallpaper_lock_saved = localStorage.getItem(
    "current_wallpaper_lock"
  );
  if (current_wallpaper_lock_saved) {
    current_wallpaper_lock = current_wallpaper_lock_saved;
    console.log(
      "💾 Đã khôi phục current_wallpaper_lock:",
      current_wallpaper_lock
    );
  }

  const savedDisplay_aod = localStorage.getItem("wallpaper_aod2_display");
  const savedOpacity_aod = localStorage.getItem("wallpaper_aod2_opacity");

  if (savedDisplay_aod) {
    wallpaper_aod2.style.display = savedDisplay_aod;
  }
  if (savedOpacity_aod) {
    wallpaper_aod2.style.opacity = savedOpacity_aod;
    display_wallpaper_for_show_aod_img = savedOpacity_aod;
  }

  // Khôi phục trạng thái active cho nút đã chọn
  document.querySelectorAll(".aod_preview_screen").forEach((el) => {
    el.classList.remove("active");
    const lockAttr = el.getAttribute("current_wallpaper_lock");
    if (lockAttr === current_wallpaper_lock_saved) {
      el.classList.add("active");
    }
  });

  const savedPath = localStorage.getItem("selectedLottiePath");
  const savedSpeed =
    parseFloat(localStorage.getItem("selectedLottieSpeed")) || 1;

  if (savedPath) {
    const target = [...document.querySelectorAll(".lottie-box")].find(
      (box) => box.getAttribute("data-path") === savedPath
    );
    if (target) target.classList.add("active");

    changeLottieAnimation(savedPath, savedSpeed);
  }

  const savedVol = parseFloat(localStorage.getItem("volume_all_volume"));
  if (!isNaN(savedVol)) {
    volume_all_volume = savedVol;
    slider_volume.value = savedVol;
  }

  volume_unlock_volume =
    parseFloat(localStorage.getItem("volume_unlock_volume")) || 1;
  volume_charge_volume =
    parseFloat(localStorage.getItem("volume_charge_volume")) || 1;

  if (volume_unlock_volume > 0) toggle_unlock_volume.classList.add("active");
  if (volume_charge_volume > 0) toggle_charge_volume.classList.add("active");
});
