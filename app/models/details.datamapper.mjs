// data mapper = l'endroit on écrit les requêtes vers le serveur de BDD
// le data mapper fait le lien entre les enregistrements SQL et les objets JS retournés

// import du client
import client from "../database.mjs";

const detailsDataMapper = {

    /**
     * get all coffees
     * @returns {Promise<[object]>} promo objects
     */
    getSelectedCoffee: async (id) => {
        // appeler une requête pour récupérer tous les cafés (par ordre alphabétique croissant)
        const results = await client.query(`
  SELECT
    coffee.*,
    country.name AS country_name,
    ARRAY_AGG(category.name) AS categories
  FROM coffee
  JOIN country ON coffee.country_id = country.id
  LEFT JOIN coffee_category ON coffee.id = coffee_category.coffee_id
  LEFT JOIN category ON coffee_category.category_id = category.id
  WHERE coffee.id = $1
  GROUP BY coffee.id, country.name
`, [id]);
        // on retourne la liste des données
        return results.rows;
    },
}

export default detailsDataMapper;