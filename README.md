# Manzil — site statique
index.html, home.css, home.js        -> accueil (FR/EN)
carte/                               -> brunch menu (QR code) : onglets + photo au clic
shared/menu-data.js                  -> UNIQUE source du menu FR/EN (prix, textes, langue)
img/                                 -> photos de l'accueil (4 fichiers)
img/plats/                           -> 1 photo par plat, noms dans LISEZMOI.txt
QR code : npx qrcode -o qr-carte.png -w 1200 -m 2 "https://VOTRE-DOMAINE/carte/"
