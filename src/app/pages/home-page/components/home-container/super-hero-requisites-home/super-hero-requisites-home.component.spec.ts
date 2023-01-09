import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroRequisitesHomeComponent } from './super-hero-requisites-home.component';

describe('SuperHeroRequisitesHomeComponent', () => {
  let component: SuperHeroRequisitesHomeComponent;
  let fixture: ComponentFixture<SuperHeroRequisitesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroRequisitesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroRequisitesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
