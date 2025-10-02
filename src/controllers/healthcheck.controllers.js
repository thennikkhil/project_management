import {ApiResponse} from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

/* 
const healthCheck = (req, res) => {
    try {
        res.status(200).json(
            new ApiResponse(200, {message: "Server is healthy"})
        )
    } catch (error) {
        console.error("Error in healthCheck:", error);        
    }
}
    */

const healthCheck = asyncHandler(async (req, res) => {
    res.status(200).json(
        new ApiResponse(200, {message: "Server is healthy"})
    )
})


export {healthCheck};