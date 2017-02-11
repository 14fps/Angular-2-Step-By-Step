import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PetComponent} from './pet.component';
import {PetListComponent} from './pet-list.component';
import { FosterRequestDirective } from './fosterRequest.directive';
import { CategoryListPipe } from './category-list.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PetFormComponent } from './pet-form.component';
import {PetService} from './pet.service';

const lookupLists = {
  types: [
      {
      single: 'Cat',
      plural: 'Cats'
      },
      {
      single: 'Dog',
      plural: 'Dogs'
    }]
}

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
  providers:[
    PetService,
    { provide: 'lookupListToken',useValue:lookupLists}
  ],

  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule {}