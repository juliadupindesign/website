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
        title: "Idefix rover brochure",
        intro: [
          "A brochure to complement an exhibition about the IDEFIX rover.",
          "This brochure has an interactive aspect: once one starts opening the brochure, one incidentally helps IDEFIX open its solar panels."
        ],
        links: [
			'<a href="https://cnes.fr/actualites/idefix-passage-de-relai-japon" target="_blank">CNES article on IDEFIX</a>',
			'<a href="https://cnes.fr/projets/mmx" target="_blank">CNES MMX mission page</a>'
          ],
        type: "Personal project"
      },
      greenhouse: {
        title: "Carnivorous plants greenhouse brochure",
        intro: [
			"The idea for this brochure came after a visit to the greenhouses at the Museum of natural history of Toulouse.",
			"The variety of plants in the greenhouse deserved a brochure that the visitor could take with them with extra information on all different plant genera.",
			"My background in biology, specifically botany, made this project very dear to me."
		],
        links: [
			'<a href="https://museum.toulouse-metropole.fr/le-jardin-botanique/" target="_blank">Botanical garden</a>',
			'<a href="https://jardin-botanique.univ-tlse3.fr/" target="_blank">Plant information</a>'
		],
        type: "Personal project"
      },
      graines: {
        title: "Seed dispersal banner",
        intro: [
			"This is a reimagined design for a banner for a traveling exposition (named Graines voyageuses au long cours) developed by the Museum of natural history of Toulouse.",
			"I used many of the freely available images at Wikimedia from the Museum collections.",
			"This images became part of the banner and also allowed me to develop the color palette for this whole work."
		],
        links: [],   // empty array if no links
        type: "Personal project"
      },
	  fruitposter: {
        title: "Fruit types poster",
        intro: [
			"This is one of two scientific posters that resulted from the my postdoctoral MSCA project named Fruitful.",
			"The idea was to present this poster to the general public and use them as extra material to explain differences in fruit types.",
			"This Evolutionary Biology project lasted from 2019 to 2022"
		],
        links: [
			'<a href="https://cordis.europa.eu/project/id/842234" target="_blank">Fruitful research project description</a>'
		],
        type: "Commissioned work"
      },
	  seeddispersal: {
        title: "Seed dispersal poster",
        intro: [
			"This is the second scientific poster that resulted from the my postdoctoral MSCA project named Fruitful.",
			"The idea was to present this poster to the general public and use them as extra material to explain the different ways seeds are dispersed.",
			"This Evolutionary Biology project lasted from 2019 to 2022"
		],
        links: [
			'<a href="https://cordis.europa.eu/project/id/842234" target="_blank">Fruitful research project description</a>'
		],
        type: "Commissioned work"
      },
	  lard: {
        title: "LARD group logo",
        intro: [
			"Logo design for a working group in the field of aerospace engineering.",
			"This logo (which will be used exclusively for internal communication) is a play between the group's acronym and its goal, assess landing sites for a space rover."
		],
        links: [],   // empty array if no links
        type: "Commissioned work"
      },
	  unepatte: {
        title: "Animal shelter logo",
        intro: [
			"To develop my portfolio I contacted non-profit organizations with new propositions for their logos and associated images.",
			"This organization works mostly with cats, and their current logo also had a drawing of a cat.", 
			"My main goal was to simplify the logo, and I keep their original color palette.",
			"This work was not implemented by the organization."
		],
        links: [],   // empty array if no links
        type: "Personal project"
      },
	  flute: {
        title: "Music school flyer",
        intro: [
			"This was a personal project to develop a logo, business cards and flyers for a small company as an exercise.",
			"With that goal in mind I created a fake music school - named it, created a logo, a color palette, business cards, and flyers."
		],
        links: [],   // empty array if no links
        type: "Personal project"
      }
    }
  },
  fr: {
    title: "Julia Dupin Design website",
    logo: "Julia Dupin Design",
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    work: "Travaux",
    contact: "Contact",
    welcome: "Salut,<br>Je suis <span class='home__title-color'>Julia</span><br> Graphiste",
    contactButton: "Contact",
    aboutSubtitle: "Je suis Julia",
	aboutText: `
	  <p>Je suis graphiste indépendante basée à Toulouse, spécialisée dans la création de supports imprimés et numériques pour les musées, associations et institutions publiques. Affiches, identités visuelles, programmes, brochures, et plus encore — je vous aide à informer, engager et atteindre votre public grâce à un design clair et réfléchi.</p>
	  <p>Je possède un doctorat en écologie et biologie évolutive, un certificat professionnel en muséologie, ainsi qu’une formation spécialisée en Data Science et en design graphique, ce qui me permet de combiner expertise scientifique et communication créative pour des résultats percutants.</p>
	`,
	skillsText: `
	  <ul class="skills-list">
		<li>🎨 Graphisme vectoriel (Inkscape, Adobe Illustrator)</li>
		<li>🖌️ Retouche d’images (GIMP, Adobe Photoshop)</li>
		<li>📐 Mise en page et typographie (Scribus, Canva)</li>
		<li>💻 Programmation et données (Python, R programming, Git (GitHub))</li>
		<li>💡 Compétences transversales : créativité, professionnalisme, mentorat/supervision, communication professionnelle, organisation, travail en équipe, autonomie, résolution de problèmes, empathie et écoute active, gestion du temps</li>
	  </ul>
	`,
    labelName: "Nom",
    labelEmail: "Email",
    labelMessage: "Message",
    submit: "Envoyer",
    projects: {
		idefix: {
		  title: "Brochure du rover IDEFIX",
		  intro: [
			"Une brochure pour compléter une exposition sur le rover IDEFIX.",
			"Cette brochure a un aspect interactif : lorsqu'on commence à l’ouvrir, on aide par inadvertance IDEFIX à déployer ses panneaux solaires."
		  ],
		  links: [
			'<a href="https://cnes.fr/actualites/idefix-passage-de-relai-japon" target="_blank">Article CNES sur IDEFIX</a>',
			'<a href="https://cnes.fr/projets/mmx" target="_blank">Page CNES sur la mission MMX</a>'
		  ],
		  type: "Projet personnel"
		},

		greenhouse: {
		  title: "Brochure serre de plantes carnivores",
		  intro: [
			"L'idée de cette brochure est née après une visite des serres du Muséum d'Histoire Naturelle de Toulouse.",
			"La variété des plantes de la serre méritait une brochure que le visiteur pourrait emporter, avec des informations supplémentaires sur tous les genres de plantes.",
			"Mon background en biologie, et plus particulièrement en botanique, a rendu ce projet très cher à mon cœur."
		  ],
		  links: [
			'<a href="https://museum.toulouse-metropole.fr/le-jardin-botanique/" target="_blank">Jardin botanique</a>',
			'<a href="https://jardin-botanique.univ-tlse3.fr/" target="_blank">Informations sur les plantes</a>'
		  ],
		  type: "Projet personnel"
		},

		graines: {
		  title: "Bannière sur la dispersion des graines",
		  intro: [
			"Ceci est une réinterprétation d'une bannière pour une exposition itinérante (nommée Graines voyageuses au long cours) développée par le Muséum d'Histoire Naturelle de Toulouse.",
			"J'ai utilisé de nombreuses images libres disponibles sur Wikimedia provenant des collections du Muséum.",
			"Ces images ont été intégrées dans la bannière et ont également permis de développer la palette de couleurs de l'ensemble du travail."
		  ],
		  links: [],
		  type: "Projet personnel"
		},

		fruitposter: {
		  title: "Poster sur les types de fruits",
		  intro: [
			"Ceci est l'un des deux posters scientifiques issus de mon projet postdoctoral MSCA nommé Fruitful.",
			"L'idée était de présenter ce poster au grand public et de l'utiliser comme support supplémentaire pour expliquer les différences entre les types de fruits.",
			"Ce projet en biologie évolutive a duré de 2019 à 2022."
		  ],
		  links: [
			'<a href="https://cordis.europa.eu/project/id/842234" target="_blank">Description du projet de recherche Fruitful</a>'
		  ],
		  type: "Travail commandé"
		},

		seeddispersal: {
		  title: "Poster sur la dispersion des graines",
		  intro: [
			"Ceci est le deuxième poster scientifique issu de mon projet postdoctoral MSCA nommé Fruitful.",
			"L'idée était de présenter ce poster au grand public et de l'utiliser comme support supplémentaire pour expliquer les différentes façons dont les graines se dispersent.",
			"Ce projet en biologie évolutive a duré de 2019 à 2022."
		  ],
		  links: [
			'<a href="https://cordis.europa.eu/project/id/842234" target="_blank">Description du projet de recherche Fruitful</a>'
		  ],
		  type: "Travail commandé"
		},

		lard: {
		  title: "Logo du groupe LARD",
		  intro: [
			"Conception d'un logo pour un groupe de travail dans le domaine de l’ingénierie aérospatiale.",
			"Ce logo (qui sera utilisé exclusivement pour la communication interne) joue sur l’acronyme du groupe et son objectif : évaluer les sites d’atterrissage pour un rover spatial."
		  ],
		  links: [],
		  type: "Travail commandé"
		},

		unepatte: {
		  title: "Logo pour un refuge animalier",
		  intro: [
			"Pour développer mon portfolio, j'ai contacté des associations à but non lucratif avec de nouvelles propositions pour leurs logos et images associées.",
			"Cette organisation travaille principalement avec des chats, et leur logo actuel comportait également un dessin de chat.",
			"Mon objectif principal était de simplifier le logo tout en conservant leur palette de couleurs originale.",
			"Ce travail n'a pas été mis en œuvre par l'organisation."
		  ],
		  links: [],
		  type: "Projet personnel"
		},

		flute: {
		  title: "Flyer pour une école de musique",
		  intro: [
			"C'était un projet personnel visant à développer un logo, des cartes de visite et des flyers pour une petite entreprise, à titre d’exercice.",
			"Dans ce but, j'ai créé une école de musique fictive : je l’ai nommée, conçu un logo, une palette de couleurs, des cartes de visite et des flyers."
		  ],
		  links: [],
		  type: "Projet personnel"
		}
    }
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
    const value = getNestedTranslation(translations[lang], key);

    if (value) {
      // If value is an array, join with <br> for paragraphs
      if (Array.isArray(value)) {
        el.innerHTML = value.join('<br><br>');
      } else {
        el.innerHTML = value;
      }
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getNestedTranslation(translations[lang], key);
    if (value) el.setAttribute("placeholder", value);
  });

  // Input values
  document.querySelectorAll("[data-i18n-value]").forEach(el => {
    const key = el.getAttribute("data-i18n-value");
    const value = getNestedTranslation(translations[lang], key);
    if (value) el.setAttribute("value", value);
  });

  localStorage.setItem("lang", lang);
}


// 3. Load saved language or default to EN
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);
});
