export class WSocket {
    $socket: WebSocket;

    constructor(socket: WebSocket | string) {
        if (typeof socket === "string") this.$socket = new WebSocket(socket);
        else this.$socket = socket;
    }

    onOpen(callback: (ev: Event) => any) {
        this.$socket.addEventListener("open", callback);
    }

    onMessage(callback: (ev: MessageEvent) => any, options?: boolean | AddEventListenerOptions) {
        this.$socket.addEventListener("message", callback, options);
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

    close() {
        this.$socket.close();
    }
}