import mongoose  from "mongoose";

const connectToMongoDB = async() => {

    try {
            await mongoose.connect(process.env.MONGO_DB_URI);
            console.log("connected to database")
    } catch (error) {
        console.log("failed to connect to the database", error.message)
    }
}

export default connectToMongoDB;