import { ApolloServer } from "apollo-server-azure-functions";
import { HttpRequest, Context } from "@azure/functions";
import {ApolloGateway, LocalGraphQLDataSource} from '@apollo/gateway'
import physicianSchema from '../../physician/graphql/schema'
import minicexSchema from '../../minicex/graphql/schema'

const gateway = new ApolloGateway({
  serviceList: [
    { name: "physician", url: "http://physician" },
    { name: "minicex", url: "http://minicex" },
  ]
  ,
  buildService: ({url, name}) => {
    let schema
    switch(name){
      case 'physician': schema = new LocalGraphQLDataSource(physicianSchema); break
      case 'minicex': schema = new LocalGraphQLDataSource(minicexSchema); break
    }
    return schema
  }
})


const apolloServer = new ApolloServer({
    gateway,

    // Apollo Graph Manager (previously known as Apollo Engine)
    // When enabled and an `ENGINE_API_KEY` is set in the environment,
    // provides metrics, schema management and trace reporting.
    engine: false,

    // Subscriptions are unsupported but planned for a future Gateway version.
    subscriptions: false,
});

const graphqlHandler = (server, context, req) => {
  const graphqlHandlerObj = server.createHandler({
    cors: {
      origin: "*",
      preflightContinue: false, 
      credentials: true,
    },
  })

  // https://github.com/Azure/azure-functions-host/issues/6013
  req.headers["x-ms-privatelink-id"] = ""
  // apollo-server only reads this specific string
  req.headers["Access-Control-Request-Headers"] =
    req.headers["Access-Control-Request-Headers"] ||
    req.headers["access-control-request-headers"]
  return graphqlHandlerObj(context, req)
}

export default (context: Context, req: HttpRequest) => {
  return graphqlHandler(apolloServer, context, req);
};




