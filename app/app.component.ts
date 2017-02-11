import { Component } from '@angular/core';

@Component({
  selector: 'shelter-app',
  templateUrl: 'app/app.component.html',
  styleUrls:['app/app.component.css']
})

export class AppComponent {
   firstPet = {
      id: 2,
      name: "Atom",
      picture: "media/dogs/1.jpg",
      type: "Dogs",
      category: "Rag Doll",
      year: 2015,
      fosteredOn: null,
      fosterRequest: true
    }
}
  