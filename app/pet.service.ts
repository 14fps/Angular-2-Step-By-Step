import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PetService {
   constructor(private http: Http) {}


  get(type){
     let searchParams = new URLSearchParams();
     searchParams.append('type', type);
     return this.http.get('pets',{ search: searchParams } )
      .map(response => {
        return response.json().pets;
      });
  }

  add(Pet){
    Pet.picture = "media/" +
          Pet.type
              +
          "/000.png";
    return this.http.post('pets',Pet)
         .map(response => {});
        
  } 

  delete(pet) {
    return this.http.delete(`pets/${pet.id}`)
      .map(response => {});
  }
 

  adopt(Pet){
    console.log('adopt logic goes  here');
  }

  
  _pets = [
     {
      id: 2,
      name: "Atom",
      picture: "media/dogs/1.jpg",
      type: "Dogs",
      category: "Yorkshire Terrier",
      year: 2015,
      fosteredOn: null,
      fosterRequest: true
    }, 
    {
      id: 1,
      name: "Poofster",
      picture: "media/cats/1.jpg",
      type: "Cats",
      category: "Siamese",
      year: 2010,
      fosteredOn: 1294166565384,
      fosterRequest: false
    },
   {
      id: 3,
      name: "Firebug",
      type: "Dogs",
      picture: "media/dogs/2.jpg",
      category: "Shibu Inu",
      year: 2016,
      fosteredOn: null,
      fosterRequest: false
    }, {
      id: 4,
      name: "Hoopers",
      picture: "media/cats/2.jpg",
      type: "Cats",
      category: "Tabby",
      year: null,
      fosteredOn: null,
      fosterRequest: true
    }, {
      id: 5,
      name: "Happy Joe",
      picture: "media/dogs/3.jpg",
      type: "Dogs",
      category: "Shiau Inu",
      year: 2017,
      fosteredOn: 1457166565384,
      fosterRequest: false
    }, {
      id: 5,
      name: "Maddy",
      picture: "media/cats/4.jpg",
      type: "Cats",
      category: "Mix",
      year: 2017,
      fosterRequest: true
    }

  ];
}