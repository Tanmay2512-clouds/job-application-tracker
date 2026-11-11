import KanbanBoard from "@/components/kanban-board";
import { getSession } from "@/lib/auth/auth"
import connectDB from "@/lib/db";
import { initializeUserBoard } from "@/lib/init-user-board";
import { Board } from "@/lib/models";
import { redirect } from "next/navigation"

export default async function Dashboard(){
     const session = await getSession();
     if(!session?.user){
        redirect("/sign-in")
     }

     await connectDB()

     let board = await Board.findOne({
        userId:session.user.id,
        name:"Job Hunt"
     }).populate({
        path:"columns"
     })

     if(!board){
        await initializeUserBoard(session.user.id)
        board = await Board.findOne({
            userId:session.user.id,
            name:"Job Hunt"
        }).populate({
            path:"columns"
        })
     }

     if(!board){
        throw new Error("Could not find or create a board for this user.")
     }


    return(
        <div className="min-h-screen">
            <div className="container mx-auto p-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-black">Job Hunt</h1>
                    <p className="text-gray-600">Track your Job Application</p>
                </div>
                <KanbanBoard board={JSON.parse(JSON.stringify(board))} userId={session.user.id }/>
            </div>
        </div>
    )
}