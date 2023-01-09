import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroFunctionalityHomeComponent } from './super-hero-functionality-home.component';

describe('SuperHeroFunctionalityHomeComponent', () => {
  let component: SuperHeroFunctionalityHomeComponent;
  let fixture: ComponentFixture<SuperHeroFunctionalityHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroFunctionalityHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroFunctionalityHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
