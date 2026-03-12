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
      <p>An independent graphic designer based in Toulouse, I design print and digital materials as well as graphic elements for exhibitions for museums, cultural institutions, and associations. Exhibitions, educational panels, posters, brochures, programs… I help you inform, engage, and inspire your audience through thoughtful, attractive design tailored to the visitor’s experience.</p>
      <p>With a PhD in Ecology and Evolutionary Biology and a professional certificate in Museum Studies, I have gained solid experience in scientific outreach and public engagement during my years of research. Trained in both data science and graphic design, I combine scientific expertise, pedagogical insight, and visual creativity to design exhibitions and communication materials that make knowledge accessible and engaging.</p>
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
      jwst: {
          title: "Intro wall panels for exhibit on JWST",
          intro: [
            "Walls panels for the entrance of an exhibit about the James Webb Space Telescope (JWST).",
            "These panels were designed for a space with a 2.5m ceiling.",
		    "The left panel is a design based on an image captured by JWST. JWST captured this sparkling scene of star birth in Pismis 24, a young star cluster about 5,500 light-years from Earth in the constellation Scorpius. Credits: Image: NASA, ESA, CSA, STScI; Image Processing: Alyssa Pagan (STScI)",
			"The right panel has its main color, yellow, to resemble the color of the panels on the actual telescope. Besides the exhibit name, it holds the introduction text to the exhibit."
          ],
          links: [
			'<a href="https://science.nasa.gov/missions/webb/glittering-glimpse-of-star-birth-from-nasas-webb-telescope/" target="_blank">NASA article about this image</a>',
			'<a href="https://science.nasa.gov/mission/webb/" target="_blank">NASA website on JWST</a>'
		  ],
          type: "Personal project"
		},
      fruitexpo: {
          title: "Exhibit on fruit types",
          intro: [
            "An exhibit I designed entirely - from content to all graphic design to making the 1:24 model.",
            "This exhibit about fruits - what they are, different types, curious details - was designed for 5x7m space with 2.5m of ceiling height.",
		    "Every detail of the model was made by hand."
          ],
          links: [],
          type: "Personal project"
      },
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
	  <p>Graphiste indépendante basée à Toulouse, je conçois des supports imprimés et numériques ainsi que des dispositifs graphiques pour les expositions destinés aux musées, institutions culturelles et associations. Expositions, panneaux pédagogiques, affiches, dépliants, programmes… Je vous aide à informer, sensibiliser et captiver votre public grâce à un design réfléchi, attractif et adapté aux parcours de visite.</p>
	  <p>Docteure en écologie et biologie évolutive, titulaire d’un certificat professionnel en muséologie, j’ai acquis une solide expérience en médiation et valorisation scientifique au cours de mes années de recherche. Formée à la fois en data science et en design graphique, je combine expertise scientifique, sens pédagogique et créativité visuelle pour concevoir des expositions et supports qui rendent les savoirs accessibles et engageants.</p>
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
      jwst: {
          title: "Panneaux muraux d’introduction pour une exposition sur le JWST",
          intro: [
            "Panneaux muraux pour l’entrée d’une exposition sur le télescope spatial James Webb (JWST).",
            "Ces panneaux ont été conçus pour un espace avec un plafond de 2,5 m.",
		    "Le panneau de gauche est un design basé sur une image capturée par le JWST. Le JWST a capturé cette scène scintillante de naissance d’étoiles dans Pismis 24, un jeune amas d’étoiles situé à environ 5 500 années-lumière de la Terre dans la constellation du Scorpion. Crédits : Image : NASA, ESA, CSA, STScI ; traitement de l’image : Alyssa Pagan (STScI).",
			"Le panneau de droite a pour couleur principale le jaune, afin de rappeler la couleur des panneaux du télescope réel. En plus du titre de l’exposition, il contient le texte d’introduction à l’exposition."
          ],
          links: [
			'<a href="https://science.nasa.gov/missions/webb/glittering-glimpse-of-star-birth-from-nasas-webb-telescope/" target="_blank">Article de la NASA sur cette image</a>',
			'<a href="https://science.nasa.gov/mission/webb/" target="_blank">Site de la NASA sur le JWST</a>'
		  ],
          type: "Projet personnel"
      },
      fruitexpo: {
          title: "Exposition sur les types de fruits",
          intro: [
            "Une exposition que j'ai entièrement conçue, du contenu à la conception graphique, en passant par la réalisation de la maquette à l'échelle 1:24.",
            "Cette exposition sur les fruits (ce qu'ils sont, les différents types, des détails curieux) a été conçue pour un espace de 5 x 7 m avec une hauteur sous plafond de 2,5 m.",
		    "Chaque détail de la maquette a été réalisé à la main."
          ],
          links: [],
          type: "Projet personnel"
      },		
		idefix: {
		  title: "Dépliant du rover IDEFIX",
		  intro: [
			"Un dépliant pour compléter une exposition sur le rover IDEFIX.",
			"Ce dépliant a un aspect interactif : lorsqu'on commence à l’ouvrir, on aide par inadvertance IDEFIX à déployer ses panneaux solaires."
		  ],
		  links: [
			'<a href="https://cnes.fr/actualites/idefix-passage-de-relai-japon" target="_blank">Article CNES sur IDEFIX</a>',
			'<a href="https://cnes.fr/projets/mmx" target="_blank">Page CNES sur la mission MMX</a>'
		  ],
		  type: "Projet personnel"
		},

		greenhouse: {
		  title: "Dépliant serre de plantes carnivores",
		  intro: [
			"L'idée de ce dépliant est née après une visite des serres du Muséum d'Histoire Naturelle de Toulouse.",
			"La variété des plantes de la serre méritait un dépliant que le visiteur pourrait emporter, avec des informations supplémentaires sur tous les genres de plantes.",
			"Mon background en biologie, et plus particulièrement en botanique, a rendu ce projet très cher à mon cœur."
		  ],
		  links: [
			'<a href="https://museum.toulouse-metropole.fr/le-jardin-botanique/" target="_blank">Jardin botanique</a>',
			'<a href="https://jardin-botanique.univ-tlse3.fr/" target="_blank">Informations sur les plantes</a>'
		  ],
		  type: "Projet personnel"
		},

		graines: {
		  title: "Kakemono sur la dispersion des graines",
		  intro: [
			"Ceci est une réinterprétation d'un kakemono pour une exposition itinérante (nommée Graines voyageuses au long cours) développée par le Muséum d'Histoire Naturelle de Toulouse.",
			"J'ai utilisé de nombreuses images libres disponibles sur Wikimedia provenant des collections du Muséum.",
			"Ces images ont été intégrées dans le kakemono et ont également permis de développer la palette de couleurs de l'ensemble du travail."
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
	
	  if (Array.isArray(value) && value.length) {
	    if (el.classList.contains("project__links")) {
		  // inline instead of stacked
		  if (value.length > 0) {
		    el.innerHTML = `Text: ` + value.join(' · ');
		  } else {
		    el.innerHTML = ""; // hide if no links
		  }
	    } else if (el.classList.contains("project__intro")) {
	      // Wrap each intro line in <p> for CSS
	      el.innerHTML = value.map(v => `<p>${v}</p>`).join('');
	    } else {
	      // Fallback for any other array
	      el.innerHTML = value.join('<br>');
	    }
	  } else if (value) {
	    el.innerHTML = value;
	  } else {
	    el.innerHTML = '';
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
