import { gql } from "apollo-server-azure-functions"
import {IPhysicianData} from '../../../interfaces'
import {getPhysicianByKeys} from '../../../functions'

export const typeDefs = gql`
  extend type PhysicianType @key(fields: "email") {
  }

`

export const resolvers = (reference):IPhysicianData => {
    return getPhysicianByKeys({email: reference.email})
}


