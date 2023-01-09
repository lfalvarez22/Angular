import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperHerosCreateFormComponent } from './my-super-heros-create-form.component';

describe('MySuperHerosCreateFormComponent', () => {
  let component: MySuperHerosCreateFormComponent;
  let fixture: ComponentFixture<MySuperHerosCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuperHerosCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuperHerosCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
