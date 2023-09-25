import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import io from "socket.io-client";
let socket;

export default function GroupPage() {
  const [message, setMessage] = useState<string>();
  const [allMessage, setAllMessage] = useState([]);
  const router = useRouter();
  const msgs = [];
  const { groupId } = router.query;

  const socketInitializer = async () => {
    socket = io("http://localhost:4000");

    socket.emit("joinGroup", { groupId });

    socket.on("connect", () => {
      console.log("connected");
    });

    socket.on("messageCreated", (msg) => {
      msgs.push(msg);
      setAllMessage([...msgs]);
    });
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    socket.emit("message", { groupId, message });
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
          {allMessage.map((mess, i) => {
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
