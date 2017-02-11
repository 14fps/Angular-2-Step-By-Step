import { Component } from '@angular/core';

@Component({
  selector: 'shelter-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css']
})

export class AppComponent {

  onPetFoster(pet){
    console.log('app.component foster event raised');
  }
 
   firstPet = {
      id: 2,
      name: "Atom",
      picture: "media/dogs/1.jpg",
      type: "Dogs",
category: "Yorkshire Terrier",
      year: 2015,
      fosteredOn: 1294166565384,
      fosterRequest: true
    }
}
  