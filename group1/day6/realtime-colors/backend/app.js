const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("selam");
});

let lastColor = "#FFFFFF";

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.emit("new-color", lastColor);

  socket.on("new-color", (data) => {
    console.log("New Color", data);

    lastColor = data;
    socket.broadcast.emit("new-color", data);
  });

  socket.on("disconnect", () => {
    console.log("a user has left");
  });
});

server.listen(4000, () => {
  console.log("listening on *:4000");
});
