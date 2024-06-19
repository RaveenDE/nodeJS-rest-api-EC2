const mongoose = require('mongoose');

const connectDB = async () => {
    try {
<<<<<<< HEAD
        const conn = await mongoose.connect(process.env.MONGO_URI, {
=======
        const conn = await mongoose.connect("process.env.MONGO_URI", {
>>>>>>> 18e2753ba8bd041352dc0a186817dd0a4b8d889b
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
