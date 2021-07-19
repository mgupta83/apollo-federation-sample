import { gql } from "apollo-server-azure-functions";

export default gql `

extend type Query {
    query1: String
}

`;
