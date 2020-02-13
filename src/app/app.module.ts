import { NgModule, NO_ERRORS_SCHEMA, APP_INITIALIZER } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsLoggerPluginModule, NGXS_LOGGER_PLUGIN_OPTIONS, NgxsLoggerPluginOptions } from '@ngxs/logger-plugin';

import { AuthState } from './shared/state/auth.state';
import { Logger } from './shared/state/logger';
import { RouteHandler } from './shared/handler/route.handler';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

const isProduction = !!(global as any).process.env.production;

const emptyFn = () => {
    return () => { }
}

const createLoggerPluginOptions = (logger: Logger): NgxsLoggerPluginOptions => {
    return {
        disabled: isProduction,
        logger: logger
    }
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NgxsModule.forRoot([AuthState], { developmentMode: !isProduction }),
        NgxsStoragePluginModule.forRoot({ storage: StorageOption.LocalStorage, key: 'auth' }),
        NgxsLoggerPluginModule.forRoot(),
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: emptyFn,
            deps: [RouteHandler],
            multi: true
        },
        {
            provide: NGXS_LOGGER_PLUGIN_OPTIONS,
            useFactory: (createLoggerPluginOptions),
            deps: [Logger],
        },
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
