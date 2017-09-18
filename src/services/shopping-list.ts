import { Ingredient } from './../models/ingredient';
import { AuthService } from './auth';
import { Injectable } from "@angular/core";
import {Http,Response} from "@angular/http";
import 'rxjs/Rx'
@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];

constructor(private http:Http,private authService:AuthService){}

  addItem(name: string, quantity: string) {
    this.ingredients.push(new Ingredient(name, quantity));
    console.log(this.ingredients);
  }

  addItems(items: Ingredient[]) {
    this.ingredients.push(...items);
  }


// addOneItemToShopping(index:number){

// this.ingredients.push(Ingredient[index])

// }


  getItems() {
    return this.ingredients.slice();
  }

  removeItem(index: number) {
    this.ingredients.splice(index, 1);
  }

  storeList(token:string){
const userId=this.authService.getActiveUser().uid
return this.http.put('https://ma2adirk.firebaseio.com/' + userId + '/shopping-list.json?auth='
+token,this.ingredients)
.map((response:Response)=>{

return response.json();

}) 
  }

fetchList(token:string){
const userId=this.authService.getActiveUser().uid   

return this.http.get('https://ma2adirk.firebaseio.com/' + userId + '/shopping-list.json?auth='
+token).map((response:Response)=>{

return response.json();

}).do((ingredients:Ingredient[])=> {

if(ingredients){
this.ingredients=ingredients;
}else{

this.ingredients=[]

}
}

)}

}








