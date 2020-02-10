import { Component, OnInit } from "@angular/core";
import { Actions, ofActionDispatched, ofActionCompleted } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { Logout, Login } from './shared/state/auth.actions';
import { navigateToLoginPage, navigateToContentPage } from './shared/util/nav.util';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    constructor(
        private actions: Actions,
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
            navigateToLoginPage(this.routerExtension, this.activeRoute)
        });

        this.actions.pipe(ofActionCompleted(Login)).subscribe(() => {
            navigateToContentPage(this.routerExtension, this.activeRoute)
        });
    }
}