import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MySuperheroData } from 'src/app/shared/models/my-superhero.model';

@Injectable({
  providedIn: 'root',
})
export class MySuperheroService {
  mySuperheros: MySuperheroData[] = [
  ];

  constructor() {}

  public getAll(): Observable<MySuperheroData[]> {
    return new Observable((observer: Observer<MySuperheroData[]>) => {
      observer.next(this.mySuperheros);
    });
  }

  public getById(id: string): Observable<MySuperheroData> {
    return new Observable((observer: Observer<MySuperheroData>) => {
      observer.next(
        this.mySuperheros.find((superhero) => {
          return superhero.id === id;
        })!
      );
    });
  }

  public create(newSuperhero: MySuperheroData): Observable<MySuperheroData> {
    this.mySuperheros.push(newSuperhero);
    return new Observable((observer: Observer<MySuperheroData>) => {
      observer.next(newSuperhero);
    });
  }

  public update(modifiedSuperhero: MySuperheroData): void {
    this.mySuperheros = this.mySuperheros.map((superhero) => {
      return superhero.id === modifiedSuperhero.id
        ? modifiedSuperhero
        : superhero;
    });
  }

  public delete(id: string): void {
    this.mySuperheros = this.mySuperheros.filter(
      (mySuperhero) => mySuperhero.id !== id
    );
  }
}
