import { io } from "socket.io-client";

let socket;

export const init = () => {
  socket = io("http://localhost:4000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("connected");
  });
};

export const emit = (topic, data) => {
  if (!socket) {
    return false;
  }

  socket.emit(topic, data);
};

export const subscribe = (topic, callback) => {
  if (!socket) {
    return false;
  }

  socket.on(topic, (data) => {
    callback(data);
  });
};
