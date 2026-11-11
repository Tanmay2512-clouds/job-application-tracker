"use server"

import { getSession } from "../auth/auth"

interface jobApplicationData{

    company:string,
    position:string,
    location?:string,
    notes?:string,
    salary?:string,
    jobUrl?:string,
    tags?:string[],
    columnId?:string,
    boardId?:string,
    description?:string
}

export async function createJobApplication(data:jobApplicationData){
    const session = await getSession()

    if(!session?.user){
        return{error:"Unauthorized access"}
    }
}