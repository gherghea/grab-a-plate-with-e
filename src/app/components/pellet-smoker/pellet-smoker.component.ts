import { Component } from '@angular/core';

@Component({
  selector: 'app-pellet-smoker',
  templateUrl: './pellet-smoker.component.html',
  styleUrls: ['./pellet-smoker.component.css']
})
export class PelletSmokerComponent {
  recipes = [
    { name: 'Smoked Brisket', description: 'A tender and juicy smoked brisket recipe.' },
    { name: 'Pulled Pork', description: 'Delicious pulled pork cooked on a pellet smoker.' }
  ];
}