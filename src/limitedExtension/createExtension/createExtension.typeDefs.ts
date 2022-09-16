import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createExtension(
      title: String!
      isCustom: Boolean!
      isActivated: Boolean!
    ): MutationResponse!
  }
`;
