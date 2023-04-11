import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Group } from "../../packages/group/models/group";
import { groupService } from "../../packages/group/services/groupService";
import { Socket } from "socket.io-client";

export default function GroupPage() {
  const [message, setMessage] = useState<string>();
  const [allMessage, setAllMessage] = useState({});
  const router = useRouter();
  const { groupId } = router.query;
  useEffect(() => {
    if (router.isReady) {
      (async () => {
        io("http://localhost:4000").emit("joinGroup", groupId);
        const data = await groupService.getAllMessage(groupId as string);
        setAllMessage(data);
      })();
    }
    console.log("reruen");
  }, [router.isReady]);

  io("http://localhost:4000").on("messageCreated", (response) => {
    const clone = allMessage;
    clone[groupId as string]
      ? clone[groupId as string].push(response)
      : (clone[groupId as string] = [response]);
    setAllMessage(clone);
  });

  io("http://localhost:4000").on("haha", (response) => {
    console.log(response);
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    groupService.sendMessage({ groupId: groupId as string, message });
    setMessage("");
  };

  return (
    <div>
      <Head>
        <title>Groups</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mt-5">
        <ul>
          {allMessage[groupId as string]?.map((mess, i) => {
            return (
              <li key={i}>
                <span className="text-primary">{mess.clientId}: </span>
                <span>{mess.message}</span>
              </li>
            );
          })}
        </ul>
        <form onSubmit={sendMessage}>
          <div className="mb-3">
            <input
              value={message}
              className="form-control"
              placeholder=""
              id="floatingTextarea2"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
