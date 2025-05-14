import QtQuick 6.8
import QtQuick.Layouts 6.8
import org.kde.plasma.plasmoid

import "../scripts/Utils.js" as Utils

import "./components"

PlasmoidItem {
    id: root
    Plasmoid.backgroundHints: "NoBackground"

    WebSocket {
        onMsg: (msg) => {
            console.log(msg);
        }

        id: socket
    }

    property int count: 0
    
    Timer {
        interval: 1000;
        running: true;
        repeat: true;
        onTriggered: () => {
            socket.send("Hello World! " + count++);
            console.log("Test")
        }
    }
}