var prompt = require('prompt');
var colors = require('colors');
var io = require('socket.io')();

var interact = require('./interact');
var events = require('./events');

interact.log('=== Narcisse v3.14 ==='.rainbow);
interact.log('Loading...');

var s;

prompt.message = '[Q] '.magenta;
prompt.delimiter = '';

prompt.start();

io.on('connection', function (socket) {
  interact.log('The bridge is now online.');
  s = socket;
  ask();

  s.on('disconnect', function () {
    interact.log('The bridge is now offline.');
  });

  s.on('log', function (data) {
    interact.log(data.text);
  });

  s.on('callback', function (data) {
    events[data.event](data, s);
  });
});
io.listen(3000);

function ask() {
  prompt.get({
    properties: {
      room: {
        description: 'BombParty room to join ?'
      }
    }
  }, function (err, result) {
    s.emit('e', {event: 'launch', room: result.room});
  });
}

interact.log('Waiting for bridge to connect...');
