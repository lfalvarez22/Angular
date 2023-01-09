import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MySuperheroService } from 'src/app/core/services/my-superhero.service';
import { MySuperheroData } from 'src/app/shared/models/my-superhero.model';

@Component({
  selector: 'app-my-super-heros-card',
  templateUrl: './my-super-heros-card.component.html',
  styleUrls: ['./my-super-heros-card.component.scss'],
})
export class MySuperHerosCardComponent {
  @Input() mySuperhero!: MySuperheroData;

    //Eventos que se envian al eleminar o modificar superhero
  @Output() mySuperheroRemoved: EventEmitter<void> = new EventEmitter();
  @Output() mySuperheroModified: EventEmitter<void> = new EventEmitter();

  constructor(protected mySuperheroService: MySuperheroService) {}

  deleteMySuperhero() {
    this.mySuperheroService.delete(this.mySuperhero.id);
    this.mySuperheroRemoved.emit();
  }

  modifiedMySuperhero() {
    this.mySuperheroRemoved.emit();
  }
}
