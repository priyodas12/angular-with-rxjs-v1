import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsBasicComponent } from './rxjs-basic/rxjs-basic.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsBasicComponent,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
