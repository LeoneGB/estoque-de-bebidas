import { Request, Response } from "express"
import * as historyService from "../services/history-service"

export const getHistory = async (req: Request, res: Response) => {
    const responseHistoryService = await historyService.getHistoryService()

    res.json(responseHistoryService)
}