import express from "express";
import 'dotenv/config';
import connectToDatabase from "./funtions/core/connectToDatabase"




const PORT = process.env.PORT || 3001

// connect to DB

connectToDatabase();

const app = express();

app.use
app.listen(PORT, () => {
    console.log(`${new Date().toString()}
    Server listening on port ${PORT}`);
})
