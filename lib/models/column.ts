import mongoose ,{Schema , Document} from "mongoose"

export interface IColumn extends Document{ //type of IBoard is document

    name:string;
    boardId:mongoose.Types.ObjectId;
    order:number;
    jobApplications:mongoose.Types.ObjectId[];
    createdAt:Date;
    updatedAt:Date
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
    jobApplications:[
        {
            type:Schema.Types.ObjectId,
            ref:"JobApplication"
        }
    ]


},{
    timestamps:true
})

export default mongoose.models.Column || mongoose.model<IColumn>("Column", ColumnSchema)