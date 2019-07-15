import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './comps/list/list.component';
import { InputsComponent } from './comps/inputs/inputs.component';
import { ResetComponent } from './comps/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputsComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
