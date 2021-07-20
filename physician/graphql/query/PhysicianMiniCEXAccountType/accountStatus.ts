import { gql } from "apollo-server-azure-functions"
import {IPhysicianMiniCEXAccountData} from '../../../interfaces'

export const typeDefs = gql`
  extend type PhysicianMiniCEXAccountType {
    accountStatus: String
  }

`

export const resolvers = (root: IPhysicianMiniCEXAccountData, args, context, info): string => {
    return root.accountStatus
}


