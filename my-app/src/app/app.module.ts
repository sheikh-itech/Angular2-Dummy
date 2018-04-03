import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/component/header.component';
import { TestComponent } from '../test/component/test.component';
import { InfoAlertComponent } from '../commons/alerts/commons.alerts.info.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, TestComponent, InfoAlertComponent, HeroesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
