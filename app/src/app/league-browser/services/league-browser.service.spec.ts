import { TestBed } from '@angular/core/testing';

import { LeagueBrowserService } from './league-browser.service';

describe('LeagueBrowserService', () => {
  let service: LeagueBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeagueBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
