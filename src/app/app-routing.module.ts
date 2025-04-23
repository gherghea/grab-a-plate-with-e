import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeSearchComponent } from './components/recipe-search/recipe-search.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { PelletSmokerComponent } from './components/pellet-smoker/pellet-smoker.component';
import { GasGrillComponent } from './components/gas-grill/gas-grill.component';
import { WoodFiredGrillComponent } from './components/wood-fired-grill/wood-fired-grill.component';

const routes: Routes = [
  { path: 'recipe-search', component: RecipeSearchComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'pellet-smoker', component: PelletSmokerComponent },
  { path: 'gas-grill', component: GasGrillComponent },
  { path: 'wood-fired-grill', component: WoodFiredGrillComponent },
  { path: '', redirectTo: '/recipe-search', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }