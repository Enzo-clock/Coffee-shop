import catalogDataMapper from "../models/catalog.datamapper.mjs";

const countryToISO = {
  "Italie": "IT",
  "Colombie": "CO",
  "Éthiopie": "ET",
  "Brésil": "BR",
  "Guatemala": "GT",
  "Kenya": "KE",
  "Indonésie": "ID",
  "Costa Rica": "CR",
  "Vietnam": "VN",
  "Tanzanie": "TZ",
  "Jamaïque": "JM",
  "Rwanda": "RW",
  "Panama": "PA",
  "Pérou": "PE",
  "Hawaï": "US", // Hawaï appartient aux USA → drapeau américain
  "Nicaragua": "NI"
};
// Fonction qui convertit un code ISO en emoji drapeau
function isoToFlagEmoji(isoCode) {
  return isoCode
    .toUpperCase()
    .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
}
export const catalogController = {

  list: async (req, res) => {

    try {

      // on va chercher tous les cafés grâce au data mapper
      const coffeeList = await catalogDataMapper.getAllCoffees();
      // on enrichit la liste avec les drapeaux
      const enrichedList = coffeeList.map(coffee => {
        const iso = countryToISO[coffee.country_name];

        return {
          ...coffee,
          flagEmoji: iso ? isoToFlagEmoji(iso) : "🏳️" // drapeau blanc si pays inconnu
        };
      });

      // template de liste avec des données
      res.render("catalog", {
        coffeeList: enrichedList,
      });

    } catch (error) {
      // on pensera à logguer le vrai message d'erreur en prod ici
      logger.error(error.message);
      // puis on envoie une 500 générique au client
      return res.status(500).render("500");
    }

  }
}