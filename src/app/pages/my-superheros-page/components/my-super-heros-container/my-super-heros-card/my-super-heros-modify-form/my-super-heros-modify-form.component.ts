import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MySuperHerosModifyFormDialogComponent } from './my-super-heros-modify-form-dialog-component/my-super-heros-modify-form-dialog.component';
import { MySuperheroData } from 'src/app/shared/models/my-superhero.model';

@Component({
  selector: 'app-my-super-heros-modify-form',
  templateUrl: './my-super-heros-modify-form.component.html',
  styleUrls: ['./my-super-heros-modify-form.component.scss'],
})
export class MySuperHerosModifyFormComponent {
  @Input() mySuperhero!: MySuperheroData;
  @Output() mySuperheroModified: EventEmitter<void> = new EventEmitter();

  constructor(protected dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(MySuperHerosModifyFormDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        mySuperhero: this.mySuperhero,
      },
    });


    //Dado que el diálogo abre directamente el componente y no podemos utilizar OUTPUT con Eventemiter, lo que hacemos es subscribirnos directamente al evento desde aquí y lanzarlo hacía el padre.  
    const subscriber =
      dialogRef.componentInstance.mySuperheroModified.subscribe(() => {
        this.mySuperheroModified.emit();
      });
    dialogRef.afterClosed().subscribe(() => {
      subscriber.unsubscribe();
    });
  }

  modifiedMySuperhero() {
    this.mySuperheroModified.emit();
  }
}
