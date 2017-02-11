import { Component,Input ,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shelter-pet',
  templateUrl: './app/pet.component.html',
  styleUrls: ['./app/pet.component.css']
})
export class PetComponent {
  
  @Input() pet;
  @Output() foster = new EventEmitter();

  @Output() adopt = new EventEmitter();
  
  onAdopt() {
    this.adopt.emit(this.pet);
    // console.log('adopt- clicked adopt  from the pet');
  }
   onFoster(){
    //  console.log('onFoster - Clicked foseter fom pet');
     this.foster.emit (this.pet);

   } 
}
