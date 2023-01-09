import { Component, Input } from '@angular/core';
import { SuperheroDataStoriesList } from '../../../../../shared/models/superhero.model';

@Component({
  selector: 'app-super-hero-detail-stories',
  templateUrl: './super-hero-detail-stories.component.html',
  styleUrls: ['./super-hero-detail-stories.component.scss']
})
export class SuperHeroDetailStoriesComponent {
  @Input() superheroStories!: SuperheroDataStoriesList;
}
