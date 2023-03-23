import { TestBed } from '@angular/core/testing';

import { BuyTicketResolverService } from './buy-ticket-resolver.service';

describe('BuyTicketResolverService', () => {
  let service: BuyTicketResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyTicketResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
