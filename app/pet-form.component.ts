import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'foster-pet-form',
  templateUrl: './app/pet-form.component.html',
  styleUrls: ['./app/pet-form.component.css']
})
export class PetFormComponent {
  form;
  ngOnInit(){
    this.form = new FormGroup({
      type:new FormControl('Cats'),
      name:new FormControl(''),
      category:new FormControl(''),
      year:new FormControl(''),
      
    });
  }   
  onSubmit(pet) {
    console.log(pet);
  }

 

}
