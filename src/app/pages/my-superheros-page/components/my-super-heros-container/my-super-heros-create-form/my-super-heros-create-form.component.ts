import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MySuperHerosCreateFormDialogComponent } from './my-super-heros-create-form-dialog/my-super-heros-create-form-dialog.component';

@Component({
  selector: 'app-my-super-heros-create-form',
  templateUrl: './my-super-heros-create-form.component.html',
  styleUrls: ['./my-super-heros-create-form.component.scss'],
})
export class MySuperHerosCreateFormComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(MySuperHerosCreateFormDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
