(function () {
  "use strict";

  const storageKey = "cedeno-lang";
  const supportedLanguages = new Set(["en", "de"]);
  const languageButtons = document.querySelectorAll("[data-lang]");
  const languageBlocks = document.querySelectorAll("[data-lang-content]");

  function readLanguage() {
    try {
      const storedLanguage = localStorage.getItem(storageKey);
      return supportedLanguages.has(storedLanguage) ? storedLanguage : "en";
    } catch (error) {
      return "en";
    }
  }

  function applyLanguage(language) {
    const nextLanguage = supportedLanguages.has(language) ? language : "en";
    document.documentElement.lang = nextLanguage;
    document.title = document.body.dataset[`title${nextLanguage.toUpperCase()}`] || document.title;

    languageBlocks.forEach((block) => {
      const isActive = block.dataset.langContent === nextLanguage;
      block.hidden = !isActive;
      block.setAttribute("aria-hidden", String(!isActive));
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.lang === nextLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    try {
      localStorage.setItem(storageKey, nextLanguage);
    } catch (error) {
      // The legal pages remain usable when browser storage is unavailable.
    }
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  applyLanguage(readLanguage());
})();
