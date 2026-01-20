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
      console.error(error);
      // puis on envoie une 500 générique au client
      return res.status(500).render("500");
    }

  }
}