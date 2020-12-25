import { Component, OnInit } from '@angular/core';
import { Category } from '../categorie';
import { categoriesService } from '../category.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

  Category = new Category() ;
  submitted = false;
  message: string;

  constructor(
    private customerService: categoriesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCategory(id)
      .subscribe(customer =>{
         console.log(customer)
         this.Category = customer});
  }


}