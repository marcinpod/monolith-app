import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {HeaderComponent} from "./header/header.component";
import {LayoutComponent} from "mfcmptestcomponents";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DashboardComponent,
        SidebarComponent,
        HeaderComponent,
        LayoutComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
