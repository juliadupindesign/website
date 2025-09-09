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
    aboutText: `
      <p>I'm a freelance graphic designer based in Toulouse, creating print and digital materials for museums, nonprofits, and public institutions. Posters, visual identities, programs, brochures, and more — I help you inform, engage, and reach your audience through clear and thoughtful design.</p>
      <p>I have a PhD in Ecology and Evolutionary Biology, a Professional Certificate in Museology, and specialized training in Data Science and Graphic Design, allowing me to combine scientific insight with creative communication for impactful results.</p>
    `,
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
          "A brochure to complement an exhibition about the IDEFIX rover.",
          "This brochure has an interactive aspect: once one starts opening the brochure, one incidentally helps IDEFIX open its solar panels."
        ],
        links: [
          "https://cnes.fr/actualites/idefix-passage-de-relai-japon",
          "https://cnes.fr/projets/mmx</"
          ],
        type: "Personal project"
      },
      greenhouse: {
        title: "Greenhouse Project",
        intro: "Short introduction for Greenhouse...",
        links: "More details about Greenhouse...",
        type: "Personal project"
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

// Helper function to access nested keys in translations
function getNestedTranslation(obj, keyString) {
  return keyString.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

// 2. Apply translations
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");

    // Use helper to get nested key, e.g., projects.idefix.intro
    let value = getNestedTranslation(translations[lang], key);

    if (Array.isArray(value)) {
      // Check if the key is a project array with intro, links, type
      if (key.includes("projects")) {
        const [intro, links, type] = value; // assuming your array is [introLines, linksLines, typeText]
    
        el.innerHTML = `
          <div class="project-intro">${intro.join('<br>')}</div>
          <div class="project-links">${links.join('<br>')}</div>
          <div class="project-type">${type}</div>
        `;
      } else {
        el.innerHTML = value.join('<br>');
      }
    } else if (value) {
      el.innerHTML = value;
    }
  });

  // Elements with placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getNestedTranslation(translations[lang], key);
    if (value) el.setAttribute("placeholder", value);
  });

  // Elements with value (like <input type="button">)
  document.querySelectorAll("[data-i18n-value]").forEach(el => {
    const key = el.getAttribute("data-i18n-value");
    const value = getNestedTranslation(translations[lang], key);
    if (value) el.setAttribute("value", value);
  });

  // Save preference
  localStorage.setItem("lang", lang);
}

// 3. Load saved language or default to EN
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});
