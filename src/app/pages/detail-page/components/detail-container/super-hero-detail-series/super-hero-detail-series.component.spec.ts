import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroDetailSeriesComponent } from './super-hero-detail-series.component';

describe('SuperHeroDetailSeriesComponent', () => {
  let component: SuperHeroDetailSeriesComponent;
  let fixture: ComponentFixture<SuperHeroDetailSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroDetailSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroDetailSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
