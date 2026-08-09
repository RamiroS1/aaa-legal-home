/* News & events content from aaalegal.com.co */
const NEWS_ITEMS = [
  {
    id: "medidas-2026",
    date: "2026-03-12",
    dateLabel: { es: "12 Mar 2026", en: "12 Mar 2026" },
    title: {
      es: "Boletín: Medidas Tributarias Extraordinarias 2026",
      en: "Bulletin: Extraordinary Tax Measures 2026",
    },
    body: {
      es: "Alcance del Decreto 240 del 12 de marzo de 2026: reducción transitoria de sanciones e intereses, e impuesto complementario de normalización tributaria.",
      en: "Scope of Decree 240 of March 12, 2026: temporary reduction of penalties and interest, and a complementary tax-normalization levy.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/05/1110-29062024.jpg",
    url: "https://aaalegal.com.co/",
  },
  {
    id: "gissela-columbia",
    date: "2026-02-04",
    dateLabel: { es: "2026", en: "2026" },
    title: {
      es: "Gissela Arias en el programa LL.M. de Columbia University",
      en: "Gissela Arias in Columbia University’s LL.M. program",
    },
    body: {
      es: "Nuestra socia continúa fortaleciendo su formación académica en una de las instituciones jurídicas más prestigiosas del mundo.",
      en: "Our partner continues strengthening her academic training at one of the world’s most prestigious law schools.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-02-at-4.08.28-PM.jpeg",
    url: "https://aaalegal.com.co/",
  },
  {
    id: "boletin-marzo-patrimonio",
    date: "2026-03-14",
    dateLabel: { es: "14 Mar 2026", en: "14 Mar 2026" },
    title: {
      es: "Boletín Marzo: Impuesto al Patrimonio Personas Jurídicas",
      en: "March Bulletin: Wealth Tax for Legal Entities",
    },
    body: {
      es: "Análisis actualizado del impuesto al patrimonio aplicable a personas jurídicas.",
      en: "Updated analysis of the wealth tax applicable to legal entities.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2026/03/Screenshot-From-2026-03-14-16-24-22.png",
    url: "https://aaalegal.com.co/boletin-marzo-impuesto-al-patrimonio-personas-juridicas/",
  },
  {
    id: "boletin-patrimonio",
    date: "2026-02-26",
    dateLabel: { es: "26 Feb 2026", en: "26 Feb 2026" },
    title: {
      es: "Boletín: Impuesto al Patrimonio Personas Jurídicas",
      en: "Bulletin: Wealth Tax for Legal Entities",
    },
    body: {
      es: "Análisis del Decreto Legislativo 173 del 24 de febrero de 2026 y sus implicaciones.",
      en: "Analysis of Legislative Decree 173 of February 24, 2026 and its implications.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2026/02/Screenshot-From-2026-02-26-08-00-20.png",
    url: "https://aaalegal.com.co/boletin-impuesto-al-patrimonio-personas-juridicas/",
  },
  {
    id: "noticia-14",
    date: "2026-02-08",
    dateLabel: { es: "08 Feb 2026", en: "08 Feb 2026" },
    title: {
      es: "Expertos advierten que el uso de la IA puede traer problemas legales a algunas empresas",
      en: "Experts warn AI use may create legal problems for some companies",
    },
    body: {
      es: "Participación en Revista Semana sobre cómo la inteligencia artificial transforma el riesgo legal empresarial.",
      en: "Participation in Revista Semana on how artificial intelligence is transforming business legal risk.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2026/02/1.jpeg",
    url: "https://aaalegal.com.co/noticia-14/",
  },
  {
    id: "noticia-13",
    date: "2025-07-04",
    dateLabel: { es: "04 Jul 2025", en: "04 Jul 2025" },
    title: {
      es: "Concepto: Implicaciones del incumplimiento de facilidades de pago tributarias",
      en: "Opinion: Implications of failing tax payment facilities",
    },
    body: {
      es: "Doctrina de la DIAN sobre imputación de pagos bajo las Leyes 2155 y 2277.",
      en: "DIAN doctrine on payment allocation under Laws 2155 and 2277.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/6bd41a1b-d6aa-48de-af6f-5cbb8beec039.jpg",
    url: "https://aaalegal.com.co/noticia-13/",
  },
  {
    id: "noticia-12",
    date: "2025-05-23",
    dateLabel: { es: "23 May 2025", en: "23 May 2025" },
    title: {
      es: "Estado de la Justicia Fiscal 2024",
      en: "State of Tax Justice 2024",
    },
    body: {
      es: "Lectura del informe del Tax Justice Network y sus implicaciones para los sistemas fiscales.",
      en: "A reading of the Tax Justice Network report and its implications for tax systems.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/05/mathias-reding-yfXhqAW5X0c-unsplash-1536x1024-1.jpg",
    url: "https://aaalegal.com.co/noticia-12/",
  },
  {
    id: "noticia-11",
    date: "2025-05-23",
    dateLabel: { es: "23 May 2025", en: "23 May 2025" },
    title: {
      es: "Estudios Económicos de la OCDE: Colombia 2024",
      en: "OECD Economic Surveys: Colombia 2024",
    },
    body: {
      es: "Análisis de la evolución macroeconómica del país y sus implicaciones regulatorias.",
      en: "Analysis of the country’s macroeconomic developments and regulatory implications.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/05/que-es-ocde.png",
    url: "https://aaalegal.com.co/noticia-11/",
  },
  {
    id: "noticia-10",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "Respuesta de la DIAN sobre el uso de la fianza como garantía",
      en: "DIAN response on using surety bonds as guarantee",
    },
    body: {
      es: "Confirmación respecto a la fianza como garantía personal para facilidades de pago tributario.",
      en: "Confirmation regarding surety bonds as a personal guarantee for tax payment facilities.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/05/1110-29062024.jpg",
    url: "https://aaalegal.com.co/noticia-10/",
  },
  {
    id: "noticia-9",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "¿Cómo hackear el sistema tributario?",
      en: "How to “hack” the tax system?",
    },
    body: {
      es: "Explicación normativa, en términos simples, de oportunidades legítimas de planeación tributaria.",
      en: "A plain-language normative explanation of lawful tax-planning opportunities.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/4d5d8ad7-50a3-4051-ab4c-aa7ede0199f2.jpeg",
    url: "https://aaalegal.com.co/noticia-9/",
  },
  {
    id: "noticia-8",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "¿Por qué las empresas deberían apostarle al Registro de Beneficiarios Finales?",
      en: "Why should companies bet on the Ultimate Beneficial Owner Registry?",
    },
    body: {
      es: "Alcance del concepto de beneficiario final en Colombia y riesgos de incumplimiento.",
      en: "Scope of the beneficial-owner concept in Colombia and non-compliance risks.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/e3301093-a91a-47e1-a860-eb1efc1c5719.png",
    url: "https://aaalegal.com.co/noticia-8/",
  },
  {
    id: "noticia-7",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "Sembrando cultura, cosechando legalidad",
      en: "Sowing culture, harvesting legality",
    },
    body: {
      es: "Reflexión sobre cultura de legalidad a propósito de los incendios en Floridablanca y los cerros de Bogotá.",
      en: "A reflection on a culture of legality after wildfires in Floridablanca and Bogotá’s eastern hills.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/de0fd111-b591-4ff0-a269-3611d4fc7802.png",
    url: "https://aaalegal.com.co/noticia-7/",
  },
  {
    id: "noticia-6",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "No más pereza a la inversión en la educación",
      en: "No more neglect of investment in education",
    },
    body: {
      es: "Sobre la importancia de invertir en educación en derechos humanos en Colombia.",
      en: "On the importance of investing in human-rights education in Colombia.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/086b480f-8fbf-40bf-88dc-9c445d100f04.jpg",
    url: "https://aaalegal.com.co/noticia-6/",
  },
  {
    id: "noticia-5",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "Tercera adición al Concepto General sobre el Régimen Simple de Tributación",
      en: "Third addendum to the General Opinion on the Simple Tax Regime",
    },
    body: {
      es: "Actualización doctrinal del régimen SIMPLE con motivo de la Ley 2277 de 2022.",
      en: "Doctrinal update of the SIMPLE regime following Law 2277 of 2022.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/6bd41a1b-d6aa-48de-af6f-5cbb8beec039.jpg",
    url: "https://aaalegal.com.co/noticia-5/",
  },
  {
    id: "noticia-4",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "Declaran inexequibles topes y tarifas de grupos 4 y 5 del régimen Simple",
      en: "Court strikes down thresholds and rates for Simple-regime groups 4 and 5",
    },
    body: {
      es: "La Corte Constitucional declaró parcialmente inexequibles artículos de la reforma tributaria 2022.",
      en: "The Constitutional Court partially struck down articles of the 2022 tax reform.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/0f6155c8-3579-46c9-9bb3-1d9f40fe3007.png",
    url: "https://aaalegal.com.co/noticia-4/",
  },
  {
    id: "noticia-3",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "Consulta DIAN sobre certificados CIC y CID",
      en: "DIAN consultation on CIC and CID certificates",
    },
    body: {
      es: "Respuesta a consulta sobre Certificados de Inversión Cinematográfica y de Inversión o Donación.",
      en: "Response to a consultation on Film Investment Certificates and Investment/Donation Certificates.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/071cdfc1-cc3c-4714-80e1-eea22e96dd03.jpg",
    url: "https://aaalegal.com.co/noticia-3/",
  },
  {
    id: "noticia-2",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "Responsabilidad fiscal en sociedades sujetas a extinción de dominio",
      en: "Tax liability in companies subject to asset forfeiture",
    },
    body: {
      es: "Análisis de medidas cautelares y protección de activos en el contexto colombiano.",
      en: "Analysis of precautionary measures and asset protection in the Colombian context.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/b6f260e1-2422-4807-911e-ca4d21e0d3a5.jpeg",
    url: "https://aaalegal.com.co/noticia-2/",
  },
  {
    id: "noticia-1",
    date: "2025-05-15",
    dateLabel: { es: "15 May 2025", en: "15 May 2025" },
    title: {
      es: "Política económica y financiera y su impacto en la gestión de riesgos",
      en: "Economic and financial policy and its impact on risk management",
    },
    body: {
      es: "Una mirada profunda a la prevención del lavado de activos en el sistema financiero colombiano.",
      en: "A deep look at money-laundering prevention in Colombia’s financial system.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/04/e2bce1ed-02f6-4629-a997-6b1cf8f0be8b.jpeg",
    url: "https://aaalegal.com.co/noticia-1/",
  },
];

const EVENT_ITEMS = [
  {
    id: "foro-probatorio",
    date: "2026-02",
    dateLabel: { es: "Feb 2026", en: "Feb 2026" },
    place: { es: "Bogotá", en: "Bogotá" },
    title: {
      es: "Foro Internacional de Razonamiento Probatorio",
      en: "International Forum on Evidentiary Reasoning",
    },
    body: {
      es: "Andrés Ávila en el debate sobre valoración de la prueba, límites de la sana crítica y debido proceso.",
      en: "Andrés Ávila on evidence valuation, limits of sound criticism, and due process.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-07-at-1.26.05-PM-1.jpeg",
  },
  {
    id: "laft-panamericano",
    date: "2025",
    dateLabel: { es: "2025", en: "2025" },
    place: { es: "Panamericano", en: "Pan-American" },
    title: {
      es: "24° Congreso Panamericano de Riesgo LAFT/FPADM",
      en: "24th Pan-American LAFT/FPADM Risk Congress",
    },
    body: {
      es: "Conferencia sobre lucha contra la corrupción, integridad y control de riesgos.",
      en: "Conference on anti-corruption, integrity, and risk control.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/07/ABC06514-scaled.jpg",
  },
  {
    id: "derecho-financiero",
    date: "2025",
    dateLabel: { es: "2025", en: "2025" },
    place: { es: "Asobancaria", en: "Asobancaria" },
    title: {
      es: "23° Congreso de Derecho Financiero",
      en: "23rd Financial Law Congress",
    },
    body: {
      es: "Andrés Ávila Ávila como ponente en el congreso organizado por Asobancaria.",
      en: "Andrés Ávila Ávila speaking at the congress organized by Asobancaria.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/09/Congreso-asobancaria.jpeg",
  },
  {
    id: "gerentes-juridicos",
    date: "2025",
    dateLabel: { es: "2025", en: "2025" },
    place: { es: "Nacional", en: "National" },
    title: {
      es: "II Congreso Nacional de Gerentes Jurídicos",
      en: "II National Congress of Legal Managers",
    },
    body: {
      es: "Ponencia en el evento de Fundación Tejiendo Ciudadanía sobre gerencia jurídica.",
      en: "Presentation at the Fundación Tejiendo Ciudadanía event on legal management.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/07/ABC06524-scaled.jpg",
  },
  {
    id: "encuentro-tributario",
    date: "2025",
    dateLabel: { es: "2025", en: "2025" },
    place: { es: "Asobancaria", en: "Asobancaria" },
    title: {
      es: "13° Encuentro Tributario",
      en: "13th Tax Meeting",
    },
    body: {
      es: "Silvio Benavides, Director de Impuestos, como ponente en materia fiscal.",
      en: "Silvio Benavides, Tax Director, speaking on fiscal matters.",
    },
    img: "https://aaalegal.com.co/wp-content/uploads/2025/07/Andres-Asobancaria-scaled.jpg",
  },
];
