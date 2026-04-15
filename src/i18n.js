import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      navbar: {
        logo: 'Portfolio',
        links: {
          home: 'Accueil',
          about: 'À propos',
          skills: 'Compétences',
          projects: 'Projets',
          contact: 'Contact',
        },
        openMenu: 'Ouvrir le menu',
        closeMenu: 'Fermer le menu',
      },
      hero: {
        greeting: 'Bonjour, je suis',
        title: 'Developpeur Full-Stack',
        description:
          'Je crée des applications web propres et performantes, avec un focus sur l\'expérience utilisateur, la confidentialité et le code maintenable.',
        ctaAbout: 'À propos de moi',
        ctaProjects: 'Voir mes projets',
        ctaContact: 'Me contacter',
      },
      about: {
        titleBefore: 'À propos',
        titleHighlight: 'de moi',
        subtitle: 'Un peu de contexte',
        p1:
          'Developpeur logiciel junior francais passionné par la création et l\'entraide. Du design d\'interfaces à l\'architecture de services back-end, l\'objectif reste le même : écrire un code lisible, maintenable et utilisable par tous.',
        p2:
          'Dans mon temps libre, je passe du temps a m\'informer sur les nouvelles technologies, jouer aux jeux video, apprendre de nouvelles choses et bricoler mes projets personnels.',
        p3:
          'Ce portfolio est un document vivant : projets, compétences et expériences évolueront ici au fil du temps.',
        details: {
          locationLabel: 'Localisation',
          locationValue: 'La Rochelle, France',
          educationLabel: 'Formation',
          educationValue: 'Bachelor Universitaire de Technologie Informatique, IUT de La Rochelle',
          availabilityLabel: 'Disponibilité',
          availabilityValue: 'Ouvert aux opportunités',
        },
        downloadResume: 'Télécharger le CV',
        downloadResumeAria: 'Télécharger le CV en PDF',
      },
      skills: {
        titleBefore: 'Compétences',
        titleHighlight: 'techniques',
        subtitle: 'Technologies que j\'utilise régulièrement',
        groups: [
          {
            category: 'Frontend',
            items: [
              { name: 'React', level: 90 },
              { name: 'JavaScript', level: 90 },
              { name: 'HTML & CSS', level: 80 },
              { name: 'Vite', level: 80 },
              { name: 'TypeScript', level: 70 },
            ],
          },
          {
            category: 'Backend',
            items: [
              { name: 'Symfony (PHP)', level: 90 },
              { name: 'API REST', level: 85 },
              { name: 'Node.js', level: 80 },
              { name: 'C++', level: 80 },
              { name: 'Python', level: 75 },
            ],
          },
          {
            category: 'Outils & Ops',
            items: [
              { name: 'Git', level: 90 },
              { name: 'Docker', level: 90 },
              { name: 'Linux', level: 85 },
              { name: 'PostgreSQL', level: 60 },
              { name: 'MongoDB', level: 60 },
            ],
          },
        ],
      },
      projects: {
        titleBefore: 'Mes',
        titleHighlight: 'projets',
        subtitle: 'Une sélection de mes travaux professionnels et personnels',
        filterAria: 'Filtrer par catégorie de projet',
        filters: {
          schoolProfessional: 'Scolaires & Professionnels',
          personal: 'Personnels',
        },
        featured: 'À la une',
        tagsAria: 'Technologies utilisées',
        liveDemo: 'Démo live',
        sourceCode: 'Code source',
        liveDemoAria: 'Voir la démo live de {{title}}',
        sourceCodeAria: 'Voir le code source de {{title}}',
        items: [
          {
            id: 1,
            title: 'Application web mobile',
            description:
              'Application web mobile pour les utilisateurs du projet symfony précédent: création de compte, consultation des dernières données des salles, alertes en cas de problème, et recommandations d\'actions (ouvrir la fenêtre, éteindre le chauffage, etc.). Un classement hebdomadaire a aussi été ajouté pour améliorer l\'implication des utilisateurs. Stack: React, API Symfony avec API Platform, CI/CD GitLab : linter, php-cs-fixer, pipelines de tests PHP et JS et SonarQube.',
            tags: ['React', 'CI/CD', 'Git', 'Docker', 'SonarQube', 'C++', 'API REST', 'Symfony (PHP)', 'Testing', 'Teamwork', 'Playwright'],
            liveUrl: null,
            repoUrl: 'https://github.com/JujuSquidy/SAE4_MobileWebAppReactAndAPI/',
            featured: true,
            category: 'schoolProfessional',
          },
          {
            id: 2,
            title: 'Tableau de bord de supervision',
            description:
              'Application web Symfony qui récupère des informations depuis une API recevant des données de salles (température, humidite, qualité de l\'air) et les affiche avec des graphiques et un code couleur par salle pour un suivi éco-responsable des salles de l\'établissement. Les données proviennent de microcontroleurs ESP32 et sont envoyées à l\'API via des requêtes curl. Le code de l\'ESP32 a été écrit par l\'équipe et son repository est disponible dans le README du projet Symfony.',
            tags: ['Symfony (PHP)', 'C++', 'JavaScript', 'Twig', 'Teamwork', 'Testing'],
            liveUrl: null,
            repoUrl: 'https://github.com/JujuSquidy/SAE3_WebAppSymfony',
            featured: false,
            category: 'schoolProfessional',
          },
          {
            id: 3,
            title: 'Mon site portfolio',
            description:
                'Le site portfolio que vous êtes en train de consulter ! Réalisé avec React et Vite, avec une architecture pensée pour être facilement maintenable et évolutive. Le design est simple et épuré pour mettre en valeur le contenu, avec une attention particulière portée à l\'accessibilité, à la performance et à la confidentialité lors du clique vers les liens externes.',
            tags: ['React', 'Vite', 'JavaScript', 'i18n', 'Responsive Design', 'Accessibility'],
            liveUrl: 'https://portfolio-julian-machet.netlify.app/',
            repoUrl: 'https://github.com/JujuSquidy/Portfolio',
            featured: true,
            category: 'personal',
          },
          {
            id: 4,
            title: 'Jeu video rétro',
            description:
              'Jeu 2D vue du dessus où le joueur tire et esquive les attaques d\'ennemis de plus en plus nombreux à l\'aide de power-ups et d\'améliorations aléatoires. Realisé en C++ avec Qt Creator, avec des graphismes simples. Compilé pour Windows, peut être compilé manuellement pour macOS. Inspiré de Vampire Survivor et developpé en équipe de 3 en environ 1 mois.',
            tags: ['C++', 'Qt', 'Git', 'Game Development', 'Teamwork', 'Testing'],
            liveUrl: 'https://github.com/JujuSquidy/SAE2_RetroGame_TheFormist/releases/download/v2/TheFormistV2_win.zip',
            repoUrl: 'https://github.com/JujuSquidy/SAE2_RetroGame_TheFormist/',
            featured: false,
            category: 'schoolProfessional',
          },
          { 
            id: 5,
            title: 'Borne d\'arcade',
            description:
              'Borne d\'arcade personnalisée construite à partir de zéro, avec un Raspberry Pi 3 comme cerveau, un écran de récupération, des contrôleurs type borne d\'arcade classique, et l\'émulateur Recalbox pour l\'interface. La borne est capable d\'émuler une large gamme de consoles rétro et de jeux d\'arcade, offrant une expérience de jeu authentique et personnalisable.',
            tags: ['Raspberry Pi', 'Recalbox', 'Retro Gaming', 'Hardware', 'DIY'],
            liveUrl: null,
            repoUrl: null,
            featured: true,
            category: 'personal',
          },
          {
            id: 6,
            title: 'Serveur NAS local',
            description:
              'Serveur NAS local pour la famille construit avec un Raspberry Pi 3, utilisant OpenMediaVault pour la gestion du stockage et des utilisateurs. Le serveur offre une solution de stockage centralisée pour les fichiers personnels et les sauvegardes à travers le réseau domestique, avec une attention particulière portée à la sécurité et à la confidentialité des données de chacun. Projet encore en cours de mise en place.',
            tags: ['Raspberry Pi', 'OpenMediaVault', 'NAS', 'Storage Solutions', 'DIY'],
            liveUrl: null,
            repoUrl: null,
            featured: false,
            category: 'personal',
          }
        ],
      },
      contact: {
        titleBefore: 'Me',
        titleHighlight: 'contacter',
        subtitle: 'Une question, une idee de projet, ou juste envie de dire bonjour ?',
        workTogether: 'Travaillons ensemble',
        workTogetherText:
          'Que ce soit pour une mission freelance, un poste a temps plein ou un projet collaboratif, ma boite mail est toujours ouverte.',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        disclaimer:
          'Ce formulaire est en cours de développement et n\'envoie pas encore de vrais messages. Merci d\'utiliser les coordonnées ci-contre pour me contacter directement.',
        name: 'Nom',
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'votre@email.com',
        message: 'Message',
        messagePlaceholder: 'Parlez-moi de votre projet...',
        sending: 'Envoi...',
        send: 'Envoyer le message',
        success: 'Message envoyé ! Je reviendrai vers vous dès que possible.',
        error: 'Le formulaire est en cours de développement. Merci de réessayer ou de m\'écrire directement par email.',
      },
      footer: {
        logo: 'Portfolio',
        links: {
          home: 'Accueil',
          about: 'À propos',
          skills: 'Compétences',
          projects: 'Projets',
          contact: 'Contact',
        },
        builtWith: 'Construit avec React et Vite.',
        socialAria: 'Liens réseaux sociaux',
      },
    },
  },
  en: {
    translation: {
      navbar: {
        logo: 'Portfolio',
        links: {
          home: 'Home',
          about: 'About',
          skills: 'Skills',
          projects: 'Projects',
          contact: 'Contact',
        },
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      hero: {
        greeting: 'Hello, I am',
        title: 'Full-Stack Developer',
        description:
          'I craft clean, performant web applications with a focus on great user experiences, privacy, and maintainable code.',
        ctaAbout: 'About Me',
        ctaProjects: 'View Projects',
        ctaContact: 'Get in Touch',
      },
      about: {
        titleBefore: 'About',
        titleHighlight: 'Me',
        subtitle: 'A bit of background',
        p1:
          'A French junior software developer with a passion for building things and helping others. From designing user interfaces to architecting back-end services, the goal is always the same: write code that is easy to read, easy to maintain and usable for everyone.',
        p2:
          'When not writing code, time is spent exploring new technologies, playing video games, learning new things, and tinkering with side projects that may or may not ever see the light of day.',
        p3:
          'This portfolio is a living document: projects, skills, and experience will evolve here as work continues.',
        details: {
          locationLabel: 'Location',
          locationValue: 'La Rochelle, France',
          educationLabel: 'Education',
          educationValue: 'Computer Science Bachelor of Technology, IUT de La Rochelle',
          availabilityLabel: 'Availability',
          availabilityValue: 'Open to opportunities',
        },
        downloadResume: 'Download Resume',
        downloadResumeAria: 'Download resume PDF',
      },
      skills: {
        titleBefore: 'Technical',
        titleHighlight: 'Skills',
        subtitle: 'Technologies I work with regularly',
        groups: [
          {
            category: 'Frontend',
            items: [
              { name: 'React', level: 90 },
              { name: 'JavaScript', level: 90 },
              { name: 'HTML & CSS', level: 80 },
              { name: 'Vite', level: 80 },
              { name: 'TypeScript', level: 70 },
            ],
          },
          {
            category: 'Backend',
            items: [
              { name: 'Symfony (PHP)', level: 90 },
              { name: 'REST APIs', level: 85 },
              { name: 'Node.js', level: 80 },
              { name: 'C++', level: 80 },
              { name: 'Python', level: 75 },
            ],
          },
          {
            category: 'Tools & Ops',
            items: [
              { name: 'Git', level: 90 },
              { name: 'Docker', level: 90 },
              { name: 'Linux', level: 85 },
              { name: 'PostgreSQL', level: 60 },
              { name: 'MongoDB', level: 60 },
            ],
          },
        ],
      },
      projects: {
        titleBefore: 'My',
        titleHighlight: 'Projects',
        subtitle: 'A selection of work - both professional and personal',
        filterAria: 'Filter by project category',
        filters: {
          schoolProfessional: 'School & Professional',
          personal: 'Personal',
        },
        featured: 'Featured',
        tagsAria: 'Technologies used',
        liveDemo: 'Live Demo',
        sourceCode: 'Source Code',
        liveDemoAria: 'View live demo of {{title}}',
        sourceCodeAria: 'View source code of {{title}}',
        items: [
          {
            id: 1,
            title: 'Mobile web app',
            description:
              'A mobile web application for users of the previous project: account creation, latest room data visualization, notifications when a room has issues, and guidance on how to fix them (open the window, turn off the heater, etc.). A weekly leaderboard was also implemented. Built with React, a Symfony API using API Platform, and GitLab CI/CD with linting, php-cs-fixer, SonarQube, and PHP/JS test pipelines.',
            tags: ['React', 'CI/CD', 'Git', 'Docker', 'SonarQube', 'C++', 'REST API', 'Symfony (PHP)', 'Testing', 'Teamwork', 'Playwright'],
            liveUrl: null,
            repoUrl: 'https://github.com/JujuSquidy/SAE4_MobileWebAppReactAndAPI/',
            featured: true,
            category: 'schoolProfessional',
          },
          {
            id: 2,
            title: 'Monitoring Dashboard',
            description:
              'A web application made with Symfony that gathers information from an API that receives data about rooms (temperature, humidity, air quality) and displays them in a dashboard with room-based charts for eco-friendly monitoring of the building. Data are gathered by ESP32 microcontrollers with connected sensors and sent to the API with curl requests.',
            tags: ['Symfony (PHP)', 'C++', 'JavaScript', 'Twig', 'Teamwork', 'Testing'],
            liveUrl: null,
            repoUrl: 'https://github.com/JujuSquidy/SAE3_WebAppSymfony',
            featured: false,
            category: 'schoolProfessional',
          },
          {
            id: 3,
            title: 'My portfolio website',
            description:
                'The very website you are currently browsing! Built with React and Vite, with an architecture designed for maintainability and scalability. The design is clean and simple to let the content shine, with particular attention to accessibility, performance, and privacy when linking to external sites.',
            tags: ['React', 'Vite', 'JavaScript', 'i18n', 'Responsive Design', 'Accessibility'],
            liveUrl: 'https://portfolio-julian-machet.netlify.app/',
            repoUrl: 'https://github.com/JujuSquidy/Portfolio',
            featured: true,
            category: 'personal',
          },
          {
            id: 4,
            title: 'Retro video game',
            description:
              'A 2D top-down game where the player must shoot and avoid attacks from a growing number of enemies, helped by power-ups and random upgrades. Built in C++ with Qt Creator, with simple graphics and animations. Compiled for Windows but can also be compiled for macOS. Inspired by Vampire Survivor and developed by a team of 3 over around 1 months.',
            tags: ['C++', 'Qt', 'Git', 'Game Development', 'Teamwork', 'Testing'],
            liveUrl: 'https://github.com/JujuSquidy/SAE2_RetroGame_TheFormist/releases/download/v2/TheFormistV2_win.zip',
            repoUrl: 'https://github.com/JujuSquidy/SAE2_RetroGame_TheFormist/',
            featured: false,
            category: 'schoolProfessional',
          },
          {
            id: 5,
            title: 'Custom arcade',
            description:
              'A custom arcade cabinet built from scratch, with a Raspberry Pi 3 as its brain, a salvaged monitor, classic arcade-style controllers, and the Recalbox emulator for the interface. The cabinet is capable of emulating a wide range of retro consoles and arcade games, offering an authentic and customizable gaming experience.',
            tags: ['Raspberry Pi', 'Woodworking', 'Electronics', 'Recalbox', 'Retro Gaming', 'DIY'],
            liveUrl: null,
            repoUrl: null,
            featured: true,
            category: 'personal',
          },
          {
            id: 6,
            title: 'Local NAS server',
            description:
                'A local NAS server for the family built with a Raspberry Pi 3, using OpenMediaVault for storage and user management. The server provides a centralized storage solution for personal files and backups across the home network, with a focus on security and privacy for everyone\'s data. Project still in progress.',
            tags: ['Raspberry Pi', 'OpenMediaVault', 'Storage', 'Network', 'DIY', 'Electronics'],
            liveUrl: null,
            repoUrl: null,
            featured: false,
            category: 'personal',
          },
        ],
      },
      contact: {
        titleBefore: 'Get in',
        titleHighlight: 'Touch',
        subtitle: 'Have a question, a project idea, or just want to say hi?',
        workTogether: 'Let\'s work together',
        workTogetherText:
          'Whether it is a freelance project, a full-time role, or a collaborative side project, the inbox is always open.',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        disclaimer:
          'This form is currently a work in progress and does not send real messages. Please use the contact information provided to reach out directly.',
        name: 'Name',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        sending: 'Sending...',
        send: 'Send Message',
        success: 'Message sent! I will get back to you soon.',
        error: 'This is a work in progress. Please try again or send an email directly.',
      },
      footer: {
        logo: 'Portfolio',
        links: {
          home: 'Home',
          about: 'About',
          skills: 'Skills',
          projects: 'Projects',
          contact: 'Contact',
        },
        builtWith: 'Built with React and Vite.',
        socialAria: 'Social media links',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;