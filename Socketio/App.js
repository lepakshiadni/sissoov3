const io = require("socket.io")(4040, {
  cors: {
    origin: "http://192.168.1.103:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
  console.log("users", users);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

// console.log(getUser())
io.on("connection", (socket) => {
  //when ceonnect
  console.log("Socket connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
    // socket.join(userId)
  });

  // send and get message

  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    if (user && user.socketId) {
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
      io.to(user.socketId).emit("getNotification",{
        senderId,
        isRead:false,
        date: new Date()
      })
      
      // Update the last message for the sender as well
      io.to(socket.id).emit("updateLastMessage", {
        conversationId: receiverId,
        lastMessage: {
          sender: senderId,
          text: text,
          createdAt: Date.now(),
        },
      });
    }
  });

  // Broadcast the typing event to the specific recipient in the conversation
  // socket.on("typing", ({ conversationId, senderId, receiverId }) => {
  //   console.log(
  //     `User ${senderId} is typing a message in conversation ${conversationId}`
  //   );
  //   const user = getUser(receiverId);
  //   if (user && user.socketId) {
  //     io.to(user.socketId).emit("userTyping", {
  //       conversationId,
  //       senderId,
  //     });
  //   }
  // });

  // // When a user stops typing
  // socket.on("stoppedTyping", ({ conversationId, senderId, receiverId }) => {
  //   console.log(
  //     `User ${senderId} stopped typing in conversation ${conversationId}`
  //   );
  //   const user = getUser(receiverId);
  //   if (user && user.socketId) {
  //     io.to(user.socketId).emit("userStoppedTyping", {
  //       conversationId,
  //       senderId,
  //     });
  //   }
  // });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!", socket.id);
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});

module.exports = { io };
