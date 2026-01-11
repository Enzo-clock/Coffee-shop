// import express
import express from "express";
// gestion du .env
import dotenv from "dotenv";

// on charge les variables dans process.env
dotenv.config();

// import du routeur
import router from "./app/router.mjs";

// le serveur écoute sur le port défini dans le .env
// ou par défaut sur le port 3000, si le .env n'est pas présent
const PORT = process.env.PORT || 3000;

// on crée une application express
const app = express();

// configuration EJS
app.set("view engine", "ejs");
// on indique aussi le dossier de vues
app.set("views", "./app/views");

// fichiers statiques (images, CSS, JS (front), etc...).
app.use(express.static('public'));

// utilisation du router "home"
app.use("/", router);

// midlleware 404
app.use((req, res) => {
  // les infos globales du template (header) sont déjà transmises par le middleware localsMiddleware
  res.status(404).render("404");
});

// démarrer un serveur Web
app.listen(PORT, () => {
  console.log(`Application démarrée sur http://localhost:${PORT}`);
});
