import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

import { Recipe } from "../models/recipe";
import { Ingredient } from "../models/ingredient";
import { AuthService } from "./auth";

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];

  constructor(private http: Http, private authService: AuthService) {}

  addRecipe(title: string,
            description: string,
            difficulty: string,
            otherCategory:string,
            ingredients: Ingredient[]) {
    this.recipes.push(new Recipe(title, description, difficulty,otherCategory, ingredients));
    console.log(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  updateRecipe(index: number,
               title: string,
               description: string,
               difficulty: string,
               otherCategory:string,
               ingredients: Ingredient[]) {
    this.recipes[index] = new Recipe(title, description, difficulty,otherCategory, ingredients);
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
  }

  storeList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.put('https://ma2adirk.firebaseio.com/' + userId + '/recipes.json?auth=' + token, this.recipes)
      .map((response: Response) => response.json());
  }

  fetchList(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http.get('https://ma2adirk.firebaseio.com/' + userId + '/recipes.json?auth=' + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json() ? response.json() : [];
        for (let item of recipes) {
            item.ingredients = [];
          if (!item.hasOwnProperty('ingredients')) {
          }
        }
        return recipes;
      })
      .do((recipes: Recipe[]) => {
        if (recipes) {
          this.recipes = recipes;
        } else {
          this.recipes = [];
        }
      });
  }
}











'https://ma2adirk.firebaseio.com/'