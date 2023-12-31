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
import { BufferTimeComponent } from './transformationOperator/buffer-time/buffer-time.component';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './transformationOperator/operators/operators.component';
import { BufferToggleComponent } from './transformationOperator/buffer-toggle/buffer-toggle.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: OperatorsComponent },
  { path: 'buffer', component: BufferComponent },
  { path: 'bufferCount', component: BufferCountComponent },
  { path: 'bufferTime', component: BufferTimeComponent },
  { path: 'bufferToggle', component: BufferToggleComponent }
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
    OperatorsComponent,
    BufferToggleComponent
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
