import { Component, Input } from '@angular/core';
import { SuperheroData } from 'src/app/shared/models/superhero.model';

@Component({
  selector: 'app-super-hero-detail-global',
  templateUrl: './super-hero-detail-global.component.html',
  styleUrls: ['./super-hero-detail-global.component.scss']
})
export class SuperHeroDetailGlobalComponent {
  @Input() superhero!: SuperheroData;
}
