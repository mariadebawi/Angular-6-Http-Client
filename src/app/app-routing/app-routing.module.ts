import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { CategoryDetailsComponent } from '../category-details/category-details.component';
import { RealestatesComponent } from '../realestates/realestates.component';

const routes: Routes = [
   { 
     path: 'categories', 
     component: CategoriesComponent 
   },
 
   { 
     path: 'categories/:id', 
     component: CategoryDetailsComponent 
   },

   { 
    path: 'realestatesList', 
    component: RealestatesComponent 
  },

 /*{ 
    path: 'realestatesList/:id', 
    component: CategoryDetailsComponent 
  },
  */
   { 
     path: '', 
     redirectTo: 'realestatesList', 
     pathMatch: 'full'
   }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}