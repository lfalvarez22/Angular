import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperHerosModifyFormDialogComponent } from './my-super-heros-modify-form-dialog.component';

describe('MySuperHerosModifyFormDialogComponent', () => {
  let component: MySuperHerosModifyFormDialogComponent;
  let fixture: ComponentFixture<MySuperHerosModifyFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuperHerosModifyFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuperHerosModifyFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
