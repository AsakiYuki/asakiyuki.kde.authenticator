import QtQuick 6.8
import QtQuick.Layouts 6.8
import org.kde.plasma.plasmoid

import "../scripts/Utils.js" as Utils
import "../scripts/Command.js" as Command

import "./components"

PlasmoidItem {
    id: root
    Plasmoid.backgroundHints: "NoBackground"

    WebSocket {
        id: socket
        
        onMsg: (msg) => {
            const [cmdName, args] = ev.data.split(":");
            const argsArray = args.split(",");

            const func = Command.cmd[cmdName];
            if (func) func(...argsArray);
            else socket.send("error:Command not found!");
        }
    }
}