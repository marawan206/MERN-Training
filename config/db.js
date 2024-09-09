const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // Corrected typo
// No need to import these since they are already imported in the server.js file

async function connectDB () {
    try {
        await mongoose.connect(db, { // Could use .env for your mongouri and .gitignore it
            useNewUrlParser: true, 
            useUnifiedTopology: true, // Options to prevent deprecation warnings
        });

        console.log('MongoDB Connected!');
    } catch (err) {
        console.log(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
