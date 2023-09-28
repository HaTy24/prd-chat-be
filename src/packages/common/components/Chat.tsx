import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
let socket;

export const Chat: FC = () => {
  const router = useRouter();
  const groupId = router.query.id as string;
  const groupName = router.query.groupName as string;
  const [message, setMessage] = useState<string>();
  const [allMessage, setAllMessage] = useState([]);
  const msgs = [];
  const clientId = useRef("");

  const socketInitializer = async () => {
    socket = io("http://localhost:4000");
    if (groupId) {
      socket.emit("joinGroup", { groupId });
    }

    socket.on("connect", () => {
      console.log("connected");
      clientId.current = socket.id;
    });

    socket.on("messageCreated", (msg) => {
      msgs.push(msg);
      setAllMessage([...msgs]);
    });
  };

  useEffect(() => {
    socketInitializer();
  }, [groupId, groupName]);

  const sendMessage = async () => {
    console.log({ message, clientId, groupId });

    socket.emit("message", { groupId, message });
    setMessage("");
  };
  return (
    <div className="card" id="kt_chat_messenger">
      <div className="card-header" id="kt_chat_messenger_header">
        <div className="card-title">
          <div className="symbol-group symbol-hover">
            <div className="symbol symbol-35px symbol-circle ">
              <span className="symbol-label bg-light-warning text-danger text-uppercase fs-2 fw-bolder">
                {groupName?.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-body" id="kt_chat_messenger_body">
        <div
          className="scroll-y me-n5 pe-5 h-300px h-lg-auto"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body"
          data-kt-scroll-offset="5px"
          style={{ maxHeight: "153px" }}
        >
          {allMessage.map((mess, index) => (
            <div>
              {mess.clientId === clientId.current ? (
                <div className="d-flex justify-content-end mb-10 ">
                  <div className="d-flex flex-column align-items-end">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-3">
                        <span className="text-muted fs-7 mb-1">5 mins</span>
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                        >
                          {mess.clientId}
                        </a>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                      data-kt-element="message-text"
                    >
                      {mess.message}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-start mb-10 ">
                  <div className="d-flex flex-column align-items-start">
                    <div className="d-flex align-items-center mb-2">
                      <div className="symbol  symbol-35px symbol-circle "></div>
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          {mess.clientId}
                        </a>
                        <span className="text-muted fs-7 mb-1">2 mins</span>
                      </div>
                    </div>
                    <div
                      className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                      data-kt-element="message-text"
                    >
                      {mess.message}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="card-footer pt-4" id="kt_chat_messenger_footer">
        <textarea
          className="form-control form-control-flush mb-3"
          rows={1}
          data-kt-element="input"
          placeholder="Type a message"
          style={{ height: "37px" }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="d-flex flex-stack">
          <div className="d-flex align-items-center me-2">
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              aria-label="Coming soon"
              data-bs-original-title="Coming soon"
              data-kt-initialized={1}
            >
              <i className="ki-duotone ki-paper-clip fs-3" />{" "}
            </button>
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              aria-label="Coming soon"
              data-bs-original-title="Coming soon"
              data-kt-initialized={1}
            >
              <i className="ki-duotone ki-exit-up fs-3">
                <span className="path1" />
                <span className="path2" />
              </i>
            </button>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-kt-element="send"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
