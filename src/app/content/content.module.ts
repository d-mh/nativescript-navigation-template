import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ContentRoutingModule } from './content-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ContentComponent } from './content.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [ContentComponent, DashboardComponent],
  imports: [
    ContentRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ContentModule { }
