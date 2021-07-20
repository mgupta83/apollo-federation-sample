import { gql } from "apollo-server-azure-functions"
import {IPhysicianData} from '../../../interfaces'
import {physicians} from '../../../functions/getPhysicianData'

export const typeDefs = gql`
  extend type Query {
    physicians: [PhysicianType]
  }

`

export const resolvers = (): IPhysicianData[] => {
    return physicians
}


