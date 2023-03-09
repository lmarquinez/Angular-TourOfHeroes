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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
