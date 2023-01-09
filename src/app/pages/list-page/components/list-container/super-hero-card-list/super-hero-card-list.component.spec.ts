import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroCardListComponent } from './super-hero-card-list.component';

describe('SuperHeroCardListComponent', () => {
  let component: SuperHeroCardListComponent;
  let fixture: ComponentFixture<SuperHeroCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
