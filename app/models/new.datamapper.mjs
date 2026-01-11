// data mapper = l'endroit on écrit les requêtes vers le serveur de BDD
// le data mapper fait le lien entre les enregistrements SQL et les objets JS retournés

// import du client
import client from "../database.mjs";
import { Coffee } from "../models/Coffee.mjs";

const newcoffeesDataMapper = {

  /**
   * get all coffees
   * @returns {Promise<[object]>}
   */
  get3mostrecentCoffees: async () => {
    // appeler une requête pour récupérer tous les cafés (par ordre alphabétique croissant)
    const results = await client.query('SELECT * FROM "coffee" ORDER BY "updated_at" DESC LIMIT 3;');
    // Transformation des résultats en instances de Coffee
    const coffees = results.rows.map(row => {
      return new Coffee(
        row.id,
        row.name,
        row.description,
        row.reference,
        row.price_per_kg,
        row.available
      );
    });

    // Retourne le tableau d'instances de Coffee
    return coffees;
  },
};

export default newcoffeesDataMapper;