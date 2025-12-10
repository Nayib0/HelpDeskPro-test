import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  ticketId: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
  message: string;
}

const CommentSchema = new Schema<IComment>({
  ticketId: { type: Schema.Types.ObjectId, ref: "Ticket", required: true },
  author: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  message: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Comment ||
  mongoose.model<IComment>("Comment", CommentSchema);
