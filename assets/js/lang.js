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
    submit: "Send",
    projects_title: "Projects",
    project1_title: "Project 1",
    project1_desc: "Detailed description of project 1 in English...",
    project2_title: "Project 2",
    project2_desc: "Detailed description of project 2 in English...",
    project3_title: "Project 3",
    project3_desc: "Detailed description of project 3 in English...",
    project4_title: "Project 4",
    project4_desc: "Detailed description of project 4 in English...",
    project5_title: "Project 5",
    project5_desc: "Detailed description of project 5 in English...",
    project6_title: "Project 6",
    project6_desc: "Detailed description of project 6 in English..."
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
    submit: "Envoyer",
    projects_title: "Projets",
    project1_title: "Projet 1",
    project1_desc: "Description détaillée du projet 1 en français...",
    project2_title: "Projet 2",
    project2_desc: "Description détaillée du projet 2 en français...",
    project3_title: "Projet 3",
    project3_desc: "Description détaillée du projet 3 en français...",
    project4_title: "Projet 4",
    project4_desc: "Description détaillée du projet 4 en français...",
    project5_title: "Projet 5",
    project5_desc: "Description détaillée du projet 5 en français...",
    project6_title: "Projet 6",
    project6_desc: "Description détaillée du projet 6 en français..."
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
