const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN);
        console.log("MongoDB connection successful.");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;