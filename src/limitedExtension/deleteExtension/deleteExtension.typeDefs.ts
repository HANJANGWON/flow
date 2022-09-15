import { gql } from "apollo-server";

export default gql`
  type Mutation {
    deleteExtension(id: Int!): MutationResponse!
  }
`;
