import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        avatar: {
            type: String
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    },
    text: {
        type: String,
        required: true,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            }
        }
    ],
    comments: [
        {
            user: {
                id: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                    required: true
                },
                firstName: {
                    type: String,
                    required: true
                },
                lastName: {
                    type: String,
                    required: true
                },
                avatar: String,

            },
            text: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    created: {
        type: Date,
        default: Date.now()
    }
})

const Post = mongoose.model('Post', PostSchema)
export default Post