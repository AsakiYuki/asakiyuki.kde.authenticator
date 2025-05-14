import { isJSON } from "./Utils";

export class WSocket {
    $socket: WebSocket;

    private listenersData: ((ev: MessageEvent) => any)[] = [];
    private listenersJSON: ((ev: MessageEvent) => any)[] = [];

    private onSocketSendMsg(ev: MessageEvent) {
        for (const listener of isJSON(ev.data) ? this.listenersJSON : this.listenersData) listener(ev);
    }

    constructor(socket: WebSocket | string) {
        if (typeof socket === "string") this.$socket = new WebSocket(socket);
        else this.$socket = socket;
        this.$socket.addEventListener("message", this.onSocketSendMsg.bind(this));
    }

    onOpen(callback: (ev: Event) => any) {
        this.$socket.addEventListener("open", callback);
    }

    onMessage(callback: (ev: MessageEvent) => any) {
        this.listenersData.push(callback);
    }

    onJSON(callback: (ev: MessageEvent) => any) {
        this.listenersJSON.push(callback);
    }

    onClose(callback: (ev: CloseEvent) => any) {
        this.$socket.addEventListener("close", callback);
    }

    onError(callback: (ev: Event) => any) {
        this.$socket.addEventListener("error", callback);
    }

    send(data: string) {
        this.$socket.send(data);
    }

    sendJSON(data: any) {
        this.$socket.send(JSON.stringify(data));
    }

    close() {
        this.$socket.close();
    }
}