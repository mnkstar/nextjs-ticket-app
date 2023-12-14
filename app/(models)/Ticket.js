import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((error) => {
        console.log(`Error in connecting Mongo DB ${error}`)
    })

mongoose.Promise = global.Promise

const ticketSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        status: String,
        progress: Number,
        active: Boolean,

    },
    {
        timestamps: true,
    }

);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;