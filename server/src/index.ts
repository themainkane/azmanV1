import { ApolloServer } from "apollo-server-express";
import express, { Express, Request, Response } from "express";
import 'dotenv/config';
import connectToDatabase from "./functions/core/connectToDatabase";
import schema from "./graphql/schema";

async function startServer() {
    try {
        const app: Express = express();
        const PORT = process.env.PORT || 3001;

        await connectToDatabase()

        const server = new ApolloServer({ schema })
        await server.start()
        server.applyMiddleware({ app, path: "/graphql" });
        app.use(express.json())

        app.get("/", (req: Request, res: Response) => {
            res.send("Express + TypeScript Server");
        });

        app.listen(PORT, () => {
            console.log(`[server]: Server is running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(`Error starting the server ${error}`);
        process.exit(1)
    }
}

startServer()