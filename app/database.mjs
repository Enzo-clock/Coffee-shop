// package permettant de se connecter à postgreSQL
import { Client } from "pg";

// on crée un client de connexion à PG
const client = new Client({
  // avec les infos de connexion
  // /!\ à mettre dans un .env !
  user: 'enzo',
  password: 'oco',
  host: 'localhost',
  database: 'ocoffee',
});

// on attend que le client soit connecté
await client.connect();

// un test
// const results = await client.query('SELECT * FROM "promo";');
// un objet de type Result qui contient plein d'infos sur les résultats...
// console.log(results);
// dont les lignes qui nous intéressent : .rows
// console.log(results.rows);

// on l'exporte pour l'utiliser ailleurs (contrôleurs)
export default client;