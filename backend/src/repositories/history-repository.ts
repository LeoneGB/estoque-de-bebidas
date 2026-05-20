import fs from "fs/promises"
import { HistoryModel } from "../models/history-model"

export const historyRepository = async () => {
    const data = await fs.readFile("backend/src/database/history.json", "utf-8")
    const histories: HistoryModel[] = JSON.parse(data)

    return histories
}

export const writeHistory = async (history: HistoryModel): Promise<HistoryModel[]> => {
    const data = await fs.readFile("backend/src/database/history.json", "utf-8")
    const histories: HistoryModel[] = JSON.parse(data)

    histories.push(history)

    await fs.writeFile("backend/src/database/history.json",  JSON.stringify(histories, null, 2))
    
    return histories
}