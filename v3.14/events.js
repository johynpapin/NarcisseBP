var interact = require('./interact');

module.exports = {
  chatMessage: function (d) {
  },
  endGame: function (d) {
  },
  setActivePlayerIndex: function (d) {
  },
  failWord: function (d) {
  },
  winterIsComing: function (d, s) {
    interact.log('BombParty room joined.');
    interact.log('Bonjour. Je suis Narcisse, version 3.14.', s);
  }
};
