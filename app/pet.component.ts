import { Component,Input } from '@angular/core';

@Component({
  selector: 'pet',
  templateUrl: './app/pet.component.html',
  styleUrls: ['./app/pet.component.css']
})
export class PetComponent {
  @Input() pet;
   onFoster(){
     console.log("Pet was fostered");
   } 
}
