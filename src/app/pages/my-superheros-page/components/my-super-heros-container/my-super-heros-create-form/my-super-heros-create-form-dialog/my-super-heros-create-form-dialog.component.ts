import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MySuperheroService } from 'src/app/core/services/my-superhero.service';
import { MySuperheroData } from '../../../../../../shared/models/my-superhero.model';

@Component({
  selector: 'app-my-super-heros-create-form-dialog',
  templateUrl: './my-super-heros-create-form-dialog.component.html',
  styleUrls: ['./my-super-heros-create-form-dialog.component.scss'],
})
export class MySuperHerosCreateFormDialogComponent {
  newMySuperheroForm!: FormGroup;

  constructor(
    protected dialogRef: MatDialogRef<MySuperHerosCreateFormDialogComponent>,
    protected mySuperheroService: MySuperheroService
  ) {
    this.newMySuperheroForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  createMySuperhero(): void {
    this.mySuperheroService.create(this.collectDataFromNewMySuperheroForm(this.newMySuperheroForm.value));
  }

  collectDataFromNewMySuperheroForm(formData: any): MySuperheroData {
    const { id, name, description } = formData;

    return {
      id,
      name,
      description,
    };
  }
}
