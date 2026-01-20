// data mapper = l'endroit on écrit les requêtes vers le serveur de BDD
// le data mapper fait le lien entre les enregistrements SQL et les objets JS retournés

// import du client
import client from "../database.mjs";

const catalogDataMapper = {

  /**
   * get all coffees
   * @returns {Promise<[object]>} promo objects
   */
  getAllCoffees: async () => {
    // appeler une requête pour récupérer tous les cafés (par ordre alphabétique croissant)
    const results = await client.query('SELECT coffee.*, country.name AS country_name FROM coffee JOIN country ON country.id = coffee.country_id ORDER BY coffee.created_at DESC;');
    // on retourne la liste des données
    return results.rows;
  },

  /**
   * get promo by id
   * @param {number} id promo id
   * @returns {Promise<object>} promo
   */
}

export default catalogDataMapper;
