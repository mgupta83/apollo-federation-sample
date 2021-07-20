import { gql } from "apollo-server-azure-functions"
import {IPhysicianData} from '../../../interfaces'
import {getPhysicians} from '../../../functions'

export const typeDefs = gql`
  extend type Query {
    physicians: [PhysicianType]
  }

`

export const resolvers = (root, args, context, info): IPhysicianData[] => {
    return getPhysicians()
}


