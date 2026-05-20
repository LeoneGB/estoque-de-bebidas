import { HistoryModel } from "../models/history-model"
import * as historyRepository from "../repositories/history-repository"

export const getHistoryService = async () => {
    const responseHistoryRepository = await historyRepository.historyRepository()

    return responseHistoryRepository
}

export const addHistory = async (history: HistoryModel) => {
    const responseHistoryRepository = await historyRepository.writeHistory(history)

    return responseHistoryRepository
}