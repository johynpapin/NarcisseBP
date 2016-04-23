var interact = {
  log(data, out = 'console') {
    switch(out) {
      case 'chat':
      channel.socket.emit("chatMessage", data);
      break;
      case 'console':
      console.log(data);
      break;
    }
  },
  warn(data, out = 'console') {
    switch(out) {
      case 'chat':
      channel.socket.emit("chatMessage", "Warning : " + msg);
      break;
      case 'console':
      console.warn(data);
      break;
    }
  },
  info(data, out = 'console') {
    switch(out) {
      case 'chat':
      channel.socket.emit("chatMessage", "Info : " + msg);
      break;
      case 'console':
      console.info(data);
      break;
    }
  },
  error(data, out = 'console') {
    switch(out) {
      case 'chat':
      channel.socket.emit("chatMessage", "Error : " + msg);
      break;
      case 'console':
      console.error(data);
      break;
    }
  }
};
