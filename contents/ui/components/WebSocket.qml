import QtQuick 6.8
import QtWebSockets 1.3
import org.kde.plasma.plasma5support as Plasma5Support

Item {
    id: socketItem
    
    property string widgetContainer: "$HOME/.local/share/plasma/plasmoids";
    property string widgetId: "asakiyuki.kde.authenticator";

    property string widgetPath: `${widgetContainer}/${widgetId}`;

    property bool isConnected: false
    property var socket: null

    property var onMsg: (msg) => null
    property var onBinMsg: (msg) => null
    property var onStatusChanged: (status) => null

    function sendBin(message) {
        if (socketItem.isConnected) socket.sendBinaryMessage(message);
    }

    function send(message) {
        if (socketItem.isConnected) socket.sendTextMessage(message);
    }

    WebSocketServer {
        id: server
        listen: true
        onClientConnected: (ws) => {
            socket = ws;
            socketItem.isConnected = true;
        }
    }

    onIsConnectedChanged: () => {
        socket.onBinaryMessageReceived.connect(socketItem.onBinMsg);
        socket.onTextMessageReceived.connect(socketItem.onMsg);
        socket.onStatusChanged.connect(socketItem.onStatusChanged);
    }

    Plasma5Support.DataSource {
        engine: 'executable'
        connectedSources: [ `cd ${widgetPath}; bun run start --url "${server.url}";` ]
    }
}
