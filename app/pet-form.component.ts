import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'foster-pet-form',
  templateUrl: './app/pet-form.component.html',
  styleUrls: ['./app/pet-form.component.css']
})
export class PetFormComponent {
     
  onSubmit(pet) {
    console.log(pet);
  }

 

}
