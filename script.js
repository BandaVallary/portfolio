let toggleButton;
let app;
let hamburger;

function declare() {
  toggleButton = document.querySelector(".toggle");
  app = document.querySelector(".big-wrapper");
  hamburger = document.querySelector(".hamburger");
}
const mainApp = document.querySelector(".main");

// add Event Listener. Upon clicking, we want to see the landing page with the applied themes
//   add to html
// dark is false hence is light theme
declare();
let dark = false; // This variable tells us whether the state of the class
const toggleAnimation = function () {
  dark = !dark;
  let clone = app.cloneNode(true);

  if (dark) {
    app.classList.remove("light");
    app.classList.add("dark");
  } else {
    app.classList.remove("dark");
    app.classList.add("light");
  }
  clone.classList.add("copy");
  mainApp.appendChild(clone);
  clone.addEventListener("animationend", () => {
    app.classList.remove();
    clone.classList.remove("copy"); // in this step, we remove the cloned landing page and copy class so that the landing page remains in the current state
    declare();
  });
};

toggleButton.addEventListener("click", toggleAnimation);

hamburger.addEventListener("click", () => app.classList.toggle("active"));
