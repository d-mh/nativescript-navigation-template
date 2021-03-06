import { Injectable } from '@angular/core';
import { Actions, ofActionDispatched, ofActionCompleted, ofActionErrored } from '@ngxs/store';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Logout, Login, Authenticate } from '../state/auth.actions';
import { navigateToLoginPage, navigateToContentPage } from '../util/nav.util';

@Injectable({
    providedIn: 'root'
})
export class RouteHandler {
    constructor(
        private actions: Actions,
        private routerExtension: RouterExtensions,
        private activeRoute: ActivatedRoute,
    ) {
        //  Logout
        this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
            navigateToLoginPage(this.routerExtension, this.activeRoute)
        });

        // Login
        this.actions.pipe(ofActionCompleted(Login)).subscribe(() => {
            navigateToContentPage(this.routerExtension, this.activeRoute)
        });

        // Login with token
        this.actions.pipe(ofActionCompleted(Authenticate)).subscribe(() => {
            navigateToContentPage(this.routerExtension, this.activeRoute)
        });

        // Login error
        this.actions.pipe(ofActionErrored(Login)).subscribe(error => {
            // console.error('Login action finished with error ...', error);
        });
    }
}