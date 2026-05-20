import {Request, Response} from "express"
import * as drinkService from "../services/drinks-service"
import { DrinkModel } from "../models/drinks-model"

export const getDrinks = async (req: Request, res: Response) => {
    const responseDrinksService = await drinkService.getDrinksService()

    res.json(responseDrinksService)
}

export const getDrinksById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string)
    const responseDrinksByIdService = await drinkService.getDrinksByIdService(id)

    res.json(responseDrinksByIdService)
}

export const getEnergyDrinks = async (req: Request, res: Response) => {
    const responseEnergyDrinksService = await drinkService.getEnergyDrinksService()

    res.json(responseEnergyDrinksService)
}

export const getAlcoholicDrinks = async (req: Request, res: Response) => {
    const responseAlcoholicDrinksService = await drinkService.getAlcoholicDrinksService()

    res.json(responseAlcoholicDrinksService)
}

export const insertDrink = async (req: Request, res: Response) => {
    const bodyValue: DrinkModel = req.body
    const responseInsertDrink = await drinkService.insertDrinkService(bodyValue)

    res.json(responseInsertDrink)
}

export const deleteDrinkById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string)
    const responseDeleteDrinkService = await drinkService.deleteDrinkByIdService(id)

    res.json(responseDeleteDrinkService)
}

export const updateDrinkById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string)
    const bodyValue = req.body
    const responseUpdateDrinkService = await drinkService.updateDrinkByIdService(id, bodyValue)

    res.json(responseUpdateDrinkService)
}

