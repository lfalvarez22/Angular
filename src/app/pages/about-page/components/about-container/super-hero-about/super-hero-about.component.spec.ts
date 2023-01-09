import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroAboutComponent } from './super-hero-about.component';

describe('SuperHeroAboutComponent', () => {
  let component: SuperHeroAboutComponent;
  let fixture: ComponentFixture<SuperHeroAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
