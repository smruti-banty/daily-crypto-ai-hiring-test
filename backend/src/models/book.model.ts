import mongoose, {Document, Schema, Types} from "mongoose";

export interface IBook extends Document {
    title: string;
    author: string;
    genre: string;
    userId: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const bookSchema = new Schema<IBook>({
        title: {type: String, required: true},
        author: {type: String, required: true},
        genre: {type: String, required: true},
        userId: {type: Schema.Types.ObjectId, ref: "User", required: true}, // Reference to User model
    },
    {timestamps: true});

export default mongoose.model<IBook>('Book', bookSchema);