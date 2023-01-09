import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroHomeComponent } from './super-hero-home.component';

describe('SuperHeroHomeComponent', () => {
  let component: SuperHeroHomeComponent;
  let fixture: ComponentFixture<SuperHeroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
