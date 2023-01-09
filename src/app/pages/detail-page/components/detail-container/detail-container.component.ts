import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperheroData } from 'src/app/shared/models/superhero.model';
import { SuperheroService } from '../../../../core/services/superhero.service';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.scss'],
})
export class DetailContainerComponent implements OnInit {
  superheroId!: string;
  superhero!: SuperheroData;

  constructor(
    protected activatedRoute: ActivatedRoute,
    protected superheroService: SuperheroService
  ) {}

  ngOnInit(): void {
    this.superheroId = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.loadSuperhero();
  }

  loadSuperhero(): void {
    this.superheroService.getById(this.superheroId).subscribe({
      next: (response) => {
        this.superhero = response.data.results[0];
      },
    });
  }
}
