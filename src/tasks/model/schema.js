import mongoose from "mongoose";
import methods from "./methods";

const TodoItemSchema = new mongoose.Schema({
    value: { 
        type: String, 
        required: true 
    },
    done: {
        type: Boolean,
        default: false,
        required: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

TodoItemSchema.methods = methods

mongoose.model('TodoItem', ArticleSchema);