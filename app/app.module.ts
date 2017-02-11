import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PetComponent} from './pet.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    PetComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}