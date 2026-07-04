// Diccionario de traducción tipado - Basado en el idioma español (es) como referencia
export type Language = 'es' | 'en';

export interface TranslationStructure {
  hero: {
    h1: string;
    sub: string;
    cta: string;
    call: string;
  };
  filterEyebrow: string;
  filterTitle: string;
  filterItems: string[];
  filterOut: string;
  filterFollow: string;
  evidenceEyebrow: string;
  evidenceQuote: string;
  evidenceResult: string;
  evidenceFoot: string;
  baBefore: string;
  baAfter: string;
  villainTitle: string;
  villainLead: string;
  villainItems: string[];
  villainFoot: string;
  costTitle: string;
  costs: Array<{ p: string; d: string }>;
  costFoot: string;
  futureTitle: string;
  futureBody: string;
  futureBody2: string;
  futureFoot: string;
  offerEyebrow: string;
  offerTitle: string;
  offerLead: string;
  packages: Array<{ name: string; tag: string; items: string[] }>;
  priceTitle: string;
  priceBody: string;
  stepsTitle: string;
  stepsIntro: string;
  steps: string[];
  stepsFoot: string;
  stepsClose: string;
  riskTitle: string;
  riskItems: Array<{ h: string; d: string }>;
  authorityTitle: string;
  authorityLead: string;
  authorityItems: string[];
  authorityFoot: string;
  faqTitle: string;
  faqs: Array<{ q: string; a: string }>;
  urgencyTitle: string;
  optA: { h: string; d: string };
  optB: { h: string; d: string };
  urgencyFoot: string;
  closeTitle: string;
  closeBody: string;
  closeBody2: string;
  closeFoot: string;
  finalCta: string;
  finalTagline: string;
  langLabel: string;
  footTagline: string;
  footArea: string;
  footHours: string;
  footWhatsapp: string;
  footFollow: string;
  waMessage: string;
  reviewsEyebrow: string;
  reviewsTitle: string;
  reviewsFeaturedTitle: string;
  reviewsYelpCta: string;
}

const translations: Record<Language, TranslationStructure> = {
  es: {
    hero: {
      h1: "Tu piscina se está convirtiendo en un problema que evitas",
      sub: "Y cada semana que pasa, los químicos se descontrolan más, el agua se vuelve más turbia, y el costo de arreglarlo crece.",
      cta: "Quiero mi presupuesto gratis",
      call: "Llamar: 210-392-1245",
    },
    filterEyebrow: "Autoevaluación rápida",
    filterTitle: "Esto es para ti si:",
    filterItems: [
      "Tienes una piscina en San Antonio y simplemente no sabes cómo mantenerla",
      "Intentaste hacerlo tú mismo y terminó siendo más complicado de lo que esperabas",
      "Ya gastaste dinero en \"arreglarlo\" pero vuelve a salir mal en dos meses",
      "Prefieres disfrutar tu piscina a estar estresado por mantenerla",
    ],
    filterOut: "Si contratas empresas que solo quieren tu dinero y desaparecen después, esto no es para ti. Si no tienes piscina, tampoco.",
    filterFollow: "Si te queda uno de los puntos anteriores, sigue leyendo.",
    evidenceEyebrow: "Resultados reales",
    evidenceQuote: "Hace 3 meses, María Elena tenía su piscina en San Antonio verde oscuro. Había invertido $800 en \"limpiezas profesionales\" en otro lugar. Nada funcionó.",
    evidenceResult: "Dos semanas con ABC Swimming Pool Service: agua cristalina, desde el mismo día que empezamos.",
    evidenceFoot: "No es magia. Es la diferencia entre alguien que entiende qué está mal y alguien que solo \"tira químicos y espera\".",
    baBefore: "Antes",
    baAfter: "Después",
    villainTitle: "El problema no es que \"no sepas mantener una piscina\"",
    villainLead: "El problema real: nadie te enseñó.",
    villainItems: [
      "Hay 50 \"formas correctas\" en YouTube, y cada una contradice a la otra.",
      "Los químicos deben estar en balance exacto: cloro, pH, alcalinidad. Una décima de diferencia y tu piscina se vuelve un caldo de cultivo.",
      "La bomba, el filtro, las válvulas: cualquiera puede fallar en silencio mientras crees que todo está bien.",
      "Mantenimiento real toma 30 minutos por semana, mínimo. La mayoría de propietarios no los tiene.",
    ],
    villainFoot: "Por eso tu piscina se degrada. No es incompetencia, es estar solo ante un problema que necesita experiencia.",
    costTitle: "Si sigues como estás",
    costs: [
      { p: "En 6 meses", d: "piscina marrón o verde → $3,000 a $5,000 en tratamiento de rescate" },
      { p: "En 1 año", d: "posible daño al revestimiento o filtro → $8,000 a $15,000 en reparaciones" },
      { p: "Cada fin de semana", d: "evitas tu propia piscina y no invitas a nadie" },
    ],
    costFoot: "Pagaste por una inversión para relajarte. Ahora te causa estrés. Ese es el verdadero costo.",
    futureTitle: "Imagina esto (sin exagerar)",
    futureBody: "Viernes, 5pm. Estás en la terraza. El agua está cristalina, el pH perfecto, los químicos balanceados. No investigaste. No compraste cuatro botellas de \"tratamiento especial\". No pasaste el fin de semana limpiando filtros.",
    futureBody2: "Solo llamaste. Ellos vinieron. Lo arreglaron. Se fueron.",
    futureFoot: "Eso no es lujo. Es lo que ya pagaste al instalar tu piscina, solo que ahora alguien que sabe está haciendo su trabajo.",
    offerEyebrow: "Nuestro servicio",
    offerTitle: "Aquí es donde entra ABC Swimming Pool Service",
    offerLead: "Somos una empresa familiar con años manteniendo piscinas en San Antonio y áreas circundantes.",
    packages: [
      {
        name: "Mantenimiento continuo",
        tag: "Lo más popular",
        items: [
          "Visita 1x por semana",
          "Limpieza completa + balance de químicos",
          "Inspección de bomba, filtro y válvulas",
          "Ajustes preventivos",
          "Químicos incluidos (free chemical delivery)",
        ],
      },
      {
        name: "Mantenimiento flexible",
        tag: "",
        items: [
          "Visitas bi-semanales o mensuales, según tu presupuesto",
          "Mismo estándar de calidad",
          "Ideal si solo necesitas vigilancia",
        ],
      },
      {
        name: "Reparaciones y proyectos",
        tag: "",
        items: [
          "Replastering (revestimiento)",
          "Reparación de bombas, filtros y válvulas",
          "Pool draining y protección",
          "Preparación de superficie y pintura",
        ],
      },
    ],
    priceTitle: "¿Cuánto cuesta?",
    priceBody: "No hay un número mágico: cada piscina es diferente. Por eso ofrecemos un presupuesto gratis: hablamos, vemos tu piscina, te decimos exactamente qué necesita y qué cuesta. Sin sorpresas. Sin presión.",
    stepsTitle: "¿Qué pasa después de tu primera llamada?",
    stepsIntro: "No es solo una lista de pasos. Es el camino de vuelta a disfrutar tu alberca sin pensar en ella.",
    steps: [
      "Nos cuentas cómo está tu piscina y qué te preocupa, sin tecnicismos, como se lo contarías a un vecino.",
      "Vamos, la vemos con calma y te explicamos qué tiene, en español sencillo.",
      "Te damos un precio claro. Sin presión para decidir en ese momento.",
      "Si dices que sí, empezamos esa misma semana, y tú sigues con tu vida mientras nosotros nos encargamos.",
      "Semana tras semana, tu piscina mejora hasta que un día dejas de pensar en ella y solo la disfrutas.",
    ],
    stepsFoot: "Sin contratos de un año. Sin cláusulas ocultas.",
    stepsClose: "Al final, no es solo una piscina limpia. Es tu viernes de vuelta: familia, amigos, y una tarde que ya no gastas revisando químicos.",
    riskTitle: "¿Y si contrato y no es lo que espero?",
    riskItems: [
      { h: "El presupuesto es gratis", d: "Ya ves el costo antes de comprometerte." },
      { h: "Somos familia", d: "Llevamos años en San Antonio. Si algo sale mal, seguimos aquí." },
      { h: "Resultados verificables", d: "Cada visita, tu piscina mejora. Lo ves, lo tocas, está ahí." },
      { h: "Garantía de 2 semanas", d: "Si no ves diferencia, te devolvemos el dinero." },
    ],
    authorityTitle: "¿Por qué ABC y no cualquier otro servicio?",
    authorityLead: "Porque mantenimiento de piscinas no es \"tirar cloro y esperar\". Es:",
    authorityItems: [
      "Entender la química: pH, cloro, alcalinidad",
      "Reconocer problemas antes de que sean desastres",
      "Ajustar según la temporada (verano ≠ invierno en San Antonio)",
      "Tratar cada piscina distinto: tamaño, revestimiento, edad",
    ],
    authorityFoot: "Nuestros técnicos no \"solo limpian\". Pasaron años aprendiendo qué hace funcionar a una piscina. Piscinas que hace tres meses eran un problema, hoy son donde la gente pasa los fines de semana. Eso no es suerte. Es experiencia.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Está garantizado que no se vuelva a poner verde?",
        a: "No. Las piscinas son sistemas vivos. Pero con mantenimiento semanal, la probabilidad de que vuelva a ser un problema es casi cero. Si la abandonas, sí vuelve a degradarse.",
      },
      {
        q: "¿Qué pasa si me voy de viaje una semana?",
        a: "Pasamos igual. Tu piscina sigue en buen estado, incluso cuando no estás.",
      },
      {
        q: "¿Por qué no simplemente lo hago yo?",
        a: "Puedes. Pero los químicos cuestan $40 a $80 por semana, tu tiempo son 30 min semanales mínimo, y un error puede costarte $200 en daños. Nuestro servicio suele costar menos que arreglar los errores después.",
      },
      {
        q: "¿Cuál es el mínimo que puedo pagar?",
        a: "Es flexible: puedes ir bi-semanal. El presupuesto gratis te dice cuál es tu opción más económica.",
      },
    ],
    urgencyTitle: "Ya leíste todo esto. Ahora tienes dos opciones.",
    optA: {
      h: "Opción A",
      d: "Sigues intentando tú solo. Las próximas 2 a 3 semanas esperas que algo \"mágicamente\" mejore. Probablemente no suceda.",
    },
    optB: {
      h: "Opción B",
      d: "Haces una llamada. Solo una. El presupuesto no cuesta nada. Después, tú decides.",
    },
    urgencyFoot: "Si esperas tres semanas más: el agua se pone más turbia, las reparaciones cuestan más, y tu fin de semana sigue siendo \"evitar la piscina\". Hoy es una llamada. En dos semanas, es una piscina que funciona.",
    closeTitle: "Tu piscina fue una inversión de amor",
    closeBody: "Pensaste: \"Voy a tener este espacio donde mi familia se relaja, donde pasamos los veranos, donde hacemos recuerdos.\" Pero en algún momento se convirtió en estrés.",
    closeBody2: "Con ABC, tu piscina vuelve a ser lo que siempre debió ser: tu lugar. Ese donde los viernes a las 5pm no hay estrés, solo agua cristalina, amigos, familia, y tú disfrutando de algo que ya pagaste.",
    closeFoot: "No es solo agua limpia. Es tener tu vida de regreso.",
    finalCta: "Llama ahora, es gratis",
    finalTagline: "Familia. Experiencia. Resultados.",
    langLabel: "EN",
    footTagline: "Mantenimiento de piscinas en San Antonio",
    footArea: "San Antonio, TX 78259 y alrededores",
    footHours: "Respuesta el mismo día",
    footWhatsapp: "Escríbenos por WhatsApp",
    footFollow: "Síguenos",
    waMessage:
      "Hola ABC Swimming Pool Service, vi su página y quiero más información sobre el mantenimiento de mi piscina en San Antonio. ¿Me pueden ayudar?",
    reviewsEyebrow: "Reseñas",
    reviewsTitle: "Lo que dicen nuestros clientes",
    reviewsFeaturedTitle: "Testimonios destacados",
    reviewsYelpCta: "Ver todas nuestras reseñas en Yelp",
  },
  en: {
    hero: {
      h1: "Your pool is becoming a problem you avoid",
      sub: "And every week that passes, the chemicals drift further out of balance, the water gets cloudier, and the cost to fix it grows.",
      cta: "Get my free estimate",
      call: "Call: 210-392-1245",
    },
    filterEyebrow: "Quick self-check",
    filterTitle: "This is for you if:",
    filterItems: [
      "You have a pool in San Antonio and just don't know how to maintain it",
      "You tried doing it yourself and it turned into more than you bargained for",
      "You already spent money \"fixing it\" elsewhere but it goes wrong again in two months",
      "You'd rather enjoy your pool than be stressed about maintaining it",
    ],
    filterOut: "If you've hired companies that just want your money and disappear afterward, this isn't for you. If you don't have a pool, it isn't either.",
    filterFollow: "If one of these sounds like you, keep reading.",
    evidenceEyebrow: "Real results",
    evidenceQuote: "Three months ago, María Elena's pool in San Antonio had turned dark green. She'd already spent $800 on \"professional cleanings\" elsewhere. Nothing worked.",
    evidenceResult: "Two weeks with ABC Swimming Pool Service: crystal clear water, the very first day we started.",
    evidenceFoot: "It's not magic. It's the difference between someone who understands what's wrong and someone who just \"throws in chemicals and hopes.\"",
    baBefore: "Before",
    baAfter: "After",
    villainTitle: "The problem isn't that \"you don't know how to maintain a pool\"",
    villainLead: "The real problem: no one ever taught you.",
    villainItems: [
      "There are 50 \"correct ways\" on YouTube, and each one contradicts the last.",
      "Chemicals need to be in exact balance: chlorine, pH, alkalinity. One-tenth off and your pool becomes a breeding ground.",
      "The pump, the filter, the valves: any of them can fail silently while you think everything's fine.",
      "Real maintenance takes 30 minutes a week, minimum. Most owners don't have it.",
    ],
    villainFoot: "That's why your pool degrades. It's not incompetence, it's facing a problem alone that actually needs experience.",
    costTitle: "If you keep going as you are",
    costs: [
      { p: "In 6 months", d: "brown or green pool → $3,000 to $5,000 in rescue treatment" },
      { p: "In 1 year", d: "possible surface or filter damage → $8,000 to $15,000 in repairs" },
      { p: "Every weekend", d: "you avoid your own pool and stop inviting anyone over" },
    ],
    costFoot: "You paid for an investment meant to help you relax. Now it stresses you out. That's the real cost.",
    futureTitle: "Picture this (no exaggeration)",
    futureBody: "Friday, 5pm. You're on the patio. The water is crystal clear, pH perfect, chemicals balanced. You didn't research anything. You didn't buy four different \"special treatment\" bottles. You didn't spend the weekend cleaning filters.",
    futureBody2: "You just called. They came. They fixed it. They left.",
    futureFoot: "That's not luxury. It's what you already paid for when you installed your pool, it's just that now, someone who knows what they're doing is doing their job.",
    offerEyebrow: "Our service",
    offerTitle: "This is where ABC Swimming Pool Service comes in",
    offerLead: "We're a family-run business that's maintained pools in San Antonio and surrounding areas for years.",
    packages: [
      {
        name: "Ongoing maintenance",
        tag: "Most popular",
        items: [
          "1x visit per week",
          "Full cleaning + chemical balancing",
          "Pump, filter and valve inspection",
          "Preventive adjustments",
          "Chemicals included (free chemical delivery)",
        ],
      },
      {
        name: "Flexible maintenance",
        tag: "",
        items: [
          "Bi-weekly or monthly visits, based on your budget",
          "Same quality standard",
          "Ideal if you only need oversight",
        ],
      },
      {
        name: "Repairs & projects",
        tag: "",
        items: [
          "Replastering",
          "Pump, filter and valve repair",
          "Pool draining and protection",
          "Surface prep & painting",
        ],
      },
    ],
    priceTitle: "How much does it cost?",
    priceBody: "There's no magic number: every pool is different. That's why we offer a free estimate: we talk, we see your pool, we tell you exactly what it needs and what it costs. No surprises. No pressure.",
    stepsTitle: "What happens after your first call?",
    stepsIntro: "It's not just a checklist. It's the path back to enjoying your pool without thinking about it.",
    steps: [
      "You tell us how your pool is doing and what worries you, no jargon, like you'd tell a neighbor.",
      "We come take a look and walk you through what it needs, in plain language.",
      "We give you a clear price. No pressure to decide on the spot.",
      "If you say yes, we start that same week, and you keep living your life while we handle it.",
      "Week after week your pool improves, until one day you stop thinking about it and just enjoy it.",
    ],
    stepsFoot: "No year-long contracts. No hidden clauses.",
    stepsClose: "In the end, it's not just a clean pool. It's your Friday back: family, friends, and an afternoon you no longer spend checking chemicals.",
    riskTitle: "What if I hire you and it's not what I expect?",
    riskItems: [
      { h: "The estimate is free", d: "You see the cost before committing to anything." },
      { h: "We're family", d: "We've been in San Antonio for years. If something goes wrong, we're still here." },
      { h: "Verifiable results", d: "Every visit, your pool improves. You see it, you touch it, it's there." },
      { h: "2-week guarantee", d: "If you don't see a difference, we refund you." },
    ],
    authorityTitle: "Why ABC and not any other service?",
    authorityLead: "Because pool maintenance isn't \"throw in chlorine and hope.\" It's:",
    authorityItems: [
      "Understanding chemistry: pH, chlorine, alkalinity",
      "Spotting problems before they become disasters",
      "Adjusting by season (summer ≠ winter in San Antonio)",
      "Treating every pool differently: size, surface, age",
    ],
    authorityFoot: "Our technicians don't just \"clean.\" They spent years learning what makes a pool work. Pools that were a problem three months ago are now where people spend their weekends. That's not luck. That's experience.",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Is it guaranteed it won't turn green again?",
        a: "No. Pools are living systems. But with weekly maintenance, the odds of it becoming a problem again are close to zero. If you stop maintenance, it will degrade again.",
      },
      {
        q: "What if I travel for a week?",
        a: "We still come. Your pool stays in good shape even while you're away.",
      },
      {
        q: "Why don't I just do it myself?",
        a: "You can. But chemicals cost $40 to $80 a week, your time is 30 min/week minimum, and one mistake can cost you $200 in damage. Our service usually costs less than fixing the mistakes afterward.",
      },
      {
        q: "What's the minimum I can pay?",
        a: "It's flexible: you can go bi-weekly. The free estimate tells you your most affordable option.",
      },
    ],
    urgencyTitle: "You've read all this. Now you have two options.",
    optA: {
      h: "Option A",
      d: "You keep trying it alone. The next 2 to 3 weeks you hope something \"magically\" improves. It probably won't.",
    },
    optB: {
      h: "Option B",
      d: "You make one call. Just one. The estimate costs nothing. Then, you decide.",
    },
    urgencyFoot: "If you wait three more weeks: the water gets cloudier, repairs cost more, and your weekend is still \"avoid the pool.\" Today it's a phone call. In two weeks, it's a pool that works.",
    closeTitle: "Your pool was an investment in love",
    closeBody: "You thought: \"I'll have this space where my family relaxes, where we spend our summers, where we make memories.\" But at some point, it became stress.",
    closeBody2: "With ABC, your pool goes back to being what it always should have been: your place. The one where Friday at 5pm there's no stress, just crystal-clear water, friends, family, and you enjoying something you already paid for.",
    closeFoot: "It's not just clean water. It's getting your life back.",
    finalCta: "Call now, it's free",
    finalTagline: "Family. Experience. Results.",
    langLabel: "ES",
    footTagline: "Pool maintenance in San Antonio",
    footArea: "San Antonio, TX 78259 and nearby areas",
    footHours: "Same-day response",
    footWhatsapp: "Message us on WhatsApp",
    footFollow: "Follow us",
    waMessage:
      "Hi ABC Swimming Pool Service, I saw your page and I'd like more info about pool maintenance in San Antonio. Can you help me?",
    reviewsEyebrow: "Reviews",
    reviewsTitle: "What our clients say",
    reviewsFeaturedTitle: "Featured testimonials",
    reviewsYelpCta: "See all our reviews on Yelp",
  },
};

export function getDictionary(lang: Language): TranslationStructure {
  return translations[lang];
}

export const defaultLanguage: Language = 'es';
export const supportedLanguages: Language[] = ['es', 'en'];
