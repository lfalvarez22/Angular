import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MySuperheroService } from 'src/app/core/services/my-superhero.service';
import { MySuperheroData } from 'src/app/shared/models/my-superhero.model';

@Component({
  selector: 'app-my-super-heros-container',
  templateUrl: './my-super-heros-container.component.html',
  styleUrls: ['./my-super-heros-container.component.scss'],
})
export class MySuperHerosContainerComponent implements OnInit {
  mySuperheros$!: Observable<MySuperheroData[]>;

  constructor(protected mySuperheroService: MySuperheroService) {}

  ngOnInit(): void {
    this.loadMySuperheros();
  }

  loadMySuperheros() {
    this.mySuperheros$ = this.mySuperheroService.getAll();
  }
}
