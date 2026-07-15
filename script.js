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

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const node = entry.target;
      const target = Number(node.dataset.count || 0);
      let current = 0;
      const frames = 36;
      const step = Math.max(1, Math.ceil(target / frames));
      const tick = () => {
        current = Math.min(target, current + step);
        node.textContent = String(current);
        if (current < target) requestAnimationFrame(tick);
      };
      tick();
      countObserver.unobserve(node);
    });
  },
  { threshold: 0.8 }
);

document.querySelectorAll("[data-count]").forEach((element) => countObserver.observe(element));

const tabButtons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".product-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    tabButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });
    panels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `panel-${product}`);
    });
  });
});

const rooms = document.querySelector("#rooms");
const roomsValue = document.querySelector("#rooms-value");
const staffValue = document.querySelector("#staff-value");
const sessionsValue = document.querySelector("#sessions-value");

function updateRoi() {
  if (!rooms || !roomsValue || !staffValue || !sessionsValue) return;
  const value = Number(rooms.value);
  roomsValue.textContent = String(value);
  staffValue.textContent = String(Math.max(1, Math.ceil(value / 4)));
  sessionsValue.textContent = String(value * 8);
}

rooms?.addEventListener("input", updateRoi);
updateRoi();

const dictionary = {
  en: {
    menuOpen: "Menu",
    menuClose: "Close",
    nav: ["Products", "Technology", "Solutions", "Compare", "Resources", "Get Quote"],
    heroEyebrow: "Cedeno Technologies · Germany",
    heroTitle: "R2 Robotic Massage Arm for German Wellness Operators",
    heroText:
      "Cedeno Technologies is the exclusive German distributor for R2 robotic massage solutions, with local consulting, deployment support, training, and after-sales service for wellness centers, hotels, salons, recovery studios, senior living operators, and channel partners.",
    heroButtons: ["Book a demo", "Request R2 product sheet"],
    metrics: ["R2 functions", "rooms per supervisor", "N force range", "% space saving"],
    answerEyebrow: "Product answer",
    answerTitle: "What is the Cedeno R2 solution?",
    answerText:
      "R2 is a robotic massage arm for standardized wellness and body-care services. Cedeno brings it to German operators with local planning, installation coordination, staff training, after-sales service, and clear safety boundaries.",
    productsEyebrow: "Products",
    productsTitle: "One R2 platform for commercial wellness rooms.",
    productsText: "Review the functions, room workflow, safety boundaries, and commercial fit before choosing a deployment plan.",
    productCard: {
      eyebrow: "EFBR2",
      title: "R2: One unit, six functions",
      text:
        "Designed for commercial treatment rooms and human-robot collaboration. R2 combines acupoint massage, shockwave, radio frequency, cupping, moxibustion, and facial care into one robot-assisted platform.",
      specsTitle: "Core robot body specifications"
    },
    techEyebrow: "Core technology",
    techTitle: "Built for repeatable technique, controlled force, and safer operations.",
    techTitles: ["Advanced body point recognition", "Precision force control", "Tablet workflow", "Multiple safety layers"],
    techTexts: [
      "Body points can be combined with technique replication to support more consistent robot-assisted service delivery.",
      "The R2 robot body includes a single-axis force sensor with 200 N range and 0.06 N accuracy for controlled motion feedback.",
      "A guided interface helps staff manage settings, body areas, and service flow without turning the product into a black box.",
      "Motion planning, collision detection, visual safeguards, soft limits, body boundary protection, and trajectory monitoring support safer use."
    ],
    businessEyebrow: "Business value",
    businessTitle: "Greater efficiency, lower operating pressure.",
    businessText:
      "The brochure positions R2 as a commercial solution where one therapist can oversee up to four robots at once, helping reduce reliance on highly specialized labor while maintaining standardized service quality.",
    roiLabel: "Robot rooms",
    roiSuffixes: ["robot rooms", "staff supervisor", "possible daily sessions"],
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
    compareEyebrow: "Compare options",
    compareTitle: "How Cedeno R2 compares with robotic massage alternatives.",
    compareText:
      "Buyers comparing massage robots usually care about ownership model, use scenario, service capacity, safety, and whether the product can be deployed beyond a single demo room.",
    compareHeaders: ["Buyer question", "What to know", "Cedeno answer"],
    compareCells: [
      "Cedeno R2 vs r*S*tor",
      "r*S*tor presents AI-powered robotic body therapy for wellness businesses, with ROI and media proof.",
      "Cedeno gives German buyers visible R2 specifications, six-function service logic, safety layers, commercial scenarios, training, and local after-sales support.",
      "Cedeno R2 vs R*b*R*l*x",
      "R*b*R*l*x is a local robot massage salon model with booking, pricing, and a Munich-focused store experience.",
      "Cedeno is positioned for operators who want to own, deploy, or distribute R2 robotic massage systems across multiple commercial scenarios in Germany.",
      "Cedeno R2 vs Ghaien / Cobot*cs",
      "Ghaien / Cobot*cs builds authority through a mature spa equipment ecosystem, catalogs, news, and client portfolio.",
      "Cedeno can be clearer for robotic massage buyers by connecting R2 specs, end effectors, room layouts, safety boundaries, local service, and quote actions on the same path.",
      "Robotic massage arm vs massage chair",
      "A massage chair is a fixed consumer device. It usually has limited room workflow value and cannot easily support staff-led commercial protocols.",
      "Cedeno R2 is a robot-assisted platform with six integrated functions, commercial deployment scenarios, staff oversight, and service-room positioning.",
      "Robotic massage vs human massage",
      "Human massage offers judgment and care, but quality may vary by therapist fatigue, staffing, training, and scheduling.",
      "Cedeno does not replace professional judgment; it helps operators standardize selected body-care routines with repeatable robot-assisted motion and safety workflows."
    ],
    trustEyebrows: ["Trust signals", "Germany representation"],
    trustTitles: ["Product proof, local responsibility", "Cedeno is Eachifuture's exclusive German agent."],
    trustTexts: [
      "Cedeno uses product proof, technical documentation, and local service planning to help German buyers evaluate R2 before discussing room setup, staff training, maintenance, and quote terms.",
      "Cedeno represents Eachifuture R2 in Germany with a dedicated local after-sales service team, so operators can plan purchase, deployment, training, maintenance, and long-term support through one accountable German partner."
    ],
    trustServiceTitles: [
      "Exclusive German agent",
      "After-sales service team",
      "Deployment support",
      "Long-term partner path"
    ],
    trustServiceTexts: [
      "Official Cedeno contact for R2 sales, demo planning, and partner discussions in Germany.",
      "Local service coordination for training, troubleshooting, maintenance, and operator support.",
      "Room planning, workflow setup, safety explanation, and launch preparation for commercial operators.",
      "Support for wellness centers, hotels, salons, recovery studios, and distribution partners."
    ],
    resourcesEyebrow: "Knowledge center",
    resourcesTitle: "Useful answers for buyers, operators, and partners.",
    resourcesText:
      "Each article preview below is written as real buyer education. The goal is to help people decide what model, room setup, and operating path fits them.",
    resourceTitles: [
      "What is a robotic massage arm?",
      "R2 functions",
      "Robotic massage vs massage chair",
      "Safety and contraindications",
      "Distributor guide",
      "Room ROI and operations"
    ],
    resourceTexts: [
      "A robotic massage arm is a programmable body-care system that uses a robot body, end effectors, sensors, and software workflows to deliver repeatable relaxation or wellness sessions under defined safety boundaries.",
      "R2 is a six-function commercial solution for acupoint massage, shockwave, radio frequency, cupping therapy, moxibustion, and facial care. Buyers should evaluate it by service menu, room type, staff workflow, and budget.",
      "A massage chair is usually a fixed consumer device. A robotic massage arm can support commercial rooms, staff supervision, modular end effectors, and service positioning for wellness centers, hotels, salons, and recovery studios.",
      "Operators should publish suitable users, unsuitable users, emergency stop instructions, movement limits, cleaning routines, and medical-claim boundaries before offering robot-assisted massage sessions.",
      "Distributors need product differentiation, installation requirements, after-sales policy, training materials, territory terms, and proof assets such as awards, media coverage, product specifications, and deployment scenarios.",
      "A commercial buyer should calculate room count, daily sessions, average order value, staff supervision ratio, maintenance cost, payback period, and whether R2 can support a paid upgrade or membership service."
    ],
    resourceLinks: ["Ask for the buyer checklist", "View R2 product details", "View comparison", "Request safety notes", "Discuss distribution", "Estimate a deployment"],
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
      "It democratizes premium wellness, turning expert massage into affordable daily luxury for all. Eliminating steep prices, long booking waits and inconsistent human massage quality, it delivers accurate, on-demand robotic therapy. For your venue, this tech unlocks high-margin, repeatable wellness services accessible round-the-clock, turning your space into a hassle-free wellbeing hub.",
      "Our R2 commercial robotic arm replicates master massage techniques via an endlessly expanding AI knowledge graph and AI vision that scans the body in seconds to customize precise treatment. It delivers consistent, steady-pressure massage without skill gaps, supporting rather than replacing therapists. Built for German spas, hotels and salons, this professional-grade machine features six integrated wellness functions, far outperforming ordinary consumer massage chairs.",
      "Unlike easily fatigued human therapists unable to quantify massage force in newtons, Cedeno's AI massage robot delivers mathematically precise therapy by capturing physical feedback 1,000 times per second to eliminate mechanical deviations, offering unmatched safety and consistent treatment; an easily accessible physical emergency stop button instantly cuts power for urgent safety control.",
      "Engineered for high-end, high-footfall venues, including luxury spas, sports clubs, fitness centers, hotels, airport lounges and corporate offices. It fits flexible business models: standalone premium self-service amenity, add-on upgrade to existing offerings, or dedicated automated wellness zone. Operating autonomously with minimal single-staff oversight, it drives steady recurring revenue with negligible extra labor costs.",
      "Cedeno offers on-site space planning, installation finished within one hour, comprehensive staff training requiring no prior massage expertise, and local on-site after-sales support that keeps your daily operations uninterrupted. For channel partners, we provide exclusive territorial terms and dedicated sales support to fuel regional business growth."
    ],
    quoteEyebrow: "Conversion",
    quoteTitle: "Collect better leads from day one.",
    quoteText:
      "Tell us your market, service room, target users, timeline, and quantity. We will route your request by home use, B2B deployment, distributor opportunity, or partnership fit.",
    formLabels: ["Name", "Email", "Customer type", "Interested product", "Message"],
    placeholders: ["Your name", "name@company.com", "Tell us your market, quantity, timeline, and use case."],
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
    footerNavHeading: "navigation",
    footerNavLinks: ["Products", "Technology", "Solutions", "Compare", "Resources", "Contact"],
    socialHeading: "Social Media",
    legalLinks: ["Terms and Conditions", "Imprint", "Data protection"],
    consent: {
      title: "Data protection & consent",
      text:
        "We use cookies and similar technologies to provide and, with your consent, improve our website. Necessary cookies are required for its operation. You can withdraw your consent at any time. Further information can be found in our privacy policy.",
      settings: "Settings",
      necessary: "Only necessary",
      accept: "All accept",
      necessaryCookies: "Necessary cookies",
      analyticsCookies: "Analytics cookies",
      detailTitles: ["Controller", "Cookies", "Contact form", "External links", "Your rights"],
      detailTexts: [
        "Cedeno Technologies is responsible for this website and for handling enquiries sent through the site.",
        "Necessary cookies keep the website usable. Optional analytics cookies are only used after consent.",
        "Information submitted through the form is used to answer your enquiry, prepare demos, and discuss R2 deployment.",
        "Social media links lead to external platforms such as LinkedIn, Instagram, and YouTube, which process data under their own policies.",
        "You may request access, correction, deletion, restriction, objection, portability, or withdrawal of consent where applicable."
      ]
    }
  },
  de: {
    menuOpen: "Menü",
    menuClose: "Schließen",
    nav: ["Produkte", "Technologie", "Lösungen", "Vergleich", "Ressourcen", "Angebot"],
    heroEyebrow: "Cedeno Technologies · Deutschland",
    heroTitle: "R2 Roboter-Massagearm für Wellness-Betreiber in Deutschland",
    heroText:
      "Cedeno Technologies ist der exklusive deutsche Distributor für R2 Roboter-Massagelösungen, mit lokaler Beratung, Unterstützung bei der Implementierung, Schulung und After-Sales-Service für Wellness-Center, Hotels, Salons, Recovery-Studios, Seniorenresidenzen und Vertriebspartner.",
    heroButtons: ["Demo buchen", "R2 Produktdatenblatt anfragen"],
    metrics: ["R2 Funktionen", "Räume pro Betreuung", "N Kraftbereich", "% Platzersparnis"],
    answerEyebrow: "Produktantwort",
    answerTitle: "Was ist die Cedeno R2 Lösung?",
    answerText:
      "R2 ist ein Roboter-Massagearm für standardisierte Wellness- und Body-Care-Services. Cedeno bringt R2 zu deutschen Betreibern mit lokaler Planung, Installationskoordination, Teamschulung, After-Sales-Service und klaren Sicherheitsgrenzen.",
    productsEyebrow: "Produkte",
    productsTitle: "Eine R2 Plattform für kommerzielle Wellnessräume.",
    productsText: "Prüfen Sie Funktionen, Raumablauf, Sicherheitsgrenzen und wirtschaftliche Eignung, bevor Sie einen Implementierungsplan wählen.",
    productCard: {
      eyebrow: "EFBR2",
      title: "R2: Ein Gerät, sechs Funktionen",
      text:
        "Entwickelt für kommerzielle Behandlungsräume und Mensch-Roboter-Zusammenarbeit. R2 kombiniert Akupunktmassage, Shockwave, Radiofrequenz, Schröpfen, Moxibustion und Gesichtspflege in einer robotergestützten Plattform.",
      specsTitle: "Kernspezifikationen des Roboterkörpers"
    },
    techEyebrow: "Kerntechnologie",
    techTitle: "Entwickelt für wiederholbare Technik, kontrollierte Kraft und sichere Abläufe.",
    techTitles: ["Körperpunkt-Erkennung", "Präzise Kraftkontrolle", "Tablet-Workflow", "Mehrere Sicherheitsebenen"],
    techTexts: [
      "Körperpunkte können mit Technikreplikation kombiniert werden, um eine konsistentere robotergestützte Servicequalität zu unterstützen.",
      "Der R2 Roboterkörper enthält einen einachsigen Kraftsensor mit 200 N Bereich und 0,06 N Genauigkeit für kontrolliertes Bewegungsfeedback.",
      "Eine geführte Oberfläche hilft Mitarbeitenden, Einstellungen, Körperbereiche und Serviceabläufe klar zu steuern.",
      "Bewegungsplanung, Kollisionserkennung, visuelle Schutzmechanismen, Soft Limits, Körpergrenzenschutz und Trajektorienüberwachung unterstützen eine sichere Nutzung."
    ],
    businessEyebrow: "Geschäftswert",
    businessTitle: "Mehr Effizienz, weniger operativer Druck.",
    businessText:
      "R2 ist als kommerzielle Lösung positioniert, bei der eine Fachkraft bis zu vier Roboter gleichzeitig betreuen kann. Das reduziert Abhängigkeit von hochspezialisierten Personalressourcen und unterstützt standardisierte Servicequalität.",
    roiLabel: "Roboterräume",
    roiSuffixes: ["Roboterräume", "Betreuungsperson", "mögliche Sitzungen pro Tag"],
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
    compareEyebrow: "Optionen vergleichen",
    compareTitle: "Wie Cedeno R2 im Vergleich zu anderen Robotermassage-Angeboten steht.",
    compareText:
      "Käufer vergleichen meistens Besitzmodell, Einsatzszenario, Servicekapazität, Sicherheit und ob das Produkt über einen einzelnen Demoraum hinaus skaliert werden kann.",
    compareHeaders: ["Käuferfrage", "Wichtig zu wissen", "Cedeno Antwort"],
    compareCells: [
      "Cedeno R2 vs r*S*tor",
      "r*S*tor zeigt KI-gestützte robotische Körpertherapie für Wellnessbetriebe, mit ROI-Argumenten und Mediennachweisen.",
      "Cedeno bietet deutschen Käufern klare R2 Spezifikationen, sechs Funktionen, Sicherheitsebenen, Einsatzszenarien, Training und lokalen After-Sales-Support.",
      "Cedeno R2 vs R*b*R*l*x",
      "R*b*R*l*x ist ein lokales Robotermassage-Studio mit Buchung, Preisen und einem münchenbezogenen Store-Erlebnis.",
      "Cedeno ist für Betreiber positioniert, die R2 Robotermassage-Systeme besitzen, einsetzen oder über mehrere kommerzielle Szenarien in Deutschland vertreiben möchten.",
      "Cedeno R2 vs Ghaien / Cobot*cs",
      "Ghaien / Cobot*cs baut Autorität über ein reifes Spa-Equipment-Ökosystem, Kataloge, News und Kundenportfolio auf.",
      "Cedeno macht die Bewertung klarer, indem R2 Spezifikationen, Endeffektoren, Raumlayouts, Sicherheitsgrenzen, lokaler Service und Anfragepfad verbunden werden.",
      "Roboter-Massagearm vs Massagesessel",
      "Ein Massagesessel ist meist ein festes Consumer-Gerät. Er unterstützt kommerzielle Raumabläufe und personalgeführte Protokolle nur begrenzt.",
      "Cedeno R2 ist eine robotergestützte Plattform mit sechs integrierten Funktionen, kommerziellen Einsatzszenarien, Personalaufsicht und Serviceraum-Positionierung.",
      "Robotermassage vs Humanmassage",
      "Humanmassage bietet Urteilsvermögen und Fürsorge, Qualität kann jedoch durch Ermüdung, Personalplanung, Training und Termine schwanken.",
      "Cedeno ersetzt kein professionelles Urteilsvermögen; es hilft Betreibern, ausgewählte Body-Care-Routinen mit wiederholbaren Bewegungen und Sicherheitsabläufen zu standardisieren."
    ],
    trustEyebrows: ["Vertrauenssignale", "Deutschlandvertretung"],
    trustTitles: ["Produktnachweis, lokale Verantwortung", "Cedeno ist der exklusive Deutschland-Agent von Eachifuture."],
    trustTexts: [
      "Cedeno nutzt Produktnachweise, technische Dokumentation und lokale Serviceplanung, damit deutsche Käufer R2 vor Raumsetup, Teamschulung, Wartung und Angebot realistisch bewerten können.",
      "Cedeno vertritt Eachifuture R2 in Deutschland mit einem eigenen lokalen After-Sales-Service-Team. Betreiber können Kauf, Implementierung, Schulung, Wartung und langfristige Unterstützung über einen verantwortlichen deutschen Partner planen."
    ],
    trustServiceTitles: [
      "Exklusiver Deutschland-Agent",
      "After-Sales-Service-Team",
      "Implementierungsunterstützung",
      "Langfristiger Partnerpfad"
    ],
    trustServiceTexts: [
      "Offizieller Cedeno Kontakt für R2 Vertrieb, Demo-Planung und Partnergespräche in Deutschland.",
      "Lokale Servicekoordination für Schulung, Fehlersuche, Wartung und Betreiberunterstützung.",
      "Raumplanung, Workflow-Einrichtung, Sicherheitserklärung und Startvorbereitung für kommerzielle Betreiber.",
      "Unterstützung für Wellness-Center, Hotels, Salons, Recovery-Studios und Vertriebspartner."
    ],
    resourcesEyebrow: "Wissenszentrum",
    resourcesTitle: "Nützliche Antworten für Käufer, Betreiber und Partner.",
    resourcesText:
      "Die Artikelvorschauen sind als echte Käuferinformation geschrieben. Ziel ist, Modell, Raumsetup und Betriebsweg leichter bewerten zu können.",
    resourceTitles: [
      "Was ist ein Roboter-Massagearm?",
      "R2 Funktionen",
      "Robotermassage vs Massagesessel",
      "Sicherheit und Kontraindikationen",
      "Leitfaden für Distributoren",
      "Raum-ROI und Betrieb"
    ],
    resourceTexts: [
      "Ein Roboter-Massagearm ist ein programmierbares Body-Care-System mit Roboterkörper, Endeffektoren, Sensoren und Software-Workflows für wiederholbare Entspannungs- oder Wellness-Sitzungen innerhalb definierter Sicherheitsgrenzen.",
      "R2 ist eine kommerzielle Sechs-Funktionen-Lösung für Akupunktmassage, Shockwave, Radiofrequenz, Schröpfen, Moxibustion und Gesichtspflege. Käufer sollten Service-Menü, Raumtyp, Team-Workflow und Budget prüfen.",
      "Ein Massagesessel ist meist ein festes Consumer-Gerät. Ein Roboter-Massagearm unterstützt kommerzielle Räume, Personalaufsicht, modulare Endeffektoren und Servicepositionierung für Wellness-Center, Hotels, Salons und Recovery-Studios.",
      "Betreiber sollten geeignete und ungeeignete Nutzer, Not-Aus-Hinweise, Bewegungsgrenzen, Reinigungsabläufe und Grenzen medizinischer Aussagen veröffentlichen.",
      "Distributoren benötigen Produktdifferenzierung, Installationsanforderungen, After-Sales-Regeln, Schulungsmaterialien, Gebietsbedingungen und Nachweise wie Awards, Medien, Spezifikationen und Einsatzszenarien.",
      "Ein kommerzieller Käufer sollte Raumanzahl, tägliche Sitzungen, Durchschnittsumsatz, Betreuungsverhältnis, Wartungskosten, Amortisation und Upgrade- oder Mitgliedschaftspotenzial berechnen."
    ],
    resourceLinks: ["Buyer-Checkliste anfragen", "R2 Produktdetails ansehen", "Vergleich ansehen", "Sicherheitshinweise anfragen", "Distribution besprechen", "Implementierung schätzen"],
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
      "Er demokratisiert Premium-Wellness und macht hochwertige Massage als erschwinglichen täglichen Luxus zugänglich. Statt hoher Preise, langer Wartezeiten und schwankender menschlicher Massagequalität bietet er präzise, bedarfsgerechte robotische Wellness-Anwendungen. Für Ihren Standort eröffnet diese Technologie margenstarke, wiederholbare Wellness-Services rund um die Uhr und verwandelt Ihre Fläche in einen unkomplizierten Wellbeing-Hub.",
      "Der kommerzielle R2 Roboterarm repliziert Master-Massagetechniken über einen kontinuierlich wachsenden KI-Wissensgraphen und KI-Vision, die den Körper in Sekunden scannt, um präzise Anwendungen anzupassen. Er liefert konstante Massage mit gleichbleibendem Druck ohne Qualitätslücken und unterstützt Therapeuten, anstatt sie zu ersetzen. Für deutsche Spas, Hotels und Salons entwickelt, bietet diese professionelle Maschine sechs integrierte Wellness-Funktionen und geht deutlich über gewöhnliche Consumer-Massagesessel hinaus.",
      "Während ermüdete menschliche Therapeuten Massagekraft nicht in Newton quantifizieren können, erfasst Cedenos KI-Massageroboter physisches Feedback 1.000 Mal pro Sekunde. Dadurch werden mechanische Abweichungen reduziert und eine sichere, konsistente Anwendung unterstützt. Ein leicht erreichbarer physischer Not-Aus-Schalter trennt bei Bedarf sofort die Stromversorgung.",
      "Entwickelt für hochwertige, stark frequentierte Standorte wie Luxus-Spas, Sportclubs, Fitnesscenter, Hotels, Flughafenlounges und Unternehmensbüros. R2 passt zu flexiblen Geschäftsmodellen: eigenständige Premium-Self-Service-Amenity, Upgrade zu bestehenden Angeboten oder eigene automatisierte Wellness-Zone. Mit autonomem Betrieb und minimaler Einzelaufsicht unterstützt es wiederkehrende Umsätze bei geringem zusätzlichem Personalaufwand.",
      "Cedeno bietet Vor-Ort-Flächenplanung, Installation innerhalb von etwa einer Stunde, umfassende Mitarbeiterschulung ohne vorausgesetzte Massageerfahrung und lokalen After-Sales-Support, damit der tägliche Betrieb stabil bleibt. Für Vertriebspartner bieten wir exklusive Gebietsbedingungen und dedizierte Vertriebsunterstützung für regionales Wachstum."
    ],
    quoteEyebrow: "Kontakt",
    quoteTitle: "Von Anfang an bessere Anfragen erfassen.",
    quoteText:
      "Nennen Sie Markt, Serviceraum, Zielgruppe, Zeitplan und Menge. Wir ordnen Ihre Anfrage nach privater Nutzung, B2B-Implementierung, Vertrieb oder Partnerschaft ein.",
    formLabels: ["Name", "E-Mail", "Kundentyp", "Interessiertes Produkt", "Nachricht"],
    placeholders: ["Ihr Name", "name@firma.de", "Nennen Sie Markt, Menge, Zeitplan und Einsatzfall."],
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
    footerNavHeading: "Navigation",
    footerNavLinks: ["Produkte", "Technologie", "Lösungen", "Vergleich", "Ressourcen", "Kontakt"],
    socialHeading: "Social Media",
    legalLinks: ["AGB", "Impressum", "Datenschutz"],
    consent: {
      title: "Datenschutz & Einwilligung",
      text:
        "Wir verwenden Cookies und ähnliche Technologien, um unsere Website bereitzustellen und, mit Ihrer Einwilligung, zu verbessern. Notwendige Cookies sind für den Betrieb erforderlich. Sie können Ihre Einwilligung jederzeit widerrufen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.",
      settings: "Einstellungen",
      necessary: "Nur notwendige",
      accept: "Alle akzeptieren",
      necessaryCookies: "Notwendige Cookies",
      analyticsCookies: "Analyse-Cookies",
      detailTitles: ["Verantwortlicher", "Cookies", "Kontaktformular", "Externe Links", "Ihre Rechte"],
      detailTexts: [
        "Cedeno Technologies ist für diese Website und die Bearbeitung von Anfragen über die Website verantwortlich.",
        "Notwendige Cookies halten die Website nutzbar. Optionale Analyse-Cookies werden nur nach Einwilligung verwendet.",
        "Angaben aus dem Formular werden genutzt, um Ihre Anfrage zu beantworten, Demos vorzubereiten und R2 Implementierungen zu besprechen.",
        "Social-Media-Links führen zu externen Plattformen wie LinkedIn, Instagram und YouTube, die Daten nach eigenen Richtlinien verarbeiten.",
        "Sie können, soweit anwendbar, Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit oder Widerruf der Einwilligung verlangen."
      ]
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
  setText(".hero-copy .eyebrow", copy.heroEyebrow);
  setText(".hero-copy h1", copy.heroTitle);
  setText(".hero-lede", copy.heroText);
  setAll(".hero-actions .button", copy.heroButtons);
  setAll(".metric-row span", copy.metrics);
  setText(".answer-band .eyebrow", copy.answerEyebrow);
  setText(".answer-band h2", copy.answerTitle);
  setText(".answer-band > p", copy.answerText);
  setText("#products .section-heading .eyebrow", copy.productsEyebrow);
  setText("#products .section-heading h2", copy.productsTitle);
  setText("#products .section-heading p", copy.productsText);
  setText(".product-card .eyebrow", copy.productCard.eyebrow);
  setText(".product-card h3", copy.productCard.title);
  setText(".product-card > div > p:not(.eyebrow)", copy.productCard.text);
  setText(".spec-card h3", copy.productCard.specsTitle);
  setText("#technology .section-heading .eyebrow", copy.techEyebrow);
  setText("#technology .section-heading h2", copy.techTitle);
  setAll(".tech-card h3", copy.techTitles);
  setAll(".tech-card p", copy.techTexts);
  setText(".business-copy .eyebrow", copy.businessEyebrow);
  setText(".business-copy h2", copy.businessTitle);
  setText(".business-copy > p", copy.businessText);
  setText(".roi-widget label", copy.roiLabel);
  document.querySelectorAll(".roi-output span").forEach((span, index) => {
    const labelNode = Array.from(span.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
    if (labelNode && copy.roiSuffixes[index]) labelNode.nodeValue = ` ${copy.roiSuffixes[index]}`;
  });
  setText("#solutions .section-heading .eyebrow", copy.solutionsEyebrow);
  setText("#solutions .section-heading h2", copy.solutionsTitle);
  setText("#solutions .section-heading p", copy.solutionsText);
  setAll(".solution-card h3", copy.solutionTitles);
  setAll(".solution-card p", copy.solutionTexts);
  setText(".scenario-intro .eyebrow", copy.scenarioEyebrow);
  setText(".scenario-intro h3", copy.scenarioTitle);
  setText(".scenario-intro p:last-child", copy.scenarioText);
  setAll(".scenario-card strong", copy.scenarioTitles);
  setAll(".scenario-card span", copy.scenarioTexts);
  setText("#compare .section-heading .eyebrow", copy.compareEyebrow);
  setText("#compare .section-heading h2", copy.compareTitle);
  setText("#compare .section-heading p", copy.compareText);
  setAll(".compare-table .table-head > div", copy.compareHeaders);
  setAll(".compare-table .table-row:not(.table-head) > div", copy.compareCells);
  setAll(".trust-card > div:not(.service-proof-grid) .eyebrow", copy.trustEyebrows);
  setAll(".trust-card > div:not(.service-proof-grid) h2", copy.trustTitles);
  setAll(".trust-card > div:not(.service-proof-grid) > p:last-child", copy.trustTexts);
  setAll(".service-proof-grid strong", copy.trustServiceTitles);
  setAll(".service-proof-grid p", copy.trustServiceTexts);
  setText("#resources .section-heading .eyebrow", copy.resourcesEyebrow);
  setText("#resources .section-heading h2", copy.resourcesTitle);
  setText("#resources .section-heading p", copy.resourcesText);
  setAll(".resource-grid h3", copy.resourceTitles);
  setAll(".resource-grid p", copy.resourceTexts);
  setAll(".resource-grid a", copy.resourceLinks);
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
  setText(".lead-form button", copy.formButton);
  setText(".site-footer p", copy.footer);
  setText(".footer-links h2", copy.footerNavHeading);
  setAll(".footer-links a", copy.footerNavLinks);
  setText(".footer-social h2", copy.socialHeading);
  setAll(".legal-links a", copy.legalLinks);
  setText(".cookie-consent h2", copy.consent.title);
  const consentText = document.querySelector(".cookie-consent p");
  if (consentText) {
    const linkText = currentLang === "de" ? "Datenschutzerklärung" : "privacy policy";
    consentText.innerHTML = `${copy.consent.text.replace(linkText, `<a href="#data-protection">${linkText}</a>`)}`;
  }
  setText('[data-consent-action="settings"]', copy.consent.settings);
  setText('[data-consent-action="necessary"]', copy.consent.necessary);
  setText('[data-consent-action="accept"]', copy.consent.accept);
  setText(".consent-settings label:first-child span", copy.consent.necessaryCookies);
  setText(".consent-settings label:last-child span", copy.consent.analyticsCookies);
  setAll(".privacy-details h3", copy.consent.detailTitles);
  setAll(".privacy-details p", copy.consent.detailTexts);
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

if (localStorage.getItem("cedeno-cookie-consent")) {
  cookieConsent?.classList.add("hidden");
}

document.querySelectorAll("[data-consent-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.consentAction;
    if (action === "settings") {
      if (consentSettings) consentSettings.hidden = !consentSettings.hidden;
      return;
    }
    localStorage.setItem("cedeno-cookie-consent", action || "necessary");
    cookieConsent?.classList.add("hidden");
  });
});

document.querySelector('.legal-links a[href="#data-protection"]')?.addEventListener("click", () => {
  cookieConsent?.classList.remove("hidden");
  if (consentSettings) consentSettings.hidden = false;
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
