import { Component } from '@angular/core';

@Component({
  selector: 'app-wood-fired-grill',
  templateUrl: './wood-fired-grill.component.html',
  styleUrls: ['./wood-fired-grill.component.css']
})
export class WoodFiredGrillComponent {
  recipes = [
    { name: 'Wood-Fired Pizza', description: 'Crispy pizza cooked on a wood-fired grill.' },
    { name: 'Grilled Vegetables', description: 'Charred vegetables with a smoky flavor.' }
  ];
}