import { CLIArguments } from "../handler/CLIArguments";
import { WSocket } from "../handler/WebSocket";
import { cmd } from "./cmd";

export const socketUrl = CLIArguments.getAfterParam("--url");
const socket = new WSocket(socketUrl!);

socket.onOpen(() => {
    socket.send("Socket is connected!");

    socket.onMessage(ev => {
        const [cmdName, args] = ev.data.split(":");
        const argsArray = args.split(",");

        const func = cmd[cmdName];
        if (func) func(...argsArray);
        else socket.send("error:Command not found!");
    });
});