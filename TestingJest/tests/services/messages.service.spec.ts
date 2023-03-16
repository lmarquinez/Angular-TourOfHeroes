import { TestBed } from '@angular/core/testing';

import { MessagesService } from '../../src/app/services/messages.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MessagesService],
    });
    service = TestBed.inject(MessagesService);
  });

  /* Checking if the service is created and defined. */
  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service).toBeDefined();
  });
});
