import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PetComponent} from './pet.component';
import {PetListComponent} from './pet-list.component';
import { FosterRequestDirective } from './fosterRequest.directive';
import { CategoryListPipe } from './category-list.pipe';
//add both of these form modules
import { ReactiveFormsModule } from '@angular/forms';
//new petForm
import { PetFormComponent } from './pet-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule 
  ],
  declarations: [
    AppComponent,
    PetComponent,
    PetListComponent,
    FosterRequestDirective,
    CategoryListPipe,
    PetFormComponent

    
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule {}