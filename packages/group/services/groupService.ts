import { graphQLClient } from "../../connectors/graphql-connector";
import { GroupGateway } from "../gateways/groupGateway";
import { Group } from "../models/group";

export class GroupService {
  private groupGateway: GroupGateway;

  constructor(groupGateway: GroupGateway) {
    this.groupGateway = groupGateway;
  }

  public getGroups(): Promise<{ group: [Group] }> {
    return this.groupGateway.getGroups();
  }
}
const groupGateway = new GroupGateway(graphQLClient);
export const groupService = new GroupService(groupGateway);
