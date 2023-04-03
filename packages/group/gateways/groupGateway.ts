import { GraphQLClient, gql } from "graphql-request";
import { Group } from "../models/group";

export class GroupGateway {
  private graphQLClient: GraphQLClient;
  constructor(graphQLClient: GraphQLClient) {
    this.graphQLClient = graphQLClient;
  }
  public getGroups(): Promise<{ group: [Group] }> {
    return this.graphQLClient.request(gql`
      {
        group {
          groupName
        }
      }
    `);
  }
}
