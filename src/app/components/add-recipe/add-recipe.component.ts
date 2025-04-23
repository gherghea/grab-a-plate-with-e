import { Component } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  newRecipe = { name: '', description: '', category: '' };

  onSubmit() {
    console.log('Adding new recipe:', this.newRecipe);
    // Implement logic to add recipe here
  }
}