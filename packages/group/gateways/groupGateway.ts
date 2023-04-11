import { GraphQLClient, gql } from "graphql-request";
import { Socket, io } from "socket.io-client";
import { Group } from "../models/group";

export class GroupGateway {
  private graphQLClient: GraphQLClient;
  private socketClient: Socket;

  constructor(graphQLClient: GraphQLClient, socketClient: Socket) {
    this.graphQLClient = graphQLClient;
    this.socketClient = socketClient;
  }

  public getGroups(): Promise<{ group: [Group] }> {
    return this.graphQLClient.request(gql`
      {
        group {
          id
          groupName
        }
      }
    `);
  }

  public async getNewMessage() {
    const res = await new Promise(resolve => {
      this.socketClient.on('messageCreated', (response) => {
        resolve(response)
      })
    });

    return res;
  }

  public async sendMessage(data: { groupId: string, message: string }) {
    this.socketClient.emit('message', { groupId: data.groupId, message: data.message });
  }

  public async getAllMessage(groupId:string) {
    const data = await new Promise(resolve => {
      this.socketClient.emit('findAllMessage', groupId, (response) => {
        resolve(response)
      })
    });
    return data;
  }
}
