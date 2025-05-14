import { CLIArguments } from "./handler/CLIArguments";
import { WSocket } from "./handler/WebSocket";

const socketUrl = CLIArguments.getAfterParam("--url");
const socket = new WSocket(socketUrl!);

socket.onOpen(() => {
    socket.send("hello, qml!");
});

socket.onMessage((ev) => {
    socket.send(`Test: ${ev.data}`);
})

if (!socketUrl) {
    console.error("Please provide a socket url");
    process.exit(1);
}

