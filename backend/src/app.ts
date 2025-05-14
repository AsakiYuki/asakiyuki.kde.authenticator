import { genOTP } from "../auth/GenOTP";
import { CLIArguments } from "../handler/CLIArguments";
import { WSocket } from "../handler/WebSocket";

export const socketUrl = CLIArguments.getAfterParam("--url");
const socket = new WSocket(socketUrl!);

socket.onOpen(() => {
    const secret = "<SECRET>";

    socket.send("WebSocket is opened!");

    socket.send(`OTP: ${genOTP(secret)}`);
}); 