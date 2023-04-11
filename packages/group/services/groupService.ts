import { graphQLClient } from "../../connectors/graphql-connector";
import { socketClient } from "../../connectors/socketio-connector";
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

  public sendMessage(data:{groupId:string, message:string}) {
    return this.groupGateway.sendMessage(data);
  }

  public getAllMessage(groupId:string) {
    return this.groupGateway.getAllMessage(groupId);
  }

  public getNewMessage() {
    return this.groupGateway.getNewMessage();
  }
}

const groupGateway = new GroupGateway(graphQLClient, socketClient);
export const groupService = new GroupService(groupGateway);
