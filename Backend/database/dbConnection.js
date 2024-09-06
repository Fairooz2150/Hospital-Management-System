import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Life_Care_Hospital"
    }).then(() => {
        console.log("Connected to Database");
    }).catch(err => {
        console.log(`Some error occured while connecting to Database: ${err}`);
    })
}