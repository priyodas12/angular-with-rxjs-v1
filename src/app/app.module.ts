import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsBasicComponent } from './rxjs-basic/rxjs-basic.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { CancelObservableComponent } from './cancel-observable/cancel-observable.component';
import { OperatorBasicsComponent } from './operator-basics/operator-basics.component';
import { BufferOperatorComponent } from './buffer-operator/buffer-operator.component';
import { BufferCountComponent } from './transformationOperator/buffer-count/buffer-count.component';
import { BufferComponent } from './transformationOperator/buffer/buffer.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsBasicComponent,
    CustomObservableComponent,
    CancelObservableComponent,
    OperatorBasicsComponent,
    BufferOperatorComponent,
    BufferCountComponent,
    BufferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
