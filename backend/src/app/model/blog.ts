import mongoose, { Document, Schema } from "mongoose";

interface IBlog extends Document {
  title: string;
  content: string;
  paragraph: string;
}

const BlogSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    content: { type: String, required: true },
    paragraph: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongoose.model<IBlog>("Blog", BlogSchema);

export { Blog, IBlog };
