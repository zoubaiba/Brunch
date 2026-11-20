/* SOURCE UNIQUE du menu (FR + EN) et de la langue. Utilisée par / et /carte.
   I(id, prix, nomFR, nomEN|null, descFR, descEN)  -> photo attendue : img/plats/<id>.jpg */
const I = (id, p, fn, en, fd, ed) => ({ id, p, n: { fr: fn, en: en || fn }, d: { fr: fd || "", en: ed || fd || "" } });

const MENU = [
  { id: "formules", label: { fr: "Formules", en: "Set menus" }, groups: [{ items: [
    I("primo", "13,90", "Primo", null, "1 msemen, 2 baghrirs, une boisson chaude et une boisson froide, miel & amlou.", "1 msemen, 2 baghrirs, a hot and a cold drink, honey & amlou."),
    I("manzil", "19,90", "Manzil", null, "1 msemen, 1 baghrir et 1 harcha, 2 œufs au plat ou brouillés, boisson chaude et froide, tranche de fromage, miel, amlou, olives, huile d'olive & pain.", "1 msemen, 1 baghrir and 1 harcha, 2 fried or scrambled eggs, a hot and a cold drink, a slice of cheese, honey, amlou, olives, olive oil & bread."),
    I("healthy", "15,90", "Healthy", null, "Une assiette composée de petite salade, un demi-avocat, une salade, une tranche de blanc de poulet, une boisson chaude et une froide.", "A plate with a small salad, half an avocado, a salad, a slice of chicken breast, a hot and a cold drink."),
    I("orient", "21,90", "Orient", null, "1 msemen, 1 baghrir, 1 harcha, un tiramisu maison, une boisson chaude et une froide.", "1 msemen, 1 baghrir, 1 harcha, a homemade tiramisu, a hot and a cold drink."),
    I("duo", "49,90", "Duo", null, "2 soupes, 2 msemens, 2 baghrirs, 2 harchas, 2 assiettes d'œufs au plat ou brouillés, 2 boissons froides, miel, amlou & huile d'olive.", "2 soups, 2 msemens, 2 baghrirs, 2 harchas, 2 plates of fried or scrambled eggs, 2 cold drinks, honey, amlou & olive oil.")
  ] }] },
  { id: "sales", label: { fr: "Salés", en: "Savoury" }, groups: [{ items: [
    I("avocado-toast", "14,90", "Avocado toast", null, "Guacamole d'avocat, fromage frais, œuf poché, paprika, sauce hollandaise, citron vert.", "Avocado guacamole, cream cheese, poached egg, paprika, hollandaise sauce, lime."),
    I("msemen-garni", "14,90", "Msemen garni", "Filled msemen", "Msemen frais, garni de poulet mariné aux épices savoureuses et de cheddar fondu.", "Fresh msemen filled with chicken marinated in tasty spices and melted cheddar."),
    I("soupe-brick", "13,90", "Soupe & brick", "Soup & brick", "Soupe du jour, brick à la pomme de terre, poulet & cheddar.", "Soup of the day, potato brick pastry, chicken & cheddar."),
    I("le-club", "15,90", "Le Club", null, "Pain de campagne grillé, pesto, poêlée de tomates cerises, stracciatella, pastrami, salade & vinaigre balsamique.", "Toasted country bread, pesto, pan-fried cherry tomatoes, stracciatella, pastrami, salad & balsamic vinegar."),
    I("msemen-beef", "15,90", "Msemen beef", null, "Msemen frais, effiloché de bœuf cuisson longue durée, oignons confits & cheddar.", "Fresh msemen, slow-cooked pulled beef, caramelised onions & cheddar."),
    I("manzil-addict", "15,90", "Manzil addict", null, "Sur une base de msemen, 1 avocat tranché, bœuf effiloché, 2 œufs pochés, sauce hollandaise & paprika.", "On a msemen base: 1 sliced avocado, pulled beef, 2 poached eggs, hollandaise sauce & paprika.")
  ] }] },
  { id: "sucres", label: { fr: "Sucrés", en: "Sweet" }, groups: [{ items: [
    I("trio-pancakes", "12,90", "Trio de pancakes", "Pancake trio", "Trio de pancakes accompagnés de Nutella ou amlou & de fruits rouges frais.", "Three pancakes served with Nutella or amlou & fresh red berries."),
    I("tiramisu-maison", "8,90", "Tiramisu maison", "Homemade tiramisu", "Pistache ou amlou.", "Pistachio or amlou."),
    I("baghrir-gourmand", "8,90", "Baghrir gourmand", "Gourmet baghrir", "3 baghrirs au miel et beurre fondu, fruits frais de saison et pralin caramélisé.", "3 baghrirs with honey and melted butter, fresh seasonal fruit and caramelised praline."),
    I("msemen-gourmand", "8,90", "Msemen gourmand", "Gourmet msemen", "Msemen au Nutella ou amlou, fruits frais de saison, chantilly & pralin caramélisé.", "Msemen with Nutella or amlou, fresh seasonal fruit, whipped cream & caramelised praline."),
    I("le-bowl", "11,90", "Le bowl", "The bowl", "Yaourt grec, fruits frais de saison, amandes, avoine & miel.", "Greek yoghurt, fresh seasonal fruit, almonds, oats & honey."),
    I("baklava-bowl", "12,90", "Baklava bowl", null, "Sur une base de mascarpone, glace pistache & fleur d'oranger, granola de baklava, éclats de pistache & miel.", "On a mascarpone base: pistachio & orange-blossom ice cream, baklava granola, pistachio pieces & honey.")
  ] }] },
  { id: "carte", label: { fr: "À la carte", en: "À la carte" }, groups: [{ items: [
    I("assortiment-nature", "3,50", "Assortiment nature", "Plain selection", "Msemen ou baghrir ou harcha.", "Msemen or baghrir or harcha."),
    I("assortiment-fromage", "4,50", "Assortiment fromage", "Cheese selection", "Msemen fromage ou harcha fromage.", "Cheese msemen or cheese harcha."),
    I("soupe", "6,90", "Soupe", "Soup", "Soupe du jour.", "Soup of the day."),
    I("brick", "6,90", "Brick", null, "Brick carré à la pomme de terre, poulet & cheddar.", "Square potato brick pastry, chicken & cheddar."),
    I("supplements", "2,00", "Suppléments", "Extras", "Nutella, amlou, fromage, miel.", "Nutella, amlou, cheese, honey.")
  ] }] },
  { id: "boissons", label: { fr: "Boissons", en: "Drinks" }, groups: [
    { name: { fr: "Boissons chaudes", en: "Hot drinks" }, items: [
      I("expresso", "2,50", "Expresso", "Espresso"), I("the-menthe", "2,50", "Thé à la menthe", "Mint tea"),
      I("americano", "3,00", "Americano"), I("latte", "4,00", "Latte"), I("cappuccino", "4,50", "Cappuccino"),
      I("chocolat-chaud", "4,50", "Chocolat chaud", "Hot chocolate"), I("double-expresso", "4,00", "Double expresso", "Double espresso")] },
    { name: { fr: "Nos sodas", en: "Sodas" }, items: [
      I("selecto", "2,50", "Selecto"), I("hamoud", "2,50", "Hamoud"), I("cristalline", "2,50", "Cristalline")] },
    { name: { fr: "Boissons froides", en: "Cold drinks" }, items: [
      I("orange-presse", "6,00", "Orange pressé", "Fresh orange juice"),
      I("manzil-jus", "6,90", "Manzil", null, "Jus d'orange, amandes, dattes & lait.", "Orange juice, almonds, dates & milk."),
      I("duo-fruite", "6,90", "Duo fruité", "Fruity duo", "Smoothie fraîcheur fraise & banane.", "Fresh strawberry & banana smoothie."),
      I("detox", "6,90", "Détox", "Detox", "Booster à base de citron vert, concombre, pomme verte, gingembre, céleri & menthe, sans sucre.", "Booster of lime, cucumber, green apple, ginger, celery & mint, no added sugar."),
      I("tropical", "7,50", "Tropical", null, "Smoothie fraise, mangue, ananas & jus d'orange pressé.", "Strawberry, mango and pineapple smoothie with fresh orange juice."),
      I("mangue-ananas", "7,50", "Mangue ananas fusion", "Mango pineapple fusion", "Smoothie à base de jus d'orange pressé, mangue & ananas.", "Smoothie made with fresh orange juice, mango & pineapple.")] },
    { name: { fr: "Cafés & thés glacés", en: "Iced coffees & teas" }, items: [
      I("iced-latte", "4,90", "Iced latte", null, "Caramel ou pistache : +2 €.", "Caramel or pistachio: +€2."),
      I("spanish-latte", "5,90", "Spanish latte"), I("the-glace-peche", "5,90", "Thé glacé pêche", "Peach iced tea"),
      I("the-glace-rose", "5,90", "Thé glacé à la rose", "Rose iced tea"), I("the-glace-hibiscus", "5,90", "Thé glacé à l'hibiscus", "Hibiscus iced tea")] }
  ] }
];

function getLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q === "fr" || q === "en") return q;
  try { const s = localStorage.getItem("manzil-lang"); if (s === "fr" || s === "en") return s; } catch (e) {}
  return (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en";
}
function saveLang(l) { try { localStorage.setItem("manzil-lang", l); } catch (e) {} }
