 import { Pipe } from '@angular/core';

 @Pipe({
   name:'catagoryList',
 })
 export class CategoryListPipe{
     transform(pets) {
       var categories = [];
        pets.forEach(pet => {
           if (categories.indexOf(pet.category) <= -1) {
              categories.push(pet.category);
          }
        });
       return categories.join(', ');
     } 
 }