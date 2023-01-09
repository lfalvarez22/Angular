import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroDetailComicsComponent } from './super-hero-detail-comics.component';

describe('SuperHeroDetailComicsComponent', () => {
  let component: SuperHeroDetailComicsComponent;
  let fixture: ComponentFixture<SuperHeroDetailComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroDetailComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperHeroDetailComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
