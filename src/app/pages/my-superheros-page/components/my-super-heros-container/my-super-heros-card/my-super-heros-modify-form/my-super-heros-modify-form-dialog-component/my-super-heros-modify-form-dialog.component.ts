import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MySuperheroService } from 'src/app/core/services/my-superhero.service';
import { MySuperheroData } from 'src/app/shared/models/my-superhero.model';

@Component({
  selector: 'app-my-super-heros-modify-form-dialog',
  templateUrl: './my-super-heros-modify-form-dialog.component.html',
  styleUrls: ['./my-super-heros-modify-form-dialog.component.scss'],
})
export class MySuperHerosModifyFormDialogComponent {
  modifyMySuperheroForm!: FormGroup;

  mySuperheroModified: EventEmitter<void> = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    protected dialogRef: MatDialogRef<MySuperHerosModifyFormDialogComponent>,
    protected mySuperheroService: MySuperheroService
  ) {
    this.modifyMySuperheroForm = new FormGroup({
      name: new FormControl(this.data.mySuperhero.name, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      description: new FormControl(this.data.mySuperhero.description, [
        Validators.required,
        Validators.maxLength(100),
      ]),
    });
  }

  modifyMySuperhero() {
    this.mySuperheroService.update(
      this.collectDataFromNewMySuperheroForm(this.modifyMySuperheroForm.value)
    );
    this.mySuperheroModified.emit();
  }

  collectDataFromNewMySuperheroForm(formData: any): MySuperheroData {
    const { name, description } = formData;

    return {
      id: this.data.mySuperhero.id,
      name,
      description,
    };
  }
}
