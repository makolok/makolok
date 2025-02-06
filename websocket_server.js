const WebSocket = require("ws");
const server = new WebSocket.Server({ port: 8080 });

server.on("connection", (socket) => {
  console.log("A client connected");

  // รับข้อความจากไคลเอนต์
  socket.on("message", (message) => {
    console.log("Received:", message);

    // ส่งข้อความไปยังไคลเอนต์ทุกคน
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  socket.on("close", () => {
    console.log("A client disconnected");
  });
});

server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (data) => {
    console.log("Received data:", data);

    // ตัวอย่างการส่งข้อมูล JSON
    const response = {
      command: "selectAnimal",
      animals: {
        1: "b8",
        2: "b8",
        3: "b8"
      }
    };

    const jsonString = JSON.stringify(response); // แปลงเป็น JSON
    socket.send(jsonString); // ส่งข้อมูล JSON ไปยังไคลเอนต์
  });
});
