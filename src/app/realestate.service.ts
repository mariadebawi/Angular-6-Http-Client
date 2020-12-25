import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Realestate } from './realestate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RealestateService {
  private realestatesUrl = 'http://localhost:8080/api/realestates';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getRealestates (): Observable<Realestate[]> {
    return this.http.get<Realestate[]>(this.realestatesUrl)
  }

  getRealestate(id: number): Observable<Realestate> {
    const url = `${this.realestatesUrl}/${id}`;
    return this.http.get<Realestate>(url);
  }

}