import { Component, Input } from '@angular/core';
import { SuperheroDataSeriesList } from '../../../../../shared/models/superhero.model';

@Component({
  selector: 'app-super-hero-detail-series',
  templateUrl: './super-hero-detail-series.component.html',
  styleUrls: ['./super-hero-detail-series.component.scss']
})
export class SuperHeroDetailSeriesComponent {
  @Input() superheroSeries!: SuperheroDataSeriesList;
}
