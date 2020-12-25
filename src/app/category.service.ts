import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './categorie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class categoriesService {
  private CategoriesUrl = 'http://localhost:8080/api/categories';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getCategories (): Observable<Category[]> {
    return this.http.get<Category[]>(this.CategoriesUrl)
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.CategoriesUrl}/${id}`;
    return this.http.get<Category>(url);
  }

}