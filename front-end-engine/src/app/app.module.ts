import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { FrontRoutingModule } from './front-routing/front-routing.module';
import { AppComponent } from './app.component';
import { LaravelComponent } from './laravel/laravel.component';
import { AngularComponent } from './angular/angular.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApiTestComponent } from './api-test/api-test.component';

@NgModule({
  declarations: [
    AppComponent,
    LaravelComponent,
    AngularComponent,
    NotFoundComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    FrontRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
