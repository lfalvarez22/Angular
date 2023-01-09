import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MySuperHerosRoutingModule } from './my-superheros-routing.module';
import { MySuperHerosCardComponent } from './components/my-super-heros-container/my-super-heros-card/my-super-heros-card.component';
import { MySuperHerosContainerComponent } from './components/my-super-heros-container/my-super-heros-container.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MySuperHerosModifyFormComponent } from './components/my-super-heros-container/my-super-heros-card/my-super-heros-modify-form/my-super-heros-modify-form.component';
import { MySuperHerosCreateFormComponent } from './components/my-super-heros-container/my-super-heros-create-form/my-super-heros-create-form.component';
import { MySuperHerosCreateFormDialogComponent } from './components/my-super-heros-container/my-super-heros-create-form/my-super-heros-create-form-dialog/my-super-heros-create-form-dialog.component';
import { MySuperHerosModifyFormDialogComponent } from './components/my-super-heros-container/my-super-heros-card/my-super-heros-modify-form/my-super-heros-modify-form-dialog-component/my-super-heros-modify-form-dialog.component';

@NgModule({
  declarations: [
    MySuperHerosContainerComponent,
    MySuperHerosCreateFormComponent,
    MySuperHerosCardComponent,
    MySuperHerosCreateFormDialogComponent,
    MySuperHerosModifyFormComponent,
    MySuperHerosModifyFormDialogComponent,
  ],
  imports: [
    CommonModule,
    MySuperHerosRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    MySuperHerosContainerComponent,
    MySuperHerosCreateFormComponent,
    MySuperHerosCardComponent,
    MySuperHerosCreateFormDialogComponent,
    MySuperHerosModifyFormComponent,
    MySuperHerosModifyFormDialogComponent,
  ],
})
export class MySuperHerosModule {}
