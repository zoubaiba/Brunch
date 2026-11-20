/* Pied de page commun (/ et /carte). Liens et horaires : modifier ici, une seule fois. */
const LINKS = {
  insta: "https://www.instagram.com/manzil.brunch/",
  tiktok: "https://www.tiktok.com/@manzil.brunch",
  review: "https://www.google.com/maps/search/?api=1&query=Manzil+brunch+Marseille", /* TODO : remplacer par le lien d'avis Google exact */
  maps: "https://www.google.com/maps/search/?api=1&query=Manzil+Marseille",
  tel: "tel:+33614295500", phone: "06 14 29 55 00"
};
const F = {
  fr: { where: "Manzil — Marseille", sub: "Salle climatisée & coin banquette berbère", maps: "Itinéraire Maps",
    hoursT: "Horaires d'ouverture", hours: ["Du samedi au jeudi", "de 10h à 16h", "Fermé le vendredi"],
    callT: "Réservation & infos", followT: "Suivez-nous", review: "Donner un avis" },
  en: { where: "Manzil — Marseille", sub: "Air-conditioned room & Berber banquette corner", maps: "Directions on Maps",
    hoursT: "Opening hours", hours: ["Saturday to Thursday", "10 am to 4 pm", "Closed on Fridays"],
    callT: "Call us", followT: "Follow us", review: "Leave a review" }
};
const IC = {
  insta: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.3 7.3 0 0 0 4.2 1.3V7.3a4.3 4.3 0 0 1-3.1-1.5z"/></svg>'
};
function renderFooter(lang) {
  const f = F[lang], el = document.getElementById("adresse");
  if (!el) return;
  el.className = "sf";
  el.innerHTML = `<div class="sf-in">
    <div><h2>${f.where}</h2><p>${f.sub}</p>
      <a class="sf-btn ghost" href="${LINKS.maps}" target="_blank" rel="noopener">${f.maps}</a></div>
    <div><h2>${f.hoursT}</h2><p>${f.hours.join("<br>")}</p></div>
    <div><h2>${f.callT}</h2><p><a class="sf-tel" href="${LINKS.tel}">${LINKS.phone}</a></p>
      <a class="sf-btn" href="${LINKS.review}" target="_blank" rel="noopener">★ ${f.review}</a></div>
    <div><h2>${f.followT}</h2>
      <ul class="sf-soc">
        <li><a href="${LINKS.insta}" target="_blank" rel="noopener">${IC.insta}<span>Instagram</span></a></li>
        <li><a href="${LINKS.tiktok}" target="_blank" rel="noopener">${IC.tiktok}<span>TikTok</span></a></li>
      </ul></div>
  </div>`;
}
