import newcoffeesDataMapper from "../models/new.datamapper.mjs";

export const mainController = {

  home: async (req, res) => {

    try {

      // on va chercher toutes les promos grâce au data mapper
      const new3coffeeList = await newcoffeesDataMapper.get3mostrecentCoffees();

      // template de liste avec des données
      res.render("index", {
        new3coffeeList,
      });

    } catch (error) {
      // on pensera à logguer le vrai message d'erreur en prod ici
      logger.error(error.message);
      // puis on envoie une 500 générique au client
      return res.status(500).render("500");
    }

  }
}