import mongoose from "mongoose"

const Schema = mongoose.Schema


export const HouseSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    floors: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: false,
        default: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    }
})