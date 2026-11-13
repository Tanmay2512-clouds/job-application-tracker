import { string } from "better-auth";
import { schema } from "better-auth/client/plugins";
import { Sticker } from "lucide-react";
import mongoose,{Schema,Document, mongo} from "mongoose";
import { getSession } from "../auth/auth";
import { error } from "console";
import { JobApplication } from ".";

export interface IJobApplication extends Document{
    company :string;
    position:string;
    loacation?:string;
    status:string;
    columnId:mongoose.Types.ObjectId;
    boardId:mongoose.Types.ObjectId;
    userId:string;
    order:number;
    notes?:string;
    salary?:string;
    jobUrl?: string;
    appliedDate?:string;
    tags?:string[];
    description?:string;
    createdAt:Date;
    updatedAt:Date  
}

const JobApplicationSchema =  new Schema<IJobApplication>({
    company:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    loacation:{
        type:String
    },
    status:{
        type:String,
        required:true,
        default:"applied"
    },
    columnId:{
        type:Schema.Types.ObjectId,
        ref:"Column",
        required:true,
        index:true
    },
    boardId:{
        type:Schema.Types.ObjectId,
        ref:"Board",
        required:true,
        index:true
    },
    userId:{
        type:String,
        required:true,
        index:true
    },
    order:{
        type:Number,
        required:true,
        default:0
    },
    notes:{
        type:String
    },
    salary:{
        type:String
    },
    jobUrl:{
        type:String
    },
    appliedDate:{
        type:Date
    },
    tags:[
        {
            type:String
        }
    ],
    description:{
        type:String
    }
},{timestamps:true})


export async function updateJobApplication(id:string,
    updates:{
        company?:string;
        position?:string;
        location?:string;
        notes?:string;
        salary?:string;
        jobUrl?:string;
        columnId?:string;
        order?:number;
        tags?:string[];
        description?:string;
    }
){
    const session = await getSession()

    if(!session?.user){
        return{error:"Unauthorized"}

    }

    const jobApplication = await JobApplication.findById(id)

    const {columnId ,order,...otherUpdates} = updates

    const updatesToApply:Partial<{
        company:string;
        position:string;
        location:string;
        notes:string;
        salary:string;
        jobUrl:string;
        columnId:string;
        order:number;
        tags:string[];
        description:string;
    }> = otherUpdates
}


export default mongoose.models.JobApplication || mongoose.model<IJobApplication>("JobApplication",JobApplicationSchema)  