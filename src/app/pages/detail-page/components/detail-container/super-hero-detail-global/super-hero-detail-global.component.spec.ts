import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroDetailGlobalComponent } from './super-hero-detail-global.component';

describe('SuperHeroDetailGlobalComponent', () => {
  let component: SuperHeroDetailGlobalComponent;
  let fixture: ComponentFixture<SuperHeroDetailGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroDetailGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroDetailGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
