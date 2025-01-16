import {
  featuredButtonType,
  HeaderDataType,
  AartiDataType,
  TestimonialDataType,
} from "../types";
import godBooksType from "./godBooks";

const featuredData: featuredButtonType[] = [
  {
    id: 1,
    text: "गणेश जी",
    type: "ganeshJi",
  },
  {
    id: 2,
    text: "हनुमान जी",
    type: "hanumanJi",
  },
  {
    id: 3,
    text: "माँ लक्ष्मी",
    type: "maaLaxmiJi",
  },
  {
    id: 4,
    text: "सभी देवता/देवी",
    type: "All",
  },
];

const headerData: HeaderDataType[] = [
  {
    id: 1,
    text: "होम",
    href: "/  ",
  },
  {
    id: 2,
    text: "हमारे बारे में",
    href: "/about",
  },
  {
    id: 3,
    text: "संपर्क",
    href: "/contact",
  },
  {
    id: 4,
    text: "नीतियां",
    href: "/policies",
  },
];

const aartiData: AartiDataType[] = [
  {
    id: "ganeshJi",
    title: "गणेश जी",
    image: "/images/gods/ganesh.png",
    type: ["aarti", "mantra", "slok", "bhajan", "kirtan", "vandana", "stotra"],
  },
  {
    id: "shivJi",
    title: "शिव जी",
    image: "/images/gods/shiv.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "durgaJi",
    title: "माँ दुर्गा",
    image: "/images/gods/durga.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "saraswatiJi",
    title: "माँ सरस्वती",
    image: "/images/gods/saraswati-ji.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "maaLaxmiJi",
    title: "माँ लक्ष्मी",
    image: "/images/gods/laxmi.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "krishnaJi",
    title: "कृष्ण जी",
    image: "/images/gods/krishna.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "ramJi",
    title: "राम जी",
    image: "/images/gods/ram.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "suryaJi",
    title: "सूर्य जी",
    image: "/images/gods/surya.png",
    type: ["aarti", "mantra", "slok", "bhajan", "kirtan", "vandana", "stotra"],
  },
  {
    id: "hanumanJi",
    title: "हनुमान जी",
    image: "/images/gods/hanuman.png",
    type: ["aarti", "chalisha", "mantra", "slok", "baan", "bhajan", "stotra"],
  },
  {
    id: "vishnuJi",
    title: "विष्णु जी",
    image: "/images/gods/vishnu.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "maakaliji",
    title: "माँ काली",
    image: "/images/gods/kali.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
  {
    id: "shaniji",
    title: "शनी जी",
    image: "/images/gods/shani.png",
    type: [
      "aarti",
      "chalisha",
      "mantra",
      "slok",
      "baan",
      "bhajan",
      "kirtan",
      "vandana",
      "stotra",
    ],
  },
];
const testimonials: TestimonialDataType[] = [
  {
    quote: `"न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः। यस्तु कर्मफलत्यागी स त्यागीतः सदा सुखी।"`,
    source: "(महाभारत, शांति पर्व 264.27)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।"`,
    source: "(भगवद गीता 2.47)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।"`,
    source: "(भगवद गीता 4.7)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"सुख-दुःखे समे कृत्वा लाभालाभौ जयाजयौ। ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि।"`,
    source: "(भगवद गीता 2.38)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"अहिंसा परमो धर्मः।"`,
    source: "(महाभारत, अनुशासन पर्व 116.38-39)",
    author: "महर्षि वेदव्यास",
  },
  {
    quote: `"जो हुआ, वह अच्छे के लिए हुआ। जो हो रहा है, वह अच्छे के लिए हो रहा है। जो होगा, वह भी अच्छे के लिए होगा।"`,
    source: "(भगवद गीता 2.27)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"मनुष्य अपने विश्वास से निर्मित होता है। जैसा वह विश्वास करता है, वैसा वह बन जाता है।"`,
    source: "(भगवद गीता 17.3)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।"`,
    source: "(भगवद गीता 6.5)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः।"`,
    source: "(भगवद गीता 9.8)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"अर्जुन, तेरा कर्तव्य सिर्फ कर्म करना है। परिणाम तेरे हाथ में नहीं है।"`,
    source: "(भगवद गीता 2.47 - भावार्थ)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः। तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्।"`,
    source: "(भगवद गीता 5.16)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः।"`,
    source: "(भगवद गीता 9.29)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।"`,
    source: "(भगवद गीता 3.35)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"क्षत्रियस्य न दैन्यं धर्मः।"`,
    source: "(महाभारत)",
    author: "भगवान श्री कृष्ण",
  },
  {
    quote: `"तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।"`,
    source: "(भगवद गीता 8.7)",
    author: "भगवान श्री कृष्ण",
  },
];

export { featuredData, headerData, aartiData, testimonials, godBooksType };

// type: [
//   "aarti", "chalisha", "mantra", "slok", "baan", "bhajan", "kirtan",
//   "vandana", "stotra", "puja", "yajna", "havan", "vrat", "prarthana",
//   "aradhana", "sankalp", "ashtakshari", "shloka", "japa", "hymn"
// ]
