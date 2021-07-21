import { gql } from "apollo-server-azure-functions"
import {IPhysicianData} from '../../../interfaces'

export const typeDefs = gql`
  extend type PhysicianType {
    email: String!
  }

`

export const resolvers = (root: IPhysicianData, args, context, info): string => {
    return root.email
}


