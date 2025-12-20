let display_phone = document.getElementById("display_phone");

function append_phone(val) {
  if (display_phone.innerText === " ") {
    display_phone.innerText = val;
  } else {
    display_phone.innerText += val;
  }
}

function backspace_phone() {
  let text = display_phone.innerText;
  if (text.length > 1) {
    display_phone.innerText = text.slice(0, -1);
  } else {
    display_phone.innerText = " ";
  }
}

function call_phone() {
  let num = display_phone.innerText;
  display_phone.innerText = " ";
  if (num == "*#0*#") showPopup_open_close("control_panel_hws_phone", "block");
  else if (num != "") tb_system("Call failed: No SIM");
  if (num == "") tb_system("Enter numbers");
}

function tb_system(message) {
  const toast = document.getElementById("systemToast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(tb_system._timeout); // Clear if multiple calls
  tb_system._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Hiển thị trong 3 giây
}
