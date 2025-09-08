// 1. Define translations

const translations = {
  en: {
    title: "Julia Dupin Design website",
    logo: "Julia Dupin Design",
    home: "Home",
    about: "About",
    skills: "Skills",
    work: "Work",
    contact: "Contact",
    welcome: "Hi,<br>I'm <span class='home__title-color'>Julia</span><br> Graphic Designer",
    contactButton: "Contact",
    aboutSubtitle: "I'm Julia",
    aboutText: "I'm a freelance graphic designer based in Toulouse, creating print and digital materials for museums, nonprofits, and public institutions. Posters, visual identities, programs, brochures, and more — I help you inform, engage, and reach your audience through clear and thoughtful design.\n\nI have a PhD in Ecology and Evolutionary Biology, a Professional Certificate in Museology, and specialized training in Data Science and Graphic Design, allowing me to combine scientific insight with creative communication for impactful results.",
    skillsSubtitle: "Professional Skills",
    skillsText: `
      <ul class="skills-list">
        <li>🎨 Vector Graphics (Inkscape, Adobe Illustrator)</li>
        <li>🖌️ Image Editing (GIMP, Adobe Photoshop)</li>
        <li>📐 Layout & Typography (Scribus, Canva)</li>
        <li>💻 Programming & Data (Python, R programming, Git (GitHub))</li>
        <li>💡 Soft skills: creativity, professionalism, mentoring/supervision, professional communication, organization, teamwork, independence, problem solving, empathy and active listening, time management</li>
      </ul>
    `,
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    submit: "Send",
    projects: {
      idefix: {
        title: "Idefix rover",
        intro: [
          "This is a personal project.",
          "A brochure for an exhibition about the IDEFIX rover, with information on both the IDEFIX rover and the mission it is part of (MMX mission).",
          "The brochure has an interactive aspect: once one starts opening the brochure, one incidentally helps IDEFIX open its solar panels. All text comes from the website of the CNES."
          ]
      },
      greenhouse: {
        title: "Greenhouse Project",
        intro: "Short introduction for Greenhouse...",
        more: "More details about Greenhouse..."
  }
}
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
    aboutSubtitle: "Je suis Julia",
    aboutText: "description en français...",
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
