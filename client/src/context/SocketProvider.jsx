import React, { createContext, useMemo, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = (props) => {
  // const socket = useMemo(() => io("localhost:8000"), []);
  // const socket = useMemo(() => io("192.168.0.104:8000"), []);
  const socket = useMemo(
    () => io("https://react-webrtc-server-fx9v.onrender.com"),
    []
  );

  return (
    <SocketContext.Provider value={socket}>
      {props.children}
    </SocketContext.Provider>
  );
};
