import { gql } from "apollo-server-azure-functions"
import {IMiniCEXData} from '../../../interfaces'
import {getMiniCEXRecords} from '../../../functions'

export const typeDefs = gql`
  extend type Query {
    minicexRecords: [MiniCEXRecordType]
  }

`

export const resolvers = (root, args, context, info): IMiniCEXData[] => {
    return getMiniCEXRecords()
}


