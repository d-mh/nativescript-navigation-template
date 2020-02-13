import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { takeUntil, retryWhen, delay } from 'rxjs/operators';
import { unsubscribe$ } from '../../app.component';

@Injectable({
    providedIn: 'root'
})
export class Logger {
    private socket: WebSocketSubject<any> = null;

    constructor() {
        this.connect();
    }

    connect() {

        this.socket = webSocket({
            url: 'ws://192.168.1.242:4444',
            closeObserver: {
                next(closeEvent) {
                    console.log(`code: ${closeEvent.code}, reason: ${closeEvent.reason}`);
                }
            },
            openObserver: {
                next: () => {
                    console.log('Connected with WebSocket server');
                }
            }
        });

        this.socket.pipe(
            retryWhen(errors => errors.pipe(delay(5000))),
            takeUntil(unsubscribe$)
        ).subscribe(
            msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
            err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
            () => console.log('complete') // Called when connection is closed (for whatever reason).
        );
    }

    log(title: string, color: string, payload: any) {

        // const greyStyle = 'color: #9E9E9E; font-weight: bold';
        const greenStyle = 'color: #4CAF50; font-weight: bold';
        const redishStyle = 'color: #FD8182; font-weight: bold';
        let prefix;

        switch (color) {
            case greenStyle:
                prefix = '[Logger - complete] ';
                break;

            case redishStyle:
                prefix = '[Logger - error] ';
                break;

            default:
                prefix = '[Logger] ';
                break;
        }

        if (payload) {
            title = title.substr(3);
            console.log(prefix + title);
            console.log('\n' + JSON.stringify(payload, null, '\u00AD\u00AD\u00AD'));
            this.socket.next({ message: prefix + title, payload: payload });
        } else {
            console.log(prefix + title);
            this.socket.next({ message: prefix + title });
        }
    }
}
