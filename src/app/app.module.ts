import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxWheelModule } from 'ngx-wheel';
import { WheelComponent } from './Components/wheel/wheel.component';

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent
  ],
  imports: [
    BrowserModule,
    NgxWheelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
