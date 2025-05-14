import QtQuick 6.8
import QtWebSockets 1.3
import org.kde.plasma.plasma5support as Plasma5Support

Item {
    id: root
    
    property string widgetContainer: "$HOME/.local/share/plasma/plasmoids";
    property string widgetId: "asakiyuki.kde.authenticator";

    property string widgetPath: `${widgetContainer}/${widgetId}`;

    property var socketStatus: null
    property var socketSend: null

    function push(message) {
        console.log(message);
    }

    function send(message) {
        if (root.socketStatus && root.socketStatus() === 1) root.socketSend(message);
        else console.log("Websocket is not connected");
    }


    WebSocketServer {
        id: server
        listen: true
        onClientConnected: {
            webSocket.onTextMessageReceived.connect(root.push);
            root.socketSend = webSocket.sendTextMessage;
            root.socketStatus = () => webSocket.status;
        }
    }

    Plasma5Support.DataSource {
        engine: 'executable'
        connectedSources: [ `cd ${widgetPath}; bun ./backend/app.ts --url "${server.url}";` ]
    }
}
