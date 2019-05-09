import EventBus from 'vertx3-eventbus-client';
import { useEffect } from 'react';

let eb = new EventBus("/api/v1/eventbus")
eb.enableReconnect(true);

let callbacks = [];

eb.onopen = function () {
    console.log("Connect eventbus");
    registerEvent("mesh.node.updated", callbacks);
    registerEvent("mesh.node.created", callbacks);
    registerEvent("mesh.node.deleted", callbacks);
}

function registerEvent(eventName, callbacks) {
    eb.registerHandler(eventName, function (error, message) {
        callbacks.forEach(cb => cb());
        console.log('Received a message: ' + JSON.stringify(message));
    });
}

export default function useWebsocketBridge(callback) {
    useEffect(() => {
        callbacks.push(callback);
        console.log("Mount");
        return () => {
            var index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
            console.log("Unmount");
        }
    }, []);
}
