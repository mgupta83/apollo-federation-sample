import { gql } from "apollo-server-azure-functions"

export const typeDefs = gql`
  type Query {
    _empty: String
  }

`

export const resolvers = (root, args, context, info) => {
    return '_empty'
}


