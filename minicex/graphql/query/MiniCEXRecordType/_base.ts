import { gql } from "apollo-server-azure-functions"
import {IMiniCEXData} from '../../../interfaces'

export const typeDefs = gql`
  type MiniCEXRecordType {
    _base: String
  }

`

export const resolvers = (root: IMiniCEXData, args, context, info) => {
    return '_base'
}


