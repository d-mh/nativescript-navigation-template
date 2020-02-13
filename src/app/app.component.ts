import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

export const unsubscribe$ = new Subject<void>();

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, OnDestroy {

    constructor() { }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}