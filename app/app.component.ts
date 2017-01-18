import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{currentFocus}}</h1>
    <ul>
      <li *ngFor="let Recipe of recipes">{{Recipe.title}}
        <ul>
          <li>{{Recipe.ingredients}}</li>
          <li>{{Recipe.directions}}</li><button (click)="editRecipe(Recipe)">Edit directions?</button>
        </ul>
      </li>
    </ul>
    <div class="form-group" *ngIf="selectedRecipe">
      <label>Enter recipe directions:</label>
      <input [(ngModel)]="selectedRecipe.directions">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Awesome Recipes!';
  recipes: Recipe[] = [
    new Recipe('Pie', 'eggs, milk, etc', 'put it in the oven'),
    new Recipe('beer', 'gluten, fizz, barley, alcohol', 'mix it together and drink it'),
    new Recipe('cereal', 'gluten, milk, spoon', 'poor into a bowl')
  ];

  selectedRecipe = null;

  finishedEditing() {
    this.selectedRecipe = null;
  }

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

}

export class Recipe {
  public done: boolean = false;
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
