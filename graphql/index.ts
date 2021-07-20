import { ApolloServer } from "apollo-server-azure-functions";
import { HttpRequest, Context } from "@azure/functions";
import ApolloServerFunctions from "./ApolloServerFunctions";

process.on("uncaughtException", (err) => {
    console.log(`*** [graphql-unhandled-error] - ${JSON.stringify(err)}`)
    process.exit(1);
});


const serverConfig = ApolloServerFunctions.serverConfig();

const server = new ApolloServer({
  ...serverConfig
});

export default (context: Context, req: HttpRequest) => {
  return ApolloServerFunctions.graphqlHandler(server, context, req);
};