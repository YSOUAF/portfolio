
export const PERSONAL_INFO = {
    name: "Yassine SOUAF",
    title: "Élève Ingénieur en Génie des Procédés, de l’Énergie et de l’Environnement",
    phone: "+212 627 921 772",
    email: "yassine.souaf04@gmail.com",
    linkedin: "yassine-souaf",
    github: "YSOUAF",
    address: "Benslimane / Khouribga, Maroc",
    bio: "Élève Ingénieur en Génie des Procédés, de l’Énergie et de l’Environnement. À la recherche d’un PFA (Projet de Fin d'Année).",
    image: "/image.png",
};

export const EXPERIENCES = [
    {
        title: "Stagiaire Ingénieur Procédés",
        company: "OCP Group",
        location: "Site Béni Idir – Khouribga",
        duration: "Juillet – Août 2025",
        description: [
            "Suivi des unités de traitement des eaux industrielles.",
            "Analyse énergétique des chaudières et de leurs indicateurs de performance.",
            "Étude du système de déminéralisation (échange d'ions) et proposition d'une solution par osmose inverse avec amélioration estimée de l'efficacité de +10%."
        ]
    },
    {
        title: "Stagiaire Ingénieur Procédés",
        company: "OCP Group",
        location: "Laverie Daoui – Khouribga",
        duration: "Juillet – Août 2024",
        description: [
            "Suivi du procédé de lavage du phosphate et contrôle de la qualité.",
            "Analyse des opérations unitaires et de la consommation hydrique."
        ]
    }
];

export const EDUCATION = [
    {
        degree: "Cycle d’Ingénieur – Génie des Procédés, de l’Énergie et de l’Environnement",
        institution: "ENSA Khouribga",
        duration: "2024 – Présent",
    },
    {
        degree: "Cycle Préparatoire Intégré",
        institution: "ENSA Khouribga",
        duration: "2022 – 2024",
    },
    {
        degree: "Baccalauréat Sciences Physiques – Mention Très Bien",
        institution: "Lycée Allal Ben Abdellah - Benslimane",
        duration: "2022",
    }
];

export const PROJECTS = [
    {
        title: "GreenCollect",
        description: "Développement d’une solution éco-tech intelligente pour la collecte et la valorisation des déchets ménagers, intégrant un système de géolocalisation et une plateforme numérique de gestion des flux de déchets dans le contexte marocain.",
        image: "/GreenCollect (1).png",
        tags: ["Eco-Tech", "Digitalisation", "Environnement"]
    },
   
    {
        title: "A-CAES — Stockage d’énergie par air comprimé adiabatique piloté par IA",
        description: "Conception et modélisation d’un système de stockage d’énergie par air comprimé adiabatique, optimisé par intelligence artificielle et appliqué au site industriel OCP Khouribga.",
        image: "/caes.jpg",
        tags: ["Énergie", "IA", "Industrie", "OCP"]
    },
    {
        title: "Minishell (1337)",
        description: "Développement d’un shell Unix complet en C, gestion des processus, pipes, redirections, parsing et exécution de commandes selon les standards 42.",
        image: "/minishell.gif",
        tags: ["C", "Systèmes", "Unix", "1337"]
    },
    {
        title: "Cub3D (1337)",
        description: "Création d’un moteur de rendu 3D basé sur le raycasting, gestion des textures, collisions et affichage en temps réel.",
        image: "/cub3d.jpg",
        tags: ["C", "Graphisme", "Game Dev", "Raycasting"]
    },
     {
        title: "Dimensionnement d’une Tour de Refroidissement Industrielle",
        description: "Bilans matière et énergie, étude thermique et analyse des paramètres influençant le rendement et la consommation d’eau.",
        image: "",
        tags: ["Génie Chimique", "Thermique", "Industrie"]
    },
    {
        title: "Résolution des Phénomènes de Transport",
        description: "Analyse des équations de chaleur et de masse (conduction, diffusion, convection), résolution par les méthodes des éléments finis (MEF), volumes finis (MVF) et différences finies (MDF).",
        image: "",
        tags: ["Simulation", "Physique", "Mathématiques"]
    },
]; 
export const SKILLS = {
    process_energy: [
        "Opérations unitaires", "les réacteurs", "Bilans matière/énergie", "Dimensionnement des équipements", "Procédés industriels"
    ],
    energy_thermique: [
        "Efficacité énergétique", "Hydrogène vert", "Stockage d’énergie", "Production énergétique", "HVAC", "Énergies renouvelables"
    ],
    water_env: [
        "Traitement des eaux", "Dessalement", "Analyse physico-chimique", "Systèmes de déminéralisation", "Osmose Inverse", "Gestion des déchets industriels"
    ],
    simulation: [
        "MATLAB", "ANSYS (CFD)", "AUTOCAD", "SOLIDWORKS", "PROSIM"
    ],
    software: [
        "C", "C++", "Python", "Shell", "Git", "Linux"
    ]
};

export const CERTIFICATES = [
    {
        title: "Software Engineering Program",
        issuer: "1337 (UM6P)",
        description: "Immersion intensive en architecture logicielle, algorithmie avancée et résolution de problèmes complexes (Pédagogie Peer-learning)."
    },
    {
        title: "Municipal Solid Waste Management",
        issuer: "EPFL via Coursera",
        description: "Maîtrise des technologies de traitement, valorisation des déchets."
    },
    {
        title: "MATLAB Onramp",
        issuer: "MathWorks",
        description: "Analyse de données, calcul matriciel et visualisation graphique de données techniques."
    },
    {
        title: "Business English",
        issuer: "University of Washington via Coursera",
        description: "Communication professionnelle et rédaction de rapports techniques en anglais."
    }
];

export const LEADERSHIP = [
    {
        role: "Campus Director",
        org: "Hult Prize ENSA Khouribga",
        duration: "2025 – 2026",
        description: "Pilotage stratégique de la compétition, management d’équipe et représentation officielle de la fondation à l’ENSAK."
    },
    {
        role: "Co-fondateur & Chef de Cellule Formation",
        org: "Club Greenov",
        duration: "2025",
        description: "Promotion de l'innovation durable et pilotage des formations techniques en GPEE."
    },

    {
        "role": "Responsable Sponsoring",
        "organization": "Hult Prize ENSA Khouribga",
        "duration": "2024 – 2025",
        "description": "Négociation et gestion des partenariats avec des sponsors, recherche de financements et développement des relations avec les entreprises partenaires pour soutenir les événements."
    },
    {
        "role": "Responsable Logistique",
        "organization": "Hult Prize ENSA Khouribga",
        "duration": "2023 – 2024",
        "description": "Organisation opérationnelle des événements, coordination des équipes, gestion du matériel et assurance du bon déroulement logistique avant et pendant les compétitions."
    }

];

export const LANGUAGES = [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Français", level: "Bon" },
    { name: "Anglais", level: "Bon" }
];
