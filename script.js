'use strict';
// ****** FIT email ***************
let jmeno = prompt('Zadej  křestní jméno:');
let prijmeni = prompt('Zadej přijmení');

jmeno = jmeno.trim().toLowerCase();
prijmeni = prijmeni.trim().toLowerCase();

const vyriznuteJmeno = jmeno.slice(0, 5);
const vyriznutePrijmeni = prijmeni.slice(0, 3);

document.write(`<h2>Váš e-mail je:</h2>
<p>${vyriznuteJmeno}${vyriznutePrijmeni}@fit.cvut.cz`);

// ****** množstevní slevy ***************

const pocetKusu = Number(prompt('Kolik kusů triček si objednáte?'));

let celkovaCena;

if (pocetKusu < 50) {
  celkovaCena = pocetKusu * 300;
} else if (pocetKusu >= 50 && pocetKusu <= 200) {
  celkovaCena = pocetKusu * 250;
} else if (pocetKusu > 200 && pocetKusu <= 500) {
  celkovaCena = pocetKusu * 200;
} else if (pocetKusu > 500 && pocetKusu <= 1000) {
  celkovaCena = pocetKusu * 150;
} else {
  celkovaCena = pocetKusu * 120;
}

document.write(`<h1>Souhrn vaší objednávky:</h1>
<p>Objednali jste celkem ${pocetKusu} triček, v celkové hodnotě ${celkovaCena} Kč.`);

// ****** superhrubá mzda ***************

const hodinovka = Number(prompt('zadej hodinovou sazbu'));
const uvazek = Number(prompt('Zadej výši úvazku v procentech'));
const prepoctenyUvazek = uvazek / 100;

const hrubaMzda = hodinovka * 8 * prepoctenyUvazek * 21;

const superHrubaMzda = Math.ceil(
  hrubaMzda + 0.09 * hrubaMzda + 0.248 * hrubaMzda,
);

const hrubaMzdaBezPojisteni =
  hrubaMzda - (0.045 * hrubaMzda + 0.065 * hrubaMzda);

const danovyZaklad = Math.ceil(superHrubaMzda / 100) * 100;

const dan = danovyZaklad * 0.15;

const cistaMzda = Math.floor(hrubaMzdaBezPojisteni - dan + 2070);
console.log(cistaMzda);

// ******** ruleta *********************

const cislo = Number(prompt('Zadej číslo z rulety (0-36)'));

let barva;
let sudoLicho;

if (cislo === 0) {
  barva = 'zelená';
  sudoLicho = 'nula';
  document.write(
    `<p>Tvé číslo ${cislo} je ${sudoLicho} a má barvu: ${barva}</p>`,
  );
} else if (cislo % 2 === 0 && cislo > 0 && cislo < 37) {
  sudoLicho = 'sudé';
  if ((cislo >= 1 && cislo <= 10) || (cislo >= 19 && cislo <= 28)) {
    barva = 'černá';
  } else if ((cislo >= 11 && cislo <= 18) || (cislo >= 29 && cislo <= 36)) {
    barva = 'červená';
  }
  document.write(
    `<p>Tvé číslo ${cislo} je ${sudoLicho} a má barvu: ${barva}</p>`,
  );
} else if (cislo % 2 === 1 && cislo > 0 && cislo < 37) {
  sudoLicho = 'liché';
  if ((cislo >= 1 && cislo <= 10) || (cislo >= 19 && cislo <= 28)) {
    barva = 'červená';
  } else if ((cislo >= 11 && cislo <= 18) || (cislo >= 29 && cislo <= 36)) {
    barva = 'černá';
  }
  document.write(
    `<p>Tvé číslo ${cislo} je ${sudoLicho} a má barvu: ${barva}</p>`,
  );
} else {
  document.write(`<p>Tvé číslo ${cislo} není číslo z rulety!!!</p>`);
}

// ******** přestupný rok 1 *********************

const rok = Number(prompt('Zadej rok:'));

let prestupnost;

if (rok % 4 !== 0) {
  prestupnost = 'nepřestupný rok';
} else {
  if (rok % 100 === 0 && rok % 400 !== 0) {
    prestupnost = 'nepřestupný rok';
  } else {
    prestupnost = 'přestupný rok';
  }
}

document.write(`<p>Tvůj zadaný rok ${rok} je ${prestupnost}.<p/>`);

// ******** přestupný rok - nejednodušší zápis *********************

const rok = Number(prompt('Zadej rok:'));

let prestupnost = 'nepřestupný';

if (rok % 4 === 0) {
  prestupnost = 'přestupný';
  if (rok % 100 === 0 && rok % 400 !== 0) {
    prestupnost = 'nepřestupný';
  }
}

document.write(`<p>Tvůj zadaný rok ${rok} je ${prestupnost}.<p/>`);
