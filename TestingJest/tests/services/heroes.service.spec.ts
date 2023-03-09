import { TestBed } from '@angular/core/testing';
import { HeroesService } from '../../src/app/services/heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService],
    });
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
