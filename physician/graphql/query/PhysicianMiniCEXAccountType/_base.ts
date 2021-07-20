import { gql } from "apollo-server-azure-functions"
import {IPhysicianMiniCEXAccountData} from '../../../interfaces'

export const typeDefs = gql`
  type PhysicianMiniCEXAccountType {
    _base: String
  }

`

export const resolvers = (root: IPhysicianMiniCEXAccountData, args, context, info) => {
    return '_base'
}


