import type { WSocket } from "../handler/WebSocket";

interface Command {
    [cmd: string]: (ws: WSocket, ...args: string[]) => void
}

export const cmd: Command = {};