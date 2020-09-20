import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// // let header = new HttpHeaders();
// header.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
    private dataUrl = "http://localhost:3000";

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(
    private http: HttpClient
  ) {}
  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl + '/people')
  }
}
