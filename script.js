function btn(target) {
  const receptor = document.querySelector(".receptor");
  receptor.value += target.value;
}

function equal() {
  const receptor = document.querySelector(".receptor");

  receptor.value = eval(receptor.value);
}

function clearInput() {
  const receptor = document.querySelector(".receptor");
  receptor.value = "";
}

function del() {
  const receptor = document.querySelector(".receptor");
  receptor.value = receptor.value.slice(0, -1);
}

// Change Theme
let themeSwitch = false;
function btnTheme() {
  themeSwitch = !themeSwitch;
  const themeChanger = document.querySelector(".themeChanger");
  themeChanger.style.right = themeSwitch ? "50px" : "0px";
  themeChanger.style.zIndex = themeSwitch ? "1" : "-1";

  //   themeIcon.style.rotate = themeSwitch ? "180deg" : "0deg";
  themeIcon.style.transform = themeSwitch ? "scaleX(-1)" : "scaleX(1)";
}

function radioInputDark() {
  const stylesheet = document.querySelector("#stylesheet");
  localStorage.setItem("theme", "darkMode-style.css");
  stylesheet.href = localStorage.getItem("theme");
}
function radioInputDefault() {
  const stylesheet = document.querySelector("#stylesheet");
  localStorage.setItem("theme", "style.css");
  stylesheet.href = localStorage.getItem("theme");
}
window.onload = () => {
  const stylesheet = document.querySelector("#stylesheet");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    stylesheet.href = savedTheme;
  }
};
// / Change Theme
