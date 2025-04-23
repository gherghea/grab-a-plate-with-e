import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: any[] = [];

  getRecipes() {
    return this.recipes;
  }

  addRecipe(recipe: any) {
    this.recipes.push(recipe);
  }
}