import { Recipe } from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pumpkin Soap',
      'Light and Delicious',
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      [ new Ingredient('Pumpkin', 1), new Ingredient('Water', 1.5), new Ingredient('Potato', 2) ]
    ),
    new Recipe(
      'Salmon Salad',
      'Warm Salad with Salmon',
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
      [ new Ingredient('Salmon', 1), new Ingredient('Zucchini', 2), new Ingredient('Tomato', 2) ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(): Recipe[] {
    // we return a copy of the original array
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
