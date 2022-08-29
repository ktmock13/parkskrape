import SocketIO from 'socket.io';

// **** Variables **** //

const socketRoomName = 'jet-logger-chat-room';

// **** Functions **** //

/**
 * Connect to socket room.
 */
export function connectSocketToRm(socket: SocketIO.Socket): void {
  socket.leave(socketRoomName);
  socket.join(socketRoomName);
}

/**
 * Send a chat message.
 */
export function emitMessage(socket: SocketIO.Socket, message: string, senderName: string): void {
  // Send a message to the room
  const room = socket.to(socketRoomName);
  room.emit('emit-msg', {
    timestamp: Date.now(),
    content: message,
    senderName,
  });
}

const thing = { thinggg: '1', things: '2', thin3: '3' };

// **** Export default **** //

export default {
  connectSocketToRm,
  emitMessage,
} as const;
