import fs from "fs/promises"
import { DrinkModel } from "../models/drinks-model"

export const findAllDrinks = async (): Promise<DrinkModel[]> => {
    const data = await fs.readFile("backend/src/database/drinks.json", "utf-8")
    const drinks: DrinkModel[] = JSON.parse(data)

    return drinks
}

export const findDrinksById = async (id: number): Promise<DrinkModel | undefined> => {
    const data = await fs.readFile("backend/src/database/drinks.json", "utf-8")
    const drinks: DrinkModel[] = JSON.parse(data)

    return drinks.find(drink => drink.id === id)
}

export const filterEnergyDrinks = async (): Promise<DrinkModel[]> => {
    const data = await fs.readFile("backend/src/database/drinks.json", "utf-8")
    const drinks: DrinkModel[] = JSON.parse(data)

    return drinks.filter(drink => drink.energyDrink === true)
}

export const filterAlcoholicDrinks = async (): Promise<DrinkModel[]> => {
    const data = await fs.readFile("backend/src/database/drinks.json", "utf-8")
    const drinks: DrinkModel[] = JSON.parse(data)

    return drinks.filter(drink => drink.alcoholic === true)
}

export const insertDrink = async (drink: DrinkModel) => {
    const data = await fs.readFile("backend/src/database/drinks.json", "utf-8")
    const drinks: DrinkModel[] = JSON.parse(data)

    drinks.push(drink)

    await fs.writeFile(
      "backend/src/database/drinks.json",
      JSON.stringify(drinks, null, 2))
}

export const deleteOneDrink = async (id: number) => {
    const data = await fs.readFile("backend/src/database/drinks.json", "utf-8")
    const drinks: DrinkModel[] = JSON.parse(data)

    const index = drinks.findIndex(drink => drink.id === id)

    if (index !== -1) {
        drinks.splice(index, 1)
        await fs.writeFile(
            "backend/src/database/drinks.json",
            JSON.stringify(drinks, null, 2))
        return true
    } else {
        return false
    }
}

export const findAndModifyDrink = async (id: number, drink: DrinkModel) => {
    const data = await fs.readFile("backend/src/database/drinks.json", "utf-8")
    const drinks: DrinkModel[] = JSON.parse(data)

    const drinkIndex = drinks.findIndex(drink => drink.id === id)

    if (drinkIndex !== -1) {
        drinks[drinkIndex] = {...drinks[drinkIndex], ...drink}
        await fs.writeFile(
            "backend/src/database/drinks.json",
            JSON.stringify(drinks, null, 2))
        return drinks[drinkIndex]
    }

    return null
}