import { Component } from '@angular/core';

@Component({
  selector: 'app-gas-grill',
  templateUrl: './gas-grill.component.html',
  styleUrls: ['./gas-grill.component.css']
})
export class GasGrillComponent {
  recipes = [
    { name: 'Grilled Steak', description: 'Perfectly grilled steak with a smoky flavor.' },
    { name: 'BBQ Chicken', description: 'Juicy chicken grilled to perfection.' }
  ];
}