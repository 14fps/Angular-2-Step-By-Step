import { Component,Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shelter-pet',
  templateUrl: './app/pet.component.html',
  styleUrls: ['./app/pet.component.css']
})
export class PetComponent {
  
  @Input() pet;
  @Output() foster = new EventEmitter();

   onFoster(){
     console.log('onFoster Clicked sheler-pet component');
     this.foster.emit ();

   } 
}
