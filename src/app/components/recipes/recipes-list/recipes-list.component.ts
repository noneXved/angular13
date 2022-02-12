import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a', 'dafsdfs', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=45&resize=768,574'),
    new Recipe('TEST', 'dafsdfs', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=45&resize=768,574')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
