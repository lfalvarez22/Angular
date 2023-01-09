import { TestBed } from '@angular/core/testing';
import { MySuperheroService } from './my-superhero.service';

describe('MySuperheroService', () => {
  let service: MySuperheroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySuperheroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
