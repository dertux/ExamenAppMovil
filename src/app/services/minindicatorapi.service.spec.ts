import { TestBed } from '@angular/core/testing';

import { MindicatorapiService } from './minindicatorapi.service';

describe('MinindicatorapiService', () => {
  let service: MindicatorapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindicatorapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
