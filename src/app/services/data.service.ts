import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Digimon, DigimonResponse } from '../interfaces/digimon.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = '/api/digimon?pageSize=50';

  constructor(private http: HttpClient) {}

  getDigimons(): Observable<Digimon[]> {
    return this.http.get<DigimonResponse>(this.apiUrl).pipe(
      map(response => response.content),
      catchError(error => {
        console.error('Error fetching Digimons:', error);
        return throwError(() => new Error('Failed to fetch Digimons'));
      })
    );
  }

  getDigimonById(id: number): Observable<Digimon> {
    const url = `/api/digimon/${id}`;
    return this.http.get<Digimon>(url).pipe(
      catchError(error => {
        console.error(`Error fetching Digimon with id ${id}:`, error);
        return throwError(() => new Error('Failed to fetch Digimon'));
      })
    );
  }
}