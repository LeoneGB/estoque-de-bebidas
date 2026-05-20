import { Router } from "express";
import * as drinkControllers from "./controllers/drinks-controller";
import * as historyControllers from "./controllers/history-controller";

const router = Router()

router.get("/bebidas", drinkControllers.getDrinks)
router.get("/bebidas/energeticos", drinkControllers.getEnergyDrinks)
router.get("/bebidas/alcoolicas", drinkControllers.getAlcoholicDrinks)
router.get("/historico", historyControllers.getHistory)
router.post("/bebidas/adicionar", drinkControllers.insertDrink)
router.delete("/bebidas/:id", drinkControllers.deleteDrinkById)
router.patch("/bebidas/:id", drinkControllers.updateDrinkById)
router.get("/bebidas/:id", drinkControllers.getDrinksById)

export default router