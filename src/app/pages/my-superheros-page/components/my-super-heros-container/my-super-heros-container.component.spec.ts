import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuperHerosContainerComponent } from './my-super-heros-container.component';

describe('MySuperHerosContainerComponent', () => {
  let component: MySuperHerosContainerComponent;
  let fixture: ComponentFixture<MySuperHerosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuperHerosContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuperHerosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
