import { themeSlider } from "./dom-query";

function toggleDarkMode() {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
    } else if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.add("light")
      }
    }
  }

let changeDisplayedTheme = () => {
    themeSlider.addEventListener('click', toggleDarkMode);
    console.log('works')
};

export {
    toggleDarkMode,
    changeDisplayedTheme
}