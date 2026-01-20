export const countryToISO = {
  Italie: "IT",
  Colombie: "CO",
  Éthiopie: "ET",
  Brésil: "BR",
  Guatemala: "GT",
  Kenya: "KE",
  Indonésie: "ID",
  "Costa Rica": "CR",
  Vietnam: "VN",
  Tanzanie: "TZ",
  Jamaïque: "JM",
  Rwanda: "RW",
  Panama: "PA",
  Pérou: "PE",
  Hawaï: "US",
  Nicaragua: "NI"
};

export function isoToFlagEmoji(isoCode) {
  return isoCode
    .toUpperCase()
    .replace(/./g, char =>
      String.fromCodePoint(char.charCodeAt(0) + 127397)
    );
}

export function getFlagFromCountry(countryName) {
  const iso = countryToISO[countryName];
  return iso ? isoToFlagEmoji(iso) : "🏳️";
}
