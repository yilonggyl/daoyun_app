import { TestBed, inject } from '@angular/core/testing';

import { AppShareService } from './app-share.service';

describe('AppShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppShareService]
    });
  });

  it('should be created', inject([AppShareService], (service: AppShareService) => {
    expect(service).toBeTruthy();
  }));
});
