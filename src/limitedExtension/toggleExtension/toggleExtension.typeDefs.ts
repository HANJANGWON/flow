import { gql } from "apollo-server";

export default gql`
  type Mutation {
    toggleExtension(id: Int!): MutationResponse
  }
`;
