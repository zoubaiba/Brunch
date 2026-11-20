const T = {
  fr: { hint: "Touchez un plat pour voir sa photo.", allergTitle: "Allergènes :", allerg: "œufs, gluten, céleri, lait, fruits à coque.",
    note: "Nos recettes contiennent des allergènes : merci de vous renseigner auprès du serveur. Nos recettes ne sont pas modifiables. Boissons comprises dans les formules : chaudes (thé, expresso allongé, latte) ou froides (orange pressé, Manzil, duo fruité, détox).",
    nophoto: "Photo bientôt disponible", close: "Fermer" },
  en: { hint: "Tap a dish to see its photo.", allergTitle: "Allergens:", allerg: "eggs, gluten, celery, milk, tree nuts.",
    note: "Our recipes contain allergens: please ask our team. Recipes cannot be modified. Drinks included in set menus: hot (tea, long espresso, latte) or cold (fresh orange juice, Manzil, fruity duo, detox).",
    nophoto: "Photo coming soon", close: "Close" }
};
const $ = (s, r = document) => r.querySelector(s);
const closeDlg = () => { const d = $("#dlg"); d.close ? d.close() : d.removeAttribute("open"); };
const price = p => p + "\u00a0€";
let lang = getLang();
let cat = location.hash.slice(1);
if (!MENU.some(c => c.id === cat)) cat = MENU[0].id;

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  renderFooter(lang);
  document.querySelectorAll("[data-i18n]").forEach(e => e.textContent = t[e.dataset.i18n]);
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  $("#dlg-close").setAttribute("aria-label", t.close);
  $("#tabs").innerHTML = MENU.map(c =>
    `<button type="button" role="tab" id="tab-${c.id}" data-cat="${c.id}" aria-selected="${c.id === cat}">${c.label[lang]}</button>`).join("");
  $("#panel").setAttribute("aria-labelledby", "tab-" + cat);
  $("#panel").innerHTML = MENU.find(c => c.id === cat).groups.map(g => `
    <section class="grp">${g.name ? `<h2>${g.name[lang]}</h2>` : ""}
      <div class="list">${g.items.map(i => `
        <button type="button" class="item" data-id="${i.id}">
          <span class="row"><span class="nm">${i.n[lang]}</span><span class="price">${price(i.p)}</span></span>
          ${i.d[lang] ? `<span class="ds">${i.d[lang]}</span>` : ""}
        </button>`).join("")}
      </div>
    </section>`).join("");
}

function openDish(id) {
  let it;
  MENU.forEach(c => c.groups.forEach(g => g.items.forEach(i => { if (i.id === id) it = i; })));
  const dlg = $("#dlg"), img = $("#dlg-img"), no = $("#dlg-no");
  $("#dlg-t").textContent = it.n[lang];
  $("#dlg-p").textContent = price(it.p);
  $("#dlg-d").textContent = it.d[lang];
  no.textContent = T[lang].nophoto; no.hidden = true; img.hidden = false; img.alt = it.n[lang];
  img.onerror = () => { img.hidden = true; no.hidden = false; };
  img.src = "../img/plats/" + id + ".jpg";
  dlg.showModal ? dlg.showModal() : dlg.setAttribute("open", "");
}

$("#tabs").addEventListener("click", e => {
  const b = e.target.closest("[data-cat]"); if (!b) return;
  cat = b.dataset.cat; try { history.replaceState(null, "", "#" + cat); } catch (err) {} render();
});
$("#panel").addEventListener("click", e => { const b = e.target.closest("[data-id]"); if (b) openDish(b.dataset.id); });
$("#dlg-close").addEventListener("click", closeDlg);
$("#dlg").addEventListener("click", e => { if (e.target === $("#dlg")) closeDlg(); });
document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => {
  lang = b.dataset.lang; saveLang(lang); if ($("#dlg").hasAttribute("open")) closeDlg(); render();
}));
render();
