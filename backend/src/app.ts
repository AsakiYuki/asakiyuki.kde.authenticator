import { CLIArguments } from "../handler/CLIArguments";
import { WSocket } from "../handler/WebSocket";

export const socketUrl = CLIArguments.getAfterParam("--url");
const socket = new WSocket(socketUrl!);

socket.onOpen((ev) => {
    socket.send("Socket is connected!");
});

socket.onMessage((ev) => {
    socket.send("Message: " + ev.data);
});