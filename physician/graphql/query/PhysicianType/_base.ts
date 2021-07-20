import { gql } from "apollo-server-azure-functions"
import {IPhysicianData} from '../../../interfaces'

export const typeDefs = gql`
  type PhysicianType {
    _base: String
  }

`

export const resolvers = (root: IPhysicianData, args, context, info) => {
    return '_base'
}


