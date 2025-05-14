import QtQuick 6.8
import QtQuick.Layouts 6.8
import org.kde.plasma.plasmoid

import "../scripts/Utils.js" as Utils

import "./components"

PlasmoidItem {
    id: root
    Plasmoid.backgroundHints: "NoBackground"

    WebSocket {
        id: socketServer
    }
}