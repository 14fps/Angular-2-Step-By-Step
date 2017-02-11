import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {PetService} from './pet.service';



@Component({
  selector: 'foster-pet-form',
  templateUrl: './app/pet-form.component.html',
  styleUrls: ['./app/pet-form.component.css']
})
export class PetFormComponent {
  form;
  
  constructor(
    private formBuilder: FormBuilder,
    private petService: PetService,
    @Inject('lookupListToken') public lookupLists){}



  ngOnInit() {
    this.form = this.formBuilder.group({
      type: this.formBuilder.control('Cats'),
     name:  this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year:  this.formBuilder.control('', this.yearValidator),
    });
  }

   yearValidator(control) {
      if (control.value.trim().length === 0) {
        return null;
      }
      let year = parseInt(control.value);
      let minYear = 2000;
      let maxYear = 3000;
      if (year >= minYear && year <= maxYear) {
      return null;
      } else {
        return {
        'year': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(pet) {
   this.petService.add(pet);
  }
}

