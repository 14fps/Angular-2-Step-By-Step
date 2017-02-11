import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule , XHRBackend} from '@angular/http';

//tpr shelter/foster modules
import { AppComponent } from './app.component';
import { PetComponent} from './pet.component';
import { PetListComponent} from './pet-list.component';
import { FosterRequestDirective } from './fosterRequest.directive';
import { CategoryListPipe } from './category-list.pipe';
import { PetFormComponent } from './pet-form.component';
import { PetService} from './pet.service';
import { lookupLists,lookupListToken } from './providers';
import {MockXHRBackend} from './mock-xhr-backend'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule 
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
    { provide: lookupListToken,useValue:lookupLists},
    {provide: XHRBackend, useClass: MockXHRBackend}
  ],

  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule {}