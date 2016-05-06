module.exports = {
  log: function (data, stdout) {
    if (stdout) {
      stdout.emit('e', {event: 'evaluate', f: "function() {channel.socket.emit('chatMessage', '"+data+"');}"});
    } else {
      console.log('[I] '.blue.bold + data);
    }
  }
};
