import { gql } from "apollo-server-azure-functions"
import {IMiniCEXData} from '../../../interfaces'

export const typeDefs = gql`
  extend type MiniCEXRecordType {
    physicianEmail: String
  }

`

export const resolvers = (root: IMiniCEXData, args, context, info): string => {
    return root.physicianEmail
}


