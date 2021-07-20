process.on("uncaughtException", (err) => {
  console.log(`*** [minicex-unhandled-error] - ${JSON.stringify(err)}`)
  process.exit(1);
});

import { HttpRequest, Context } from "@azure/functions";
import GraphqlStartup from './graphql/startup'


// CODE EXCEUTION @ API CALL
export default (context: Context, req: HttpRequest) => {
  return GraphqlStartup(context, req);
}





