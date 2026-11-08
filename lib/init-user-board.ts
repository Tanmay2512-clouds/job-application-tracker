import connectDB from "./db";
import {Board,Column} from "./models"

export async function initializeUserBoard(userId: string){
    try{
        await connectDB()
        //Check if board already exists

        const existingBoard = await Board.findOne({userId,name:"Job Hunt"})
        if(existingBoard){
            return existingBoard
        }
        
        //Creating the board
        const board = await Board.create({
            name:"Job Hunt"
        })

    }catch(err){
        throw err
    }
}