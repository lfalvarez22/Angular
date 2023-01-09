import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperHerosCardComponent } from './my-super-heros-card.component';

describe('MySuperHerosCardComponent', () => {
  let component: MySuperHerosCardComponent;
  let fixture: ComponentFixture<MySuperHerosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuperHerosCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuperHerosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
