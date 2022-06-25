const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("selam");
});

let onlineUsers = 0;

io.on("connection", (socket) => {
  console.log("a user connected");

  onlineUsers += 1;
  io.emit("info", onlineUsers);

  socket.on("disconnect", () => {
    console.log("a user has left");

    onlineUsers -= 1;
    io.emit("info", onlineUsers);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});
