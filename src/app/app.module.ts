import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyControlComponent } from './func/my-control/my-control.component';
import { FormsModule } from '@angular/forms';
import { API_URL } from './func/provide/api-token';
import { PRESSED_KEY } from './func/provide/press-key.token';
import { pressedKeyFactory } from './func/provide/press-key-factory';
import { CommonModule, DOCUMENT } from '@angular/common';
import { DarkThemeDirective } from './func/dark-theme/dark-theme.directive';
import { ThemeDescriptionComponent } from './func/theme-description/theme-description/theme-description.component';
import { THEME } from './func/theme-description/theme-description/token';
import { defaultTheme } from './func/theme-description/theme-description/default-theme';
import { ChildComponent } from './func/child/child.component';
import { InspectorComponent } from './func/inspector/inspector.component';
import { ToggleDirective } from './func/toggle.directive';
import { MouseComponent } from './func/mouse/mouse.component';
import { MouseTrackerComponent } from './func/mouse-tracker/mouse-tracker.component';
import { PersonComponent } from './func/person/person.component';
import { FullNamePipe } from './func/pipe/full-name.pipe';
import { PurefilterPipe } from './func/pipe/purefilter.pipe';
import { ImpurefilterPipe } from './func/pipe/impurefilter.pipe';



export const PROVIDERS = [{ provide: API_URL, useValue: 'https://my.api' }
  , { provide: PRESSED_KEY, useFactory: pressedKeyFactory, deps: [DOCUMENT] },
{ provide: THEME, useValue: defaultTheme }]
@NgModule({
  declarations: [
    AppComponent,
    MyControlComponent,
    DarkThemeDirective,
    ThemeDescriptionComponent,
    ChildComponent,
    InspectorComponent,
    ToggleDirective,
    MouseComponent,
    MouseTrackerComponent,
    PersonComponent,
    FullNamePipe,
    PurefilterPipe,
    ImpurefilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
