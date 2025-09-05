// 1. Define translations

const translations = {
  en: {
    title: "Portfolio website complete",
    logo: "Marlon",
    home: "Home",
    about: "About",
    skills: "Skills",
    work: "Work",
    contact: "Contact",
    welcome: "Hi,<br>I'am <span class='home__title-color'>Marlon</span><br> Web Designer",
    contactButton: "Contact",
    aboutSubtitle: "I'm Marlon",
    aboutText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit...",
    skillsSubtitle: "Professional Skills",
    skillsText: "Lorem ipsum dolor sit...",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    submit: "Send"
  },
  fr: {
    title: "Site web portfolio complet",
    logo: "Marlon",
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    work: "Travaux",
    contact: "Contact",
    welcome: "Salut,<br>Je suis <span class='home__title-color'>Marlon</span><br> Web Designer",
    contactButton: "Contact",
    aboutSubtitle: "Je suis Marlon",
    aboutText: "Lorem ipsum dolor sit amet, description en français...",
    skillsSubtitle: "Compétences professionnelles",
    skillsText: "Lorem ipsum dolor en français...",
    labelName: "Nom",
    labelEmail: "Email",
    labelMessage: "Message",
    submit: "Envoyer"
  }
};

// 2. Apply translations
function setLanguage(lang) {
  // Elements with text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Elements with placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Elements with value (like <input type="button">)
  document.querySelectorAll("[data-i18n-value]").forEach(el => {
    const key = el.getAttribute("data-i18n-value");
    if (translations[lang][key]) {
      el.setAttribute("value", translations[lang][key]);
    }
  });

  // Save preference
  localStorage.setItem("lang", lang);
}

// 3. Load saved language or default to EN
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});
