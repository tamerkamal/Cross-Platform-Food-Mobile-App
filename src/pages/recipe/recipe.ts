import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { Recipe } from "../../models/recipe";
import { EditRecipePage } from "../edit-recipe/edit-recipe";
import { ShoppingListService } from "../../services/shopping-list";
import { RecipesService } from "../../services/recipes";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html'
})
export class RecipePage implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private slService: ShoppingListService,
              private recipesService: RecipesService,
               private modalCtrl:ModalController,
               private menuCtrl:MenuController,
              ) {
  }

  ngOnInit() {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onEditRecipe() {
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  onAddIngredients() {
    this.slService.addItems(this.recipe.ingredients);

  }


//   AddToShopping(){

// this.slService.addOneItemToShopping(this.name.index)

//   }

  

  onDeleteRecipe() {
    this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }


onOpenMenu(){
 this.menuCtrl.open()
 }


}
