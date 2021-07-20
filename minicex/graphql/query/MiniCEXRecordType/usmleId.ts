import { gql } from "apollo-server-azure-functions"
import {IMiniCEXData} from '../../../interfaces'

export const typeDefs = gql`
  extend type MiniCEXRecordType {
    usmleId: String
  }

`

export const resolvers = (root: IMiniCEXData, args, context, info): string => {
    return root.usmleId
}


