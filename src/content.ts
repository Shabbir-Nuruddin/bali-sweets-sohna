import "@fontsource/yatra-one/400.css";
import type { Site } from "./lib";

export const SITE: Site = {
  name: "Bali Sweet & Restaurant",
  sub: { en: "Sweets, snacks & veg dhaba · Sohna bypass", hi: "मिठाई, नमकीन और वेज ढाबा · सोहना बाईपास" },
  banner: { en: "Festive and party orders for sweets and samosas: call ahead", hi: "त्योहार और पार्टी के लिए मिठाई-समोसे का ऑर्डर: पहले कॉल करें" },
  phone: "919812861798",
  phoneDisplay: "+91 98128 61798",
  lat: 28.2420838,
  lon: 77.0703229,
  hours: [[7, 24], [7, 24], [7, 24], [7, 24], [7, 24], [7, 24], [7, 24]],
  theme: {
    dark: true,
    bg: "#160809",
    bg2: "#220d0f",
    panel: "#2a1214",
    ink: "#fbf0e4",
    ink2: "#d8c2b4",
    ink3: "#9c837a",
    line: "#3d1e20",
    accent: "#ffb627",
    onAccent: "#2e1500",
    display: "Yatra One",
    weight: 400,
    upper: false,
  },
  scene: "imarti",
  align: "right",
  hero: {
    title: [
      { en: "Hot imarti,", hi: "गरम इमरती," },
      { en: "fresh samosa, full thali.", hi: "ताज़ा समोसा, भरी थाली।" },
    ],
    proof: {
      en: "4.1 on Google from 589 reviews. A sweet shop and a veg dhaba under one sign on the Sohna bypass, open 7am to midnight.",
      hi: "गूगल पर 589 रिव्यू से 4.1। एक ही बोर्ड के नीचे मिठाई की दुकान और वेज ढाबा, सोहना बाईपास पर, सुबह 7 से रात 12 बजे तक।",
    },
    fallback: "/img/p3.jpg",
  },
  marquee: ["इमरती", "Samosa", "घेवर", "Rabri", "नमक पारे", "Dal Fry Butter", "Banjara Paneer", "Mithai"],
  dishes: {
    title: { en: "From the dhaba kitchen", hi: "ढाबे की रसोई से" },
    body: { en: "Quoted word for word from Google reviews.", hi: "गूगल रिव्यू से ज्यों के त्यों।" },
    layout: "cards",
    items: [
      { name: { en: "Dal Fry Butter", hi: "दाल फ़्राई बटर" }, quote: "Dal Fry Butter is really good here and a must try.", img: "/img/p5.jpg" },
      { name: { en: "Banjara Paneer", hi: "बंजारा पनीर" }, quote: "Banjara paneer is must try." },
      { name: { en: "Budget thali", hi: "बजट खाना" }, quote: "Best veg dhaba in sohna. Tasty and budget food." },
      { name: { en: "Less spicy, fast", hi: "कम मसाला, तेज़ सर्विस" }, quote: "Food is very good and less spicy and Service also good & Fast." },
    ],
  },
  gallery: {
    title: { en: "The counter and the kitchen", hi: "काउंटर और रसोई" },
    layout: "strip",
    photos: [
      { src: "/img/p3.jpg", alt: "Inside the Bali sweets shop" },
      { src: "/img/p12.jpg", alt: "Sweets counter display" },
      { src: "/img/p4.jpg", alt: "Box of sweets" },
      { src: "/img/p5.jpg", alt: "Thali with paratha and curries" },
      { src: "/img/p2.jpg", alt: "Bali Sweets signboard" },
    ],
  },
  feature: {
    kind: "counter",
    title: { en: "What to pick up from the counter", hi: "काउंटर से क्या लें" },
    body: { en: "Sweets and snacks people come back for, in their own words.", hi: "मिठाई और नमकीन जिनके लिए लोग लौट कर आते हैं, उन्हीं के शब्दों में।" },
    img: "/img/p12.jpg",
    items: [
      { label: { en: "Imarti & samosa", hi: "इमरती और समोसा" }, quote: "Emarti is really good. And samosa also." },
      { label: { en: "Ghewar", hi: "घेवर" }, quote: "Ghewar is best" },
      { label: { en: "Namak pare, mithai, rabri", hi: "नमक पारे, मिठाई, रबड़ी" }, quote: "Liked Namak Pare, Mithai and Rabri. The staff is humble and well behaved." },
      { label: { en: "Party orders", hi: "पार्टी ऑर्डर" }, quote: "I ordered Samosa again for Diwali party from these guys and everyone loved it." },
    ],
  },
  reviews: {
    title: { en: "Sohna’s sweet stop", hi: "सोहना का मीठा पड़ाव" },
    rating: 4.1,
    dist: [358, 87, 59, 25, 60],
    quotes: [
      { quote: "Top level sweets in sohna", stars: 5 },
      { quote: "On Road Best service like Haldiram's", stars: 5 },
      { quote: "Service is quite fast as their are good numbers of waiters…", stars: 4 },
    ],
  },
  visit: {
    title: { en: "Find the red signboard", hi: "लाल बोर्ड ढूंढिए" },
    img: "/img/p1.jpg",
    alt: "Red Bali Sweets and Dhaba signboard",
    address: { en: "ITI Colony, Sohna bypass, Sohna", hi: "ITI कॉलोनी, सोहना बाईपास, सोहना" },
    note: { en: "Open from 7am till midnight, every day.", hi: "हर दिन सुबह 7 बजे से रात 12 बजे तक।" },
  },
  waHello: {
    en: "Hi Bali Sweet & Restaurant, I'd like to place an order. Items: , quantity: , pickup date: ",
    hi: "नमस्ते बाली स्वीट एंड रेस्टोरेंट, मुझे ऑर्डर देना है। आइटम: , मात्रा: , पिकअप की तारीख़: ",
  },
  order: ["feature", "dishes", "gallery", "reviews", "visit"],
};
