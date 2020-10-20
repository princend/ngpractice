import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyControlComponent } from './func/my-control/my-control.component';
import { FormsModule } from '@angular/forms';
import { API_URL } from './func/provide/api-token';
import { PRESSED_KEY } from './func/provide/press-key.token';
import { pressedKeyFactory } from './func/provide/press-key-factory';
import { DOCUMENT } from '@angular/common';


export const PROVIDERS = [{ provide: API_URL, useValue: 'https://my.api' }
  , { provide: PRESSED_KEY, useFactory: pressedKeyFactory, deps: [DOCUMENT] }]
@NgModule({
  declarations: [
    AppComponent,
    MyControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
