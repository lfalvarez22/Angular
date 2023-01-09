import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroDetailStoriesComponent } from './super-hero-detail-stories.component';

describe('SuperHeroDetailStoriesComponent', () => {
  let component: SuperHeroDetailStoriesComponent;
  let fixture: ComponentFixture<SuperHeroDetailStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroDetailStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroDetailStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
