import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsBasicComponent } from './rxjs-basic/rxjs-basic.component';
import { CustomObservableComponent } from './custom-observable/custom-observable.component';
import { CancelObservableComponent } from './cancel-observable/cancel-observable.component';
import { OperatorBasicsComponent } from './operator-basics/operator-basics.component';
import { BufferOperatorComponent } from './buffer-operator/buffer-operator.component';
import { BufferCountComponent } from './operators/trasformation-operator/buffer-count/buffer-count.component';
import { BufferComponent } from './operators/trasformation-operator/buffer/buffer.component';
import { BufferTimeComponent } from './operators/trasformation-operator/buffer-time/buffer-time.component';
import { RouterModule, Routes } from '@angular/router';
import { OperatorDefComponent } from './operators/operator-def/operator-def.component';
import { BufferToggleComponent } from './operators/trasformation-operator/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './operators/trasformation-operator/buffer-when/buffer-when.component';
import { TakeComponent } from './operators/filtering-operator/take/take.component';
import { TakeWhileComponent } from './operators/filtering-operator/take-while/take-while.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OperatorDefComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'bufferCount', component: BufferCountComponent },
  { path: 'bufferTime', component: BufferTimeComponent },
  { path: 'bufferToggle', component: BufferToggleComponent },
  { path: 'bufferWhen', component: BufferWhenComponent },
  { path: 'take', component: TakeComponent },
  { path: 'takeWhile', component: TakeWhileComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RxjsBasicComponent,
    CustomObservableComponent,
    CancelObservableComponent,
    OperatorBasicsComponent,
    BufferOperatorComponent,
    BufferCountComponent,
    BufferComponent,
    BufferTimeComponent,
    OperatorDefComponent,
    BufferToggleComponent,
    BufferWhenComponent,
    OperatorDefComponent,
    TakeComponent,
    TakeWhileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
