import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express, { Express, Request, Response } from "express";
import "dotenv/config";
import connectToDatabase from "./functions/core/connectToDatabase";
import schema from "./graphql/schema";
import bodyParser from "body-parser";
import cors from "cors";

async function startServer() {
  try {
    const app: Express = express();
    const PORT = process.env.PORT || 3001;

    await connectToDatabase();

    const server = new ApolloServer({ schema });
    await server.start();
    // server.start();

    app.use("/graphql", bodyParser.json(), expressMiddleware(server));
    app.use(express.json());

    app.use(cors());

    app.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });

    app.listen(PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Error starting the server ${error}`);
    process.exit(1);
  }
}

startServer();
