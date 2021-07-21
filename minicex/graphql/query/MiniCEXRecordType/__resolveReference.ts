import { gql } from "apollo-server-azure-functions"
import {IMiniCEXData} from '../../../interfaces'
import {getMiniCEXRecordByKeys} from '../../../functions'

export const typeDefs = gql`
  extend type MiniCEXRecordType @key(fields: "encounterId") {
    _emptyRef: String
  }

`

export const resolvers = (reference):IMiniCEXData => {
    return getMiniCEXRecordByKeys({encounterId: reference.encounterId})
}


