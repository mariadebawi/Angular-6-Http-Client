import { Component, OnInit } from '@angular/core';
import { Category } from '../categorie';
import { categoriesService } from '../category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent  implements OnInit {

  categories: Category[];

  constructor(private categoriesService: categoriesService) {}

  ngOnInit(): void {
     this.getCategories();
  }

  getCategories() {
    return this.categoriesService.getCategories()
               .subscribe(
                categories => {
                 // console.log(categories);
                  this.categories = categories
                 }
                );
 }
}
