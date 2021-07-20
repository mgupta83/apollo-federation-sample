import { gql } from "apollo-server-azure-functions"
import {IPhysicianData, IPhysicianMiniCEXAccountData} from '../../../interfaces'

export const typeDefs = gql`
  extend type PhysicianType {
    minicexAccount: PhysicianMiniCEXAccountType
  }

`

export const resolvers = (root: IPhysicianData, args, context, info): IPhysicianMiniCEXAccountData => {
    return root.minicex
}


