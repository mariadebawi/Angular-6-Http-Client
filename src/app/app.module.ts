import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { RealestatesComponent } from './realestates/realestates.component';

@NgModule({
   declarations: [
      AppComponent,
      CategoriesComponent,
      CategoryDetailsComponent,
      RealestatesComponent
   ],
   imports: [
	 BrowserModule,
	 FormsModule,
	 AppRoutingModule,
	 HttpClientModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
