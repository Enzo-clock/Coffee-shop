import express from "express";

import { mainController } from "./controllers/main.controller.mjs";
import { catalogController } from "./controllers/catalog.controller.mjs";
import { detailsController } from "./controllers/details.controller.mjs";

// Un routeur express
const router = express.Router();

// route index
router.get("/", mainController.home);
// route catalog
router.get("/catalog", catalogController.list);
// route details
router.get("/coffee/:id", detailsController.coffeedetail);

export default router;