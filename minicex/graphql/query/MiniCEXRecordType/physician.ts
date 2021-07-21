import { gql } from "apollo-server-azure-functions"
import {IMiniCEXData} from '../../../interfaces'

export const typeDefs = gql`
  extend type MiniCEXRecordType {
    physician: PhysicianType
  }

  extend type PhysicianType @key(fields: "email") {
    email: String! @external
  }

`

export const resolvers = (root: IMiniCEXData, args, context, info) => {
    return {__typename: 'PhysicianType', email: root.physicianEmail}
}


