import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../../../../core/services/superhero.service';
import { SuperheroData } from '../../../../shared/models/superhero.model';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss'],
})
export class ListContainerComponent implements OnInit {
  page: number = 1;
  pageSize: number = 25;
  offset: number = 0;
  totalResults!: number;
  nameToFilter: string = '';
  superheros!: SuperheroData[];
  constructor(protected superheroService: SuperheroService) {}

  ngOnInit(): void {
    this.loadSuperheros();
  }

  loadSuperheros(): void {
    this.superheroService.getAll(this.pageSize, this.offset).subscribe({
      next: (response) => {
        this.totalResults = response.data.total;
        this.superheros = response.data.results;
      },
    });
  }

  onPaginateChange(event: number) {
    this.page = event;
    this.offset = this.pageSize * (this.page - 1);
    this.loadSuperheros();
  }
}
