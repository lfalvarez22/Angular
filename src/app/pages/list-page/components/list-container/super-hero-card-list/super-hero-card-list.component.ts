import { Component, Input } from '@angular/core';
import { SuperheroData } from '../../../../../shared/models/superhero.model';


@Component({
  selector: 'app-super-hero-card-list',
  templateUrl: './super-hero-card-list.component.html',
  styleUrls: ['./super-hero-card-list.component.scss'],
})
export class SuperHeroCardListComponent {
  @Input() superhero!: SuperheroData;
}
