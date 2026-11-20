const H = {
  fr: {
    nav1:"La carte", nav2:"Le comptoir", nav3:"Adresse", visit:"Venir bruncher",
    badge:"Coffee shop & brunch marocain",
    h1:"Le brunch marocain, généreux et fait maison",
    lead:"Des baghrir aux mille trous garnis de fruits rouges, des msemen dorés à la minute, de l'avocado toast fleuri et un vrai thé à la menthe servi bien haut dans notre salon berbère.",
    cta:"Explorer toute la carte", alt1:"Pile de baghrir au miel, bananes et menthe",
    marquee:["Avocado toast fleuri & œuf poché","Banquette berbère & comptoir zellige","Latte art en tasse à carreaux","Baghrir mille trous aux fruits rouges","Thé à la menthe fraîche"],
    cards:[
      ["Baghrir aux fruits rouges & thé coulé","Baghrir mille trous dorés, groseilles, fraises fraîches, granola bowl au miel, smoothie fraise & latte dans notre tasse à carreaux.","Baghrir aux fruits rouges nappé de miel"],
      ["La banquette berbère & le mur Manzil","Notre coin salon avec mur terracotta, coussins berbères à franges, avocado toast fleuri, roulés salés dorés et mini-tajine d'olives.","Salle avec banquette et tables"],
      ["La grande tablée généreuse à partager","Œufs nappés de sauce onctueuse, crêpe salée croustillante, baghrir aux fruits frais, théière traditionnelle et boissons maison.","Œuf au plat sur pain grillé"],
      ["Le comptoir en zellige & tabourets vert sauge","Ambiance artisanale avec carreaux de zellige terracotta, tabourets vert sauge, paniers muraux tressés et luminaire en laiton chaud.","Comptoir du coffee shop et fauteuils en rotin"]
    ]
  },
  en: {
    nav1:"The menu", nav2:"The counter", nav3:"Address", visit:"Come for brunch",
    badge:"Moroccan coffee shop & brunch",
    h1:"Moroccan brunch, generous and homemade",
    lead:"Thousand-hole baghrir topped with red berries, msemen golden-fried to order, flowered avocado toast and real mint tea poured high in our Berber lounge.",
    cta:"Explore the full menu", alt1:"Stack of baghrir with honey, bananas and mint",
    marquee:["Flowered avocado toast & poached egg","Berber banquette & zellige counter","Latte art in a tiled cup","Thousand-hole baghrir with red berries","Fresh mint tea"],
    cards:[
      ["Red-berry baghrir & poured tea","Golden thousand-hole baghrir, redcurrants, fresh strawberries, honey granola bowl, strawberry smoothie & latte in our tiled cup.","Baghrir with red berries and honey"],
      ["The Berber banquette & the Manzil wall","Our lounge corner with terracotta wall, fringed Berber cushions, flowered avocado toast, golden savoury rolls and a mini olive tagine.","Dining room with banquette and tables"],
      ["The generous table to share","Eggs under a silky sauce, crispy savoury crêpe, baghrir with fresh fruit, traditional teapot and homemade drinks.","Fried egg on toasted bread"],
      ["The zellige counter & sage-green stools","Artisan atmosphere with terracotta zellige tiles, sage-green stools, woven wall baskets and warm brass lighting.","Coffee shop counter and rattan chairs"]
    ]
  }
};
const IMGS = ["img/baghrir.jpg","img/banquette.jpg","img/brunch.jpg","img/comptoir.jpg"];

function render(lang) {
  const t = H[lang];
  document.documentElement.lang = lang;
  renderFooter(lang);
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t[e.dataset.i18n]);
  document.querySelectorAll("[data-i18n-alt]").forEach(e => e.alt = t[e.dataset.i18nAlt]);
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  const m = t.marquee.map(s => `<span>${s}</span>`).join("");
  document.getElementById("track").innerHTML = m + m;           /* x2 = boucle sans coupure */
  document.getElementById("menu").innerHTML = ["formules", "sales", "sucres"].map(id => { const c = MENU.find(x => x.id === id); return `
    <section class="cat">
      <h3>${c.label[lang]}</h3>
      ${c.groups[0].items.slice(0, 3).map(i => `<article class="item"><div class="row"><h4>${i.n[lang]}</h4><span class="price">${i.p}\u00a0€</span></div><p>${i.d[lang]}</p></article>`).join("")}
    </section>`; }).join("");
  document.getElementById("cards").innerHTML = t.cards.map((c, i) => `
    <article class="card"><img src="${IMGS[i]}" width="600" height="750" loading="lazy" alt="${c[2]}"><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join("");
}
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => { render(b.dataset.lang); saveLang(b.dataset.lang); }));
render(getLang());
