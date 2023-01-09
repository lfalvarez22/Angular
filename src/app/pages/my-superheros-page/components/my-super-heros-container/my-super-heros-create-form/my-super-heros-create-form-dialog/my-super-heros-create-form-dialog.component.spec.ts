import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperHerosCreateFormDialogComponent } from './my-super-heros-create-form-dialog.component';

describe('MySuperHerosCreateFormDialogComponent', () => {
  let component: MySuperHerosCreateFormDialogComponent;
  let fixture: ComponentFixture<MySuperHerosCreateFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuperHerosCreateFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuperHerosCreateFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
