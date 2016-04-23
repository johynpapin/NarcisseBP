export function log(data, out = 'console') {
    switch(out) {
        case 'chat':
            channel.socket.emit("chatMessage", data);
            break;
        case 'console':
            console.log(data);
            break;
    }
};
export function warn(data, out = 'console') {
    switch(out) {
        case 'chat':
            channel.socket.emit("chatMessage", "Warning : " + msg);
            break;
        case 'console':
            console.warn(data);
            break;
    }
};
export function info(data, out = 'console') {
    switch(out) {
        case 'chat':
            channel.socket.emit("chatMessage", "Info : " + msg);
            break;
        case 'console':
            console.info(data);
            break;
    }
};
export function error(data, out = 'console') {
    switch(out) {
        case 'chat':
            channel.socket.emit("chatMessage", "Error : " + msg);
            break;
        case 'console':
            console.error(data);
            break;
    }
};
