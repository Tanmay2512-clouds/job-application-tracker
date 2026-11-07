import { schema } from "better-auth/client/plugins";
import mongoose ,{Schema , Document} from "mongoose"
import { types } from "util";

export interface IBoard extends Document{ //type of IBoard is document

    name:string;
    userId:string;
    columns:mongoose.Types.ObjectId[]; //collection of something not defined yet
    createdAt:Date;
    updtatedAt:Date
}

const BoardSchema = new Schema<IBoard>({ //type of BoardSchema is Iboard
    name:{
        type:String,
        required:true,

    },
    userId:{
        type:String,
        required:true,
        index:true
    },
    columns:[
        {
            type:Schema.Types.ObjectId,
            ref:"Column"
        }
    ]


},{
    timestamps:true
})

export default mongoose.models.Board || mongoose.model<IBoard>("Board", BoardSchema)