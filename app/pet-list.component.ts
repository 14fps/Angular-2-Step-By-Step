import { Component } from '@angular/core';
import {PetService} from './pet.service'


@Component({
  selector: 'foster-pet-list',
  templateUrl: './app/pet-list.component.html',
  styleUrls: ['./app/pet-list.component.css']
})
export class PetListComponent {
  Pets;
  constructor(private petService: PetService){}

  ngOnInit(){
    
    this.Pets = this.petService.get();
    console.log(this.Pets);
  }


   onPetFoster(pet) {
    //  console.log('pet Foster and communicated to pet  List')
     this.petService.delete(pet);
  }


    onPetAdopt(pet) {
        //  console.log('pet adoption clicked and communicated to list ')
        this.petService.adopt(pet);
  }

 
 
  
  
}
