import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperHerosModifyFormComponent } from './my-super-heros-modify-form.component';

describe('MySuperHerosModifyFormComponent', () => {
  let component: MySuperHerosModifyFormComponent;
  let fixture: ComponentFixture<MySuperHerosModifyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuperHerosModifyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuperHerosModifyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
