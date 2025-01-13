import { featuredButtonType, HeaderDataType, AartiDataType } from "../types";

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
    text: "Home",
    href: "/  ",
  },
  {
    id: 2,
    text: "About Us",
    href: "/about",
  },
  {
    id: 3,
    text: "Contact",
    href: "/contact",
  },
  {
    id: 4,
    text: "Policies",
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
];

export { featuredData, headerData, aartiData };

// type: [
//   "aarti", "chalisha", "mantra", "slok", "baan", "bhajan", "kirtan",
//   "vandana", "stotra", "puja", "yajna", "havan", "vrat", "prarthana",
//   "aradhana", "sankalp", "ashtakshari", "shloka", "japa", "hymn"
// ]
