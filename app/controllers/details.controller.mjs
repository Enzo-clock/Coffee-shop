import detailsDataMapper from "../models/details.datamapper.mjs";
import { getFlagFromCountry } from "../utils/flag.utils.mjs";

export const detailsController = {

  async show(req, res) {
    try {
      const coffeeId = Number(req.params.id);

      if (Number.isNaN(coffeeId)) {
        return res.status(400).render("404");
      }

      const coffees = await detailsDataMapper.getSelectedCoffee(coffeeId);
      const coffee = coffees[0];

      if (!coffee) {
        return res.status(404).render("404");
      }

      coffee.flagEmoji = getFlagFromCountry(coffee.country_name);

      res.render("details", {
        coffee,
      });

    } catch (error) {
      console.error(error);
      res.status(500).render("500");
    }
  }

};
