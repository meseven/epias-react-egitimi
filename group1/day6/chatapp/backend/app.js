const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("selam");
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("new-message", (data) => {
    console.log("new-message:", data);

    socket.broadcast.emit("new-message", data);
  });

  socket.on("disconnect", () => {
    console.log("a user has left");
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});
