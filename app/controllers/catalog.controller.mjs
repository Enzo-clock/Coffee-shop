import catalogDataMapper from "../models/catalog.datamapper.mjs";
import { getFlagFromCountry } from "../utils/flag.utils.mjs";

export const catalogController = {
  async list(req, res) {
    try {
      // récupérer tous les cafés
      const coffeeList = await catalogDataMapper.getAllCoffees();

      // enrichir avec les drapeaux
      const enrichedList = coffeeList.map(coffee => ({
        ...coffee,
        flagEmoji: getFlagFromCountry(coffee.country_name),
      }));

      // rendre la vue
      res.render("catalog", {
        coffeeList: enrichedList,
      });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }
};
