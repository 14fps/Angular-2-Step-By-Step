import { Component } from '@angular/core';
import {PetService} from './pet.service'


@Component({
  selector: 'foster-pet-list',
  templateUrl: './app/pet-list.component.html',
  styleUrls: ['./app/pet-list.component.css']
})
export class PetListComponent {
  type='';
  Pets=[];
  constructor(private petService: PetService){}

  ngOnInit(){
    this.getPets(this.type);
  }

    getPets(type) {
    this.type = type;
    this.petService.get(type)
      .subscribe(pets => {
        this.Pets = pets;
      });
  }
 
   onPetFoster(pet) {
    //  console.log('pet Foster and communicated to pet  List')
      this.petService.delete(pet)
      .subscribe(() => {
        this.getPets(this.type);
      });
  }


    onPetAdopt(pet) {
        //  console.log('pet adoption clicked and communicated to list ')
        this.petService.adopt(pet);
  }

 
 
  
  
}
