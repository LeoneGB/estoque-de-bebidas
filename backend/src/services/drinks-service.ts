import * as drinkRepository from "../repositories/drinks-repository"
import { DrinkModel } from "../models/drinks-model"
import * as historyService from "./history-service"

export const getDrinksService = async () => {
    const responseDrinksRepository = await drinkRepository.findAllDrinks()

    return responseDrinksRepository
}

export const getDrinksByIdService = async (id: number) => {
    const responseDrinksByIdRepository = await drinkRepository.findDrinksById(id)

    return responseDrinksByIdRepository
}

export const getEnergyDrinksService = async () => {
    const responseEnergyDrinksRepository = await drinkRepository.filterEnergyDrinks()

    return responseEnergyDrinksRepository
}

export const getAlcoholicDrinksService = async () => {
    const responseAlcoholicDrinksRepository = await drinkRepository.filterAlcoholicDrinks()

    return responseAlcoholicDrinksRepository
}

export const insertDrinkService = async (drink: DrinkModel) => {
    if (!drink.name ||
        !drink.company ||
        drink.alcoholic === undefined ||
        drink.energyDrink === undefined ||
        drink.quantity === undefined ||
        drink.price === undefined
    ) {
        return {
            message: "Erro"
        }
    } else {
        await drinkRepository.insertDrink(drink)

        const history = {
            type: "CREATE",
            drinkId: drink.id,
            drinkName: drink.name,
            date: new Date().toISOString()
        }

        await historyService.addHistory(history)

        return {
            message: "Bebida criada"
        }
    }
}

export const deleteDrinkByIdService = async (id: number) => {
    let response = null

    const drink = await drinkRepository.findDrinksById(id)

    if (!drink) {
        return {
            message: "Erro"
        }
    }

    const isDeleted = await drinkRepository.deleteOneDrink(id)

    if (isDeleted) {
        const history = {
            type: "DELETE",
            drinkId: drink.id,
            drinkName: drink.name,
            date: new Date().toISOString()
        }

        await historyService.addHistory(history)

        response = {
            message: "Bebida deletada"
        }
    } else {
        response = {
            message: "Erro"
        }
    }

    return response
}

export const updateDrinkByIdService = async (id: number, drink: DrinkModel) => {
    const responseUpdateDrinkRepository = await drinkRepository.findAndModifyDrink(id, drink)

    if (!responseUpdateDrinkRepository) {
        return {
            message: "Bebida não encontrada"
        }
    }

    const history = {
            type: "EDIT",
            drinkId: responseUpdateDrinkRepository.id,
            drinkName: responseUpdateDrinkRepository.name,
            date: new Date().toISOString()
        }

        await historyService.addHistory(history)

    return responseUpdateDrinkRepository
}