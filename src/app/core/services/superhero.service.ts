import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SuperheroDataWrapper } from '../../shared/models/superhero.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class SuperheroService {
  constructor(protected http: HttpClient) {}

  public getAll(
    pageSize: number,
    offset: number
  ): Observable<SuperheroDataWrapper> {
    return this.http.get<SuperheroDataWrapper>(
      `${environment.api_marvel_url}/characters?limit=${pageSize}&offset=${offset}`
    );
  }

  public getById(id: string): Observable<SuperheroDataWrapper> {
    return this.http.get<SuperheroDataWrapper>(
      `${environment.api_marvel_url}/characters/${id}`
    );
  }
}

