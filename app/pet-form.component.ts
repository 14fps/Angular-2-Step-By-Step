import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'foster-pet-form',
  templateUrl: './app/pet-form.component.html',
  styleUrls: ['./app/pet-form.component.css']
})
export class PetFormComponent {
  form;

  ngOnInit() {
    this.form = new FormGroup({
      type: new FormControl('Cats'),
     name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl(''),
      year: new FormControl('', this.yearValidator),
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

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}

