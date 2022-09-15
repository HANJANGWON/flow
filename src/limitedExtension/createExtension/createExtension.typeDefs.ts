import { gql } from "apollo-server";

export default gql`
  type CreateExtensionResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    createExtension(title: String!, isCustom: Boolean!): CreateExtensionResult
  }
`;
