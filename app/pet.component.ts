import { Component } from '@angular/core';

@Component({
  selector: 'pet',
  templateUrl: './app/pet.component.html',
  styleUrls: ['./app/pet.component.css']
})
export class PetComponent {
  name='Atom';

  isFostered(){
    return true;
  }
}
