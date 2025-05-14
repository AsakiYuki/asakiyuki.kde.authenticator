import { CLIArguments } from "../handler/CLIArguments";
import { WSocket } from "../handler/WebSocket";

export const socketUrl = CLIArguments.getAfterParam("--url");
const socket = new WSocket(socketUrl!);