import QtQuick 6.8
import QtQuick.Layouts 6.8

import org.kde.plasma.plasmoid

import "./components"
import "../scripts/Authenticator.js" as Authenticator

PlasmoidItem {
    id: root
    Plasmoid.backgroundHints: "NoBackground"

    property string test: "otpauth://totp/Google%20Main:vantrong2007vn%40gmail.com?secret=PSOLLV2EO5ICCXURIVTUC6V4LT432BW7&issuer=Google%20Main";

    WebSocket {
        id: socketServer
    }
}