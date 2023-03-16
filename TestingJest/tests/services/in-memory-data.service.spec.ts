import { TestBed } from '@angular/core/testing';
import { InMemoryDataService } from '../../src/app/services/in-memory-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InMemoryDataService],
    });
    service = TestBed.inject(InMemoryDataService);
  });

  /* Checking if the service is created and defined. */
  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service).toBeDefined();
  });
});
