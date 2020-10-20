import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyControlComponent } from './func/my-control/my-control.component';
import { FormsModule } from '@angular/forms';
import { API_URL } from './func/api-token';

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
  providers: [{ provide: API_URL, useValue: 'https://my.api' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
