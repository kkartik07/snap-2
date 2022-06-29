const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/Ecommerce')
        .then(() => {
            console.log("Successfully connected to MongoDB")
        })

}

module.exports = connectDatabase;