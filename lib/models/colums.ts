import { number } from "better-auth";
import { schema } from "better-auth/client/plugins";
import mongoose ,{Schema , Document} from "mongoose"
import { types } from "util";

export interface IColumn extends Document{ //type of IBoard is document

    name:string;
    boardId:mongoose.Types.ObjectId;
    order:number;
    jobApplication :mongoose.Types.ObjectId[]; //collection of something not defined yet
    createdAt:Date;
    updtatedAt:Date
}

const ColumnSchema = new Schema<IColumn>({ //type of BoardSchema is Iboard
    name:{
        type:String,
        required:true,

    },
    boardId:{
        type:Schema.Types.ObjectId, //type for the default field
        ref:"Board",
        required:true,
        index:true
    },
    order:{
        type:Number,
        required:true,
        default:0
    },
    jobApplication:[
        {
            type:Schema.Types.ObjectId,
            ref:"JobApplication"
        }
    ]


},{
    timestamps:true
})

export default mongoose.models.Column || mongoose.model<IColumn>("Column", ColumnSchema)