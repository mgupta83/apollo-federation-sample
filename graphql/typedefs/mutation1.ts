import { gql } from "apollo-server-azure-functions";

export default gql `

extend type Mutation {
    mutation1: String
}

`;
