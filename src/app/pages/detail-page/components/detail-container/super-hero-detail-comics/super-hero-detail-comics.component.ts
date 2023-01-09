import { Component, Input } from '@angular/core';
import { SuperheroDataComicsList } from '../../../../../shared/models/superhero.model';

@Component({
  selector: 'app-super-hero-detail-comics',
  templateUrl: './super-hero-detail-comics.component.html',
  styleUrls: ['./super-hero-detail-comics.component.scss'],
})
export class SuperHeroDetailComicsComponent {
  @Input() superheroComics!: SuperheroDataComicsList;
}
