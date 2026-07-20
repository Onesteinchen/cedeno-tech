const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const glow = document.querySelector(".cursor-glow");
const langButtons = document.querySelectorAll(".lang-button");
let currentLang = localStorage.getItem("cedeno-lang") || "en";

navToggle?.addEventListener("click", () => {
  const open = body.classList.toggle("nav-open");
  navToggle.textContent = open ? dictionary[currentLang].menuClose : dictionary[currentLang].menuOpen;
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    body.classList.remove("nav-open");
    navToggle.textContent = dictionary[currentLang].menuOpen;
  }
});

window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.setProperty("--x", `${event.clientX}px`);
  glow.style.setProperty("--y", `${event.clientY}px`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const dictionary = {
  en: {
    menuOpen: "Menu",
    menuClose: "Close",
    nav: ["Technology", "Solutions", "FAQ", "Get Quote"],
    heroTitle: "Cedeno R2: New Standards for Flexibility and Safety of Massage Robots",
    heroText:
      "Cedeno Technologies is the exclusive German distributor for R2 robotic massage solutions, with local consulting, deployment support, training, and after-sales service for wellness centers, hotels, salons, recovery studios, senior living operators, and channel partners.",
    metrics: [
      "flexible massage attachments",
      "increase in the patient-to-operator/masseur ratio",
      "safety through redundant force monitoring",
      "operation possible"
    ],
    techEyebrow: "Core technology",
    techTitle: "Built for repeatable technique, controlled force, and safer operations.",
    techTitles: ["Advanced body point recognition", "Precision force control", "Tablet workflow", "Multiple safety layers"],
    techTexts: [
      "Body points can be combined with technique replication to support more consistent robot-assisted service delivery.",
      "Redundant force monitoring and controlled feedback help the R2 adjust movement within defined safety boundaries during treatment.",
      "A guided interface helps staff manage settings, body areas, and service flow without turning the product into a black box.",
      "Motion planning, collision detection, visual safeguards, soft limits, body boundary protection, and trajectory monitoring support safer use."
    ],
    solutionsEyebrow: "Solutions",
    solutionsTitle: "Put robotic massage where people already look for relief.",
    solutionsText: "Cedeno helps operators choose the right R2 room concept, service menu, safety explanation, and local support path before launch.",
    solutionTitles: ["Wellness centers", "Recovery studios", "Hotels and resorts", "Relaxation massage rooms", "Home wellness users", "Distributors"],
    solutionTexts: [
      "For spa owners and wellness operators who need consistent back, shoulder, leg, and full-body relaxation sessions without depending on one senior therapist.",
      "For gyms, sports wellness centers, trainers, and active adults who want recovery support after workouts, travel, or long workdays.",
      "For hotels, resorts, and clubs that want a distinctive in-room or spa-area body-care experience customers can book as a paid upgrade.",
      "For salons, spas, hotels, and private wellness rooms that want a calm, comfortable, repeatable relaxation massage experience with clear staff guidance.",
      "For office workers with shoulder and back fatigue, middle-aged and older family members seeking daily relaxation, fitness users needing recovery, and technology-minded households with enough installation space.",
      "For channel partners selling to spas, salons, hotels, recovery centers, and senior care operators who need a differentiated robotic wellness product."
    ],
    solutionBullets: [
      "Standardized body-care protocols",
      "One staff member can supervise multiple rooms",
      "Works as a premium add-on service",
      "Post-training relaxation programs",
      "Leg, waist, back, and shoulder scenarios",
      "Pairs with stretching and recovery services",
      "Quiet guest-service workflow",
      "Memorable technology-led amenity",
      "Premium wellness package potential",
      "Comfort-led service flow",
      "Clear safety boundaries",
      "Repeatable relaxation menu",
      "Private home body-care room",
      "Repeatable relaxation routines",
      "Clear installation and safety requirements",
      "Award-winning product story",
      "Training and onboarding support",
      "Territory and cooperation discussion"
    ],
    scenarioEyebrow: "Deployment environments",
    scenarioTitle: "Adaptable to diverse service rooms",
    scenarioText:
      "R2 can be positioned in wellness centers, traditional wellness centers, beauty salons, community service centers, relaxation massage rooms, hotels, fitness centers, and sports wellness centers. Each setting needs a different room layout, customer promise, staff workflow, and safety explanation.",
    scenarioTitles: [
      "Wellness Center",
      "Traditional Wellness Center",
      "Beauty Salon",
      "Community Service Center",
      "Relaxation Massage",
      "Hotel",
      "Fitness Center",
      "Sports Wellness Center"
    ],
    scenarioTexts: [
      "Robotic massage room for standardized commercial body-care services.",
      "Upgrade existing massage rooms with robot-assisted service capacity.",
      "Add body relaxation and contouring-support experiences beside beauty treatments.",
      "Offer supervised wellness access for neighborhood health and relaxation programs.",
      "Offer calm, repeatable body relaxation sessions for guests who want a comfortable guided wellness experience.",
      "Create bookable guest wellness services inside rooms, spa areas, or private suites.",
      "Support members after training with repeatable recovery and relaxation sessions.",
      "Serve athletes and active users with structured post-exercise body-care workflows."
    ],
    trustEyebrows: ["Trust signals", "Local service in Germany"],
    trustTitles: ["Product proof, local responsibility", "Cedeno support from planning to after-sales service."],
    trustTexts: [
      "Cedeno uses product proof, technical documentation, and local service planning to help German buyers evaluate R2 before discussing room setup, staff training, maintenance, and quote terms.",
      "Cedeno is the German contact for R2 purchase planning, installation coordination, team training, maintenance, and ongoing operator support."
    ],
    trustServiceTitles: [
      "R2 planning",
      "After-sales service team",
      "Deployment support",
      "Long-term partner path"
    ],
    trustServiceTexts: [
      "Cedeno coordinates local R2 purchase planning and commercial deployment conversations in Germany.",
      "Local service coordination for training, troubleshooting, maintenance, and operator support.",
      "Room planning, workflow setup, safety explanation, and launch preparation for commercial operators.",
      "Support for wellness centers, hotels, salons, recovery studios, and distribution partners."
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Answer buyer questions directly.",
    faqSummaries: [
      "What business value does the AI massage robot bring to my location?",
      "How is Cedeno R2 different from professional human therapists?",
      "How is physical safety guaranteed during an autonomous AI robotic massage session?",
      "What are the ideal commercial scenarios and business models for this equipment?",
      "What local installation, training and after-sales support does Cedeno provide for R2 partners in Germany and DACH?"
    ],
    faqTexts: [
      "Cedeno R2 helps operators add a repeatable robotic massage offering. 24/7 operation is possible, and the system is positioned for a 400% increase in the patient-to-operator/masseur ratio.",
      "Cedeno R2 is designed to support commercial wellness workflows, not replace professional judgment. Its 3 flexible massage attachments and repeatable setup help operators offer guided massage services alongside staff.",
      "Cedeno R2 provides double safety through redundant force monitoring. Cedeno supports planning, training, and safety guidance for each operating site.",
      "Cedeno R2 supports commercial wellness centers, recovery studios, hotels and resorts, relaxation massage rooms, and channel partners. Cedeno helps each operator plan the R2 room and service workflow.",
      "Cedeno supports R2 partners in Germany and DACH with planning, training, maintenance coordination, and after-sales support. Contact Cedeno to discuss a local R2 deployment."
    ],
    quoteEyebrow: "Conversion",
    quoteTitle: "Collect better leads from day one.",
    quoteText:
      "Tell us your market, service room, target users, timeline, and quantity. We will route your request by home use, B2B deployment, distributor opportunity, or partnership fit.",
    formLabels: ["Name", "Email", "Customer type", "Interested product", "Message"],
    placeholders: ["Your name", "name@company.com", "Tell us your market, quantity, timeline, and use case."],
    customerTypeOptions: ["Select one", "Wellness center", "Recovery studio", "Hotel or resort", "Eldercare facility", "Distributor", "Home user"],
    productOptions: ["R2", "Not sure yet"],
    formButton: "Send inquiry",
    formSubmitting: "Sending...",
    leadSaved: (name) => `Thanks, ${name}. Your inquiry has been sent to Cedeno.`,
    leadError: "We could not send your inquiry. Please try again or email info@cedeno-tech.de.",
    validation: {
      nameRequired: "Please enter your name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      typeRequired: "Please select a customer type.",
      productRequired: "Please select an interested product."
    },
    footer: "Smart Robotics. Intelligent Results.",
    footerContact: "Contact: info@cedeno-tech.de",
    footerNavHeading: "navigation",
    footerNavLinks: ["Technology", "Solutions", "FAQ", "Get Quote"],
    socialHeading: "Social Media",
    legalLinks: ["Terms and Conditions", "Imprint", "Data protection"],
    cookieSettings: "Cookie settings",
    consent: {
      title: "Data protection & consent",
      text:
        "We use cookies and similar technologies to provide and, with your consent, improve our website. Necessary cookies are required for its operation. You can withdraw your consent at any time. Further information can be found in our privacy policy.",
      settings: "Settings",
      save: "Save selection",
      necessary: "Only necessary",
      accept: "Accept all",
      necessaryCookies: "Necessary cookies",
      necessaryStatus: "Required and always active",
      necessaryDescription: "Technically required for core site operation. Cannot be disabled.",
      analyticsCookies: "Analytics cookies",
      analyticsDescription: "Optional measurement to improve the website. Used only with your consent."
    }
  },
  de: {
    menuOpen: "Menü",
    menuClose: "Schließen",
    nav: ["Technologie", "Lösungen", "FAQ", "Angebot"],
    heroTitle: "Cedeno R2: Neue Maßstäbe für Flexibilität und Sicherheit von Massagerobotern",
    heroText:
      "Cedeno Technologies ist der exklusive deutsche Distributor für R2 Roboter-Massagelösungen, mit lokaler Beratung, Unterstützung bei der Implementierung, Schulung und After-Sales-Service für Wellness-Center, Hotels, Salons, Recovery-Studios, Seniorenresidenzen und Vertriebspartner.",
    metrics: [
      "flexible Massageaufsätze",
      "Steigerung des Verhältnisses Patient zu Bediener/Masseur:in",
      "Sicherheit durch redundante Kraftüberwachung",
      "Betrieb möglich"
    ],
    techEyebrow: "Kerntechnologie",
    techTitle: "Entwickelt für wiederholbare Technik, kontrollierte Kraft und sichere Abläufe.",
    techTitles: ["Körperpunkt-Erkennung", "Präzise Kraftkontrolle", "Tablet-Workflow", "Mehrere Sicherheitsebenen"],
    techTexts: [
      "Körperpunkte können mit Technikreplikation kombiniert werden, um eine konsistentere robotergestützte Servicequalität zu unterstützen.",
      "Redundante Kraftüberwachung und kontrolliertes Feedback helfen dem R2, Bewegungen während der Behandlung innerhalb definierter Sicherheitsgrenzen anzupassen.",
      "Eine geführte Oberfläche hilft Mitarbeitenden, Einstellungen, Körperbereiche und Serviceabläufe klar zu steuern.",
      "Bewegungsplanung, Kollisionserkennung, visuelle Schutzmechanismen, Soft Limits, Körpergrenzenschutz und Trajektorienüberwachung unterstützen eine sichere Nutzung."
    ],
    solutionsEyebrow: "Lösungen",
    solutionsTitle: "Robotermassage dort anbieten, wo Menschen bereits Entlastung suchen.",
    solutionsText: "Cedeno hilft Betreibern, vor dem Start das passende R2 Raumkonzept, Service-Menü, Sicherheitsnarrativ und den lokalen Supportweg zu wählen.",
    solutionTitles: ["Wellness-Center", "Recovery-Studios", "Hotels und Resorts", "Entspannungsmassage-Räume", "Private Wellness-Nutzer", "Distributoren"],
    solutionTexts: [
      "Für Spa- und Wellness-Betreiber, die gleichbleibende Rücken-, Schulter-, Bein- und Ganzkörperentspannung anbieten möchten, ohne von einer einzelnen erfahrenen Fachkraft abhängig zu sein.",
      "Für Fitnessstudios, Sports-Wellness-Center, Trainer und aktive Erwachsene, die Unterstützung nach Training, Reisen oder langen Arbeitstagen suchen.",
      "Für Hotels, Resorts und Clubs, die ein besonderes Wellness-Erlebnis im Zimmer oder Spa-Bereich als buchbares Upgrade anbieten möchten.",
      "Für Salons, Spas, Hotels und private Wellnessräume, die eine ruhige, komfortable und wiederholbare Entspannungsmassage mit klarer Betreuung anbieten möchten.",
      "Für Büroangestellte mit Schulter- und Rückenbelastung, Familienmitglieder mittleren und höheren Alters, Fitnessnutzer sowie technikaffine Haushalte mit geeignetem Installationsraum.",
      "Für Vertriebspartner, die Spa-, Salon-, Hotel-, Recovery- und Senior-Care-Betreibern ein differenziertes robotisches Wellnessprodukt anbieten möchten."
    ],
    solutionBullets: [
      "Standardisierte Body-Care-Protokolle",
      "Eine Person kann mehrere Räume betreuen",
      "Als Premium-Zusatzservice einsetzbar",
      "Entspannungsprogramme nach dem Training",
      "Szenarien für Beine, Taille, Rücken und Schultern",
      "Ergänzt Stretching- und Recovery-Angebote",
      "Ruhiger Gästeservice-Ablauf",
      "Erinnerungsstarke technologische Zusatzleistung",
      "Potenzial für Premium-Wellnesspakete",
      "Komfortorientierter Serviceablauf",
      "Klare Sicherheitsgrenzen",
      "Wiederholbares Entspannungsangebot",
      "Privater Body-Care-Raum zu Hause",
      "Wiederholbare Entspannungsroutinen",
      "Klare Installations- und Sicherheitsanforderungen",
      "Ausgezeichnete Produktgeschichte",
      "Schulungs- und Onboarding-Unterstützung",
      "Gespräche zu Gebiet und Zusammenarbeit"
    ],
    scenarioEyebrow: "Einsatzumgebungen",
    scenarioTitle: "Anpassbar an verschiedene Serviceräume",
    scenarioText:
      "R2 kann in Wellness-Centern, klassischen Wellnessräumen, Beauty-Salons, Community-Service-Centern, Räumen für Entspannungsmassage, Hotels, Fitnesscentern und Sports-Wellness-Centern eingesetzt werden. Jede Umgebung braucht ein eigenes Raumlayout, Kundenversprechen, Team-Workflow und Sicherheitskonzept.",
    scenarioTitles: [
      "Wellness-Center",
      "Klassisches Wellness-Center",
      "Beauty-Salon",
      "Community-Service-Center",
      "Entspannungsmassage",
      "Hotel",
      "Fitnesscenter",
      "Sports-Wellness-Center"
    ],
    scenarioTexts: [
      "Robotischer Massageraum für standardisierte kommerzielle Body-Care-Services.",
      "Bestehende Massageräume mit robotergestützter Servicekapazität erweitern.",
      "Entspannung und körperformende Begleiterlebnisse neben Beauty-Behandlungen anbieten.",
      "Betreuten Wellness-Zugang für lokale Gesundheits- und Entspannungsprogramme schaffen.",
      "Ruhige, wiederholbare Körperentspannung für Gäste anbieten, die ein komfortables und geführtes Wellness-Erlebnis suchen.",
      "Buchbare Wellness-Services in Zimmern, Spa-Bereichen oder privaten Suiten schaffen.",
      "Mitglieder nach dem Training mit wiederholbaren Recovery- und Entspannungssitzungen unterstützen.",
      "Athleten und aktive Nutzer mit strukturierten Body-Care-Abläufen nach dem Sport bedienen."
    ],
    trustEyebrows: ["Vertrauenssignale", "Lokaler Service in Deutschland"],
    trustTitles: ["Produktnachweis, lokale Verantwortung", "Cedeno Begleitung von der Planung bis zum After-Sales-Service."],
    trustTexts: [
      "Cedeno nutzt Produktnachweise, technische Dokumentation und lokale Serviceplanung, damit deutsche Käufer R2 vor Raumsetup, Teamschulung, Wartung und Angebot realistisch bewerten können.",
      "Cedeno ist die deutsche Anlaufstelle für R2 Kaufplanung, Installationskoordination, Teamschulung, Wartung und fortlaufende Betreiberunterstützung."
    ],
    trustServiceTitles: [
      "R2 Planung",
      "After-Sales-Service-Team",
      "Implementierungsunterstützung",
      "Langfristiger Partnerpfad"
    ],
    trustServiceTexts: [
      "Cedeno koordiniert die lokale R2 Kaufplanung und Gespräche zur kommerziellen Implementierung in Deutschland.",
      "Lokale Servicekoordination für Schulung, Fehlersuche, Wartung und Betreiberunterstützung.",
      "Raumplanung, Workflow-Einrichtung, Sicherheitserklärung und Startvorbereitung für kommerzielle Betreiber.",
      "Unterstützung für Wellness-Center, Hotels, Salons, Recovery-Studios und Vertriebspartner."
    ],
    faqEyebrow: "FAQ",
    faqTitle: "Käuferfragen direkt beantworten.",
    faqSummaries: [
      "Welchen geschäftlichen Mehrwert bringt der KI-Massageroboter für meinen Standort?",
      "Wie unterscheidet sich Cedeno R2 von professionellen menschlichen Therapeuten?",
      "Wie wird die körperliche Sicherheit während einer autonomen KI-Robotermassage gewährleistet?",
      "Welche kommerziellen Szenarien und Geschäftsmodelle eignen sich ideal für dieses Gerät?",
      "Welche lokale Installation, Schulung und After-Sales-Unterstützung bietet Cedeno für R2 Partner in Deutschland und der DACH-Region?"
    ],
    faqTexts: [
      "Cedeno R2 hilft Betreibern, ein wiederholbares Roboter-Massageangebot einzuführen. Ein Betrieb rund um die Uhr ist möglich, und das System ist auf eine Steigerung des Verhältnisses Patient zu Bediener/Masseur:in um 400 % ausgelegt.",
      "Cedeno R2 ist dafür konzipiert, kommerzielle Wellness-Workflows zu unterstützen, nicht professionelles Urteilsvermögen zu ersetzen. Seine 3 flexiblen Massageaufsätze und der wiederholbare Aufbau helfen Betreibern, geführte Massageangebote gemeinsam mit ihrem Personal anzubieten.",
      "Cedeno R2 bietet doppelte Sicherheit durch redundante Kraftüberwachung. Cedeno unterstützt Planung, Schulung und Sicherheitshinweise für jeden Betriebsstandort.",
      "Cedeno R2 unterstützt kommerzielle Wellness-Center, Recovery-Studios, Hotels und Resorts, Entspannungsmassageräume sowie Vertriebspartner. Cedeno hilft jedem Betreiber bei der Planung des R2-Raums und Service-Workflows.",
      "Cedeno unterstützt R2 Partner in Deutschland und der DACH-Region mit Planung, Schulung, Wartungskoordination und After-Sales-Support. Kontaktieren Sie Cedeno, um eine lokale R2-Implementierung zu besprechen."
    ],
    quoteEyebrow: "Kontakt",
    quoteTitle: "Von Anfang an bessere Anfragen erfassen.",
    quoteText:
      "Nennen Sie Markt, Serviceraum, Zielgruppe, Zeitplan und Menge. Wir ordnen Ihre Anfrage nach privater Nutzung, B2B-Implementierung, Vertrieb oder Partnerschaft ein.",
    formLabels: ["Name", "E-Mail", "Kundentyp", "Interessiertes Produkt", "Nachricht"],
    placeholders: ["Ihr Name", "name@firma.de", "Nennen Sie Markt, Menge, Zeitplan und Einsatzfall."],
    customerTypeOptions: ["Bitte wählen", "Wellness-Center", "Recovery-Studio", "Hotel oder Resort", "Senioreneinrichtung", "Distributor", "Privatnutzer"],
    productOptions: ["R2", "Noch nicht sicher"],
    formButton: "Anfrage senden",
    formSubmitting: "Wird gesendet...",
    leadSaved: (name) => `Vielen Dank, ${name}. Ihre Anfrage wurde an Cedeno gesendet.`,
    leadError: "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an info@cedeno-tech.de.",
    validation: {
      nameRequired: "Bitte geben Sie Ihren Namen ein.",
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      typeRequired: "Bitte wählen Sie einen Kundentyp aus.",
      productRequired: "Bitte wählen Sie ein Produkt aus."
    },
    footer: "Smart Robotics. Intelligent Results.",
    footerContact: "Kontakt: info@cedeno-tech.de",
    footerNavHeading: "Navigation",
    footerNavLinks: ["Technologie", "Lösungen", "FAQ", "Angebot"],
    socialHeading: "Social Media",
    legalLinks: ["AGB", "Impressum", "Datenschutz"],
    cookieSettings: "Cookie-Einstellungen",
    consent: {
      title: "Datenschutz & Einwilligung",
      text:
        "Wir verwenden Cookies und ähnliche Technologien, um unsere Website bereitzustellen und, mit Ihrer Einwilligung, zu verbessern. Notwendige Cookies sind für den Betrieb erforderlich. Sie können Ihre Einwilligung jederzeit widerrufen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
      settings: "Einstellungen",
      save: "Auswahl speichern",
      necessary: "Nur notwendige",
      accept: "Alle akzeptieren",
      necessaryCookies: "Notwendige Cookies",
      necessaryStatus: "Erforderlich und immer aktiv",
      necessaryDescription: "Technisch für den Betrieb der Website erforderlich. Kann nicht deaktiviert werden.",
      analyticsCookies: "Analyse-Cookies",
      analyticsDescription: "Optionale Messung zur Verbesserung der Website. Wird nur mit Ihrer Einwilligung verwendet."
    }
  }
};

function setText(selector, value) {
  const node = document.querySelector(selector);
  if (node && value) node.textContent = value;
}

function setAll(selector, values) {
  document.querySelectorAll(selector).forEach((node, index) => {
    if (values[index]) node.textContent = values[index];
  });
}

function applyLanguage(lang) {
  const nextLang = dictionary[lang] ? lang : "en";
  const copy = dictionary[nextLang];
  currentLang = nextLang;
  localStorage.setItem("cedeno-lang", nextLang);
  document.documentElement.lang = nextLang;
  langButtons.forEach((button) => {
    const active = button.dataset.lang === nextLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  setAll(".site-nav a", copy.nav);
  setText(".nav-toggle", body.classList.contains("nav-open") ? copy.menuClose : copy.menuOpen);
  setText(".hero-copy h1", copy.heroTitle);
  setText(".hero-lede", copy.heroText);
  setAll(".metric-row span", copy.metrics);
  setText("#technology .section-heading .eyebrow", copy.techEyebrow);
  setText("#technology .section-heading h2", copy.techTitle);
  setAll(".tech-card h3", copy.techTitles);
  setAll(".tech-card p", copy.techTexts);
  setText("#solutions .section-heading .eyebrow", copy.solutionsEyebrow);
  setText("#solutions .section-heading h2", copy.solutionsTitle);
  setText("#solutions .section-heading > p:not(.eyebrow)", copy.solutionsText);
  setAll(".solution-card h3", copy.solutionTitles);
  setAll(".solution-card p", copy.solutionTexts);
  setAll(".solution-card li", copy.solutionBullets);
  setText(".scenario-intro .eyebrow", copy.scenarioEyebrow);
  setText(".scenario-intro h3", copy.scenarioTitle);
  setText(".scenario-intro p:last-child", copy.scenarioText);
  setAll(".scenario-card strong", copy.scenarioTitles);
  setAll(".scenario-card span", copy.scenarioTexts);
  setAll(".trust-card > div:not(.service-proof-grid) .eyebrow", copy.trustEyebrows);
  setAll(".trust-card > div:not(.service-proof-grid) h2", copy.trustTitles);
  setAll(".trust-card > div:not(.service-proof-grid) > p:last-child", copy.trustTexts);
  setAll(".service-proof-grid strong", copy.trustServiceTitles);
  setAll(".service-proof-grid p", copy.trustServiceTexts);
  setText(".faq-section .section-heading .eyebrow", copy.faqEyebrow);
  setText(".faq-section .section-heading h2", copy.faqTitle);
  setAll(".faq-list summary", copy.faqSummaries);
  setAll(".faq-list details p", copy.faqTexts);
  setText(".quote-copy .eyebrow", copy.quoteEyebrow);
  setText(".quote-copy h2", copy.quoteTitle);
  setText(".quote-copy p:last-child", copy.quoteText);
  document.querySelectorAll(".lead-form label").forEach((label, index) => {
    const firstText = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    if (firstText && copy.formLabels[index]) firstText.nodeValue = `\n            ${copy.formLabels[index]}\n            `;
  });
  document.querySelector('input[name="name"]')?.setAttribute("placeholder", copy.placeholders[0]);
  document.querySelector('input[name="email"]')?.setAttribute("placeholder", copy.placeholders[1]);
  document.querySelector('textarea[name="message"]')?.setAttribute("placeholder", copy.placeholders[2]);
  setAll('select[name="type"] option', copy.customerTypeOptions);
  setAll('select[name="product"] option', copy.productOptions);
  setText(".lead-form button", copy.formButton);
  setText(".site-footer p", copy.footer);
  setText(".footer-contact", copy.footerContact);
  setText(".footer-links h2", copy.footerNavHeading);
  setAll(".footer-links a", copy.footerNavLinks);
  setText(".footer-social h2", copy.socialHeading);
  setAll(".legal-links a", copy.legalLinks);
  setText(".footer-cookie-settings", copy.cookieSettings);
  setText(".cookie-consent h2", copy.consent.title);
  const consentText = document.querySelector(".cookie-consent p");
  if (consentText) {
    const linkText = currentLang === "de" ? "Datenschutzerklärung" : "privacy policy";
    consentText.innerHTML = `${copy.consent.text.replace(linkText, `<a href="privacy.html">${linkText}</a>`)}`;
  }
  const settingsOpen = document.querySelector(".consent-settings")?.hidden === false;
  setText('[data-consent-action="settings"]', settingsOpen ? copy.consent.save : copy.consent.settings);
  setText('[data-consent-action="necessary"]', copy.consent.necessary);
  setText('[data-consent-action="accept"]', copy.consent.accept);
  setText(".necessary-cookie-label", copy.consent.necessaryCookies);
  setText(".necessary-cookie-description", copy.consent.necessaryDescription);
  setText(".analytics-cookie-label", copy.consent.analyticsCookies);
  setText(".analytics-cookie-description", copy.consent.analyticsDescription);
  document
    .querySelector(".necessary-cookie-control input")
    ?.setAttribute("aria-label", `${copy.consent.necessaryCookies}. ${copy.consent.necessaryStatus}.`);
  document
    .querySelector(".analytics-cookie-control input")
    ?.setAttribute("aria-label", copy.consent.analyticsCookies);
  clearFormValidity();
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang || "en"));
});

applyLanguage(currentLang);

const leadForm = document.querySelector("#lead-form");
const formNote = document.querySelector("#form-note");
const cookieConsent = document.querySelector(".cookie-consent");
const consentSettings = document.querySelector(".consent-settings");
const settingsButton = document.querySelector('[data-consent-action="settings"]');
const analyticsCookie = document.querySelector(".analytics-cookie-control input");
const storedConsent = localStorage.getItem("cedeno-cookie-consent");

if (storedConsent) {
  cookieConsent?.classList.add("hidden");
}

if (analyticsCookie) {
  analyticsCookie.checked = storedConsent === "accept";
}

function setConsentSettingsOpen(open) {
  if (!consentSettings || !settingsButton) return;
  consentSettings.hidden = !open;
  cookieConsent?.classList.toggle("settings-open", open);
  settingsButton.setAttribute("aria-expanded", open ? "true" : "false");
  settingsButton.textContent = open
    ? dictionary[currentLang].consent.save
    : dictionary[currentLang].consent.settings;
}

function storeConsent(value) {
  localStorage.setItem("cedeno-cookie-consent", value);
  if (analyticsCookie) analyticsCookie.checked = value === "accept";
  setConsentSettingsOpen(false);
  cookieConsent?.classList.add("hidden");
}

document.querySelectorAll("[data-consent-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.consentAction;
    if (action === "settings") {
      if (consentSettings?.hidden) {
        setConsentSettingsOpen(true);
        return;
      }
      const selectedConsent = analyticsCookie?.checked ? "accept" : "necessary";
      storeConsent(selectedConsent);
      return;
    }
    storeConsent(action === "accept" ? "accept" : "necessary");
  });
});

document.querySelector(".footer-cookie-settings")?.addEventListener("click", () => {
  cookieConsent?.classList.remove("hidden");
  setConsentSettingsOpen(false);
});

function setFieldValidity(field) {
  const messages = dictionary[currentLang].validation;
  field.setCustomValidity("");
  if (field.validity.valueMissing) {
    const requiredMessages = {
      name: messages.nameRequired,
      email: messages.emailRequired,
      type: messages.typeRequired,
      product: messages.productRequired
    };
    field.setCustomValidity(requiredMessages[field.name] || messages.nameRequired);
  } else if (field.validity.typeMismatch && field.name === "email") {
    field.setCustomValidity(messages.emailInvalid);
  }
}

function clearFormValidity() {
  document.querySelectorAll("#lead-form input, #lead-form select, #lead-form textarea").forEach((field) => {
    field.setCustomValidity("");
  });
}

document.querySelectorAll("#lead-form input, #lead-form select, #lead-form textarea").forEach((field) => {
  field.addEventListener("invalid", () => setFieldValidity(field));
  field.addEventListener("input", () => {
    field.setCustomValidity("");
    if (field.name === "email" && field.value) setFieldValidity(field);
  });
  field.addEventListener("change", () => field.setCustomValidity(""));
});

leadForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const fields = Array.from(leadForm.querySelectorAll("input, select, textarea"));
  const firstInvalid = fields.find((field) => {
    setFieldValidity(field);
    return !field.checkValidity();
  });
  if (firstInvalid) {
    firstInvalid.reportValidity();
    return;
  }
  const copy = dictionary[currentLang];
  const button = leadForm.querySelector('button[type="submit"]');
  const data = Object.fromEntries(new FormData(leadForm).entries());
  const payload = window.CedenoLeadCapture.buildLeadPayload(data, {
    language: currentLang,
    source: window.location.href
  });

  if (button) {
    button.disabled = true;
    button.textContent = copy.formSubmitting;
  }
  if (formNote) {
    formNote.dataset.state = "pending";
    formNote.textContent = copy.formSubmitting;
  }

  try {
    await window.CedenoLeadCapture.submitLead(payload);
    if (formNote) {
      formNote.dataset.state = "success";
      formNote.textContent = copy.leadSaved(payload.name);
    }
    leadForm.reset();
    leadForm.classList.add("submitted");
  } catch (error) {
    console.error("Lead submission failed", error);
    if (formNote) {
      formNote.dataset.state = "error";
      formNote.textContent = copy.leadError;
    }
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = copy.formButton;
    }
  }
});
