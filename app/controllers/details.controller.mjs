import detailsDataMapper from "../models/details.datamapper.mjs";
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
    "Hawaï": "US",  // Hawaï = USA
    "Nicaragua": "NI"
};

// Convertit un code ISO en emoji drapeau
function isoToFlagEmoji(isoCode) {
    return isoCode
        .toUpperCase()
        .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

export const detailsController = {

    coffeedetail: async (req, res) => {

        try {
            const { id } = req.params; // Récupère l'ID depuis l'URL
            const results = await detailsDataMapper.getSelectedCoffee(id);
            if (!results.length) {
                return res.status(404).render("404"); // Café non trouvé
            }
            const selectedcoffee = results[0];
            // Ajout du drapeau exactement comme dans le catalogController
            const iso = countryToISO[selectedcoffee.country_name];
            selectedcoffee.flagEmoji = iso ? isoToFlagEmoji(iso) : "🏳️";
            res.render("details", { selectedcoffee });

        } catch (error) {
            // on pensera à logguer le vrai message d'erreur en prod ici
            logger.error(error.message);
            // puis on envoie une 500 générique au client
            return res.status(500).render("500");
        }

    }
}