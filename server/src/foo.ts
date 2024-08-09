import express, { Application } from "express";
import 'dotenv/config';
import { ApolloServer } from "apollo-server-express";
import connectToDatabase from "./functions/core/connectToDatabase.js"

const PORT = process.env.PORT;
const app: Application = express();

async function startServer() {
  try {
    await connectToDatabase();

    const server = new ApolloServer({});
    await server.start()
    server.applyMiddleware({ app, path: "/graphql" });
    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    app.listen(PORT, () => {
      console.log(`${new Date().toString()} Server listening on port ${PORT}`);
      console.log(`GraphQL endpoint available at http://localhost:${PORT}${server.graphqlPath}`);
    });
  } catch (error) {
    console.log(`Error starting the server ${error}`);
    process.exit(1)
  }
}

startServer()
