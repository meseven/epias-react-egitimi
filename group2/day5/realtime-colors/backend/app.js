const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("hello");
});

let onlineUsers = 0;

io.on("connection", (socket) => {
  console.log("Bir kullanıcı bağlandı.");

  onlineUsers += 1;
  io.emit("info", onlineUsers);

  // socket.on("new-color", (color) => {
  //   console.log("New color: ", color);

  //   socket.broadcast.emit("new-color", color);
  // });

  socket.on("disconnect", () => {
    console.log("Bir kullanıcı ayrıldı.");

    onlineUsers -= 1;
    socket.broadcast.emit("info", onlineUsers);
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});
