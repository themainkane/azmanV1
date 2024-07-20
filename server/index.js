import express from "express";

const PORT = process.env.PORT || 3001

const app = express();

app.get("/api", (req, res)=> {
    res.json({message: "Server Working; Hello MotherFucker"})
})
app.listen(PORT, () => {

    console.log(`${new Date().toString()}
    Server listening on port ${PORT}`);
})
