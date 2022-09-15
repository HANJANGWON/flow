import { gql } from "apollo-server";

export default gql`
  type LimitedExtension {
    id: Int!
    title: String!
    isCustom: Boolean!
  }

  type Query {
    seeExtension(title: String!): LimitedExtension
  }
`;
