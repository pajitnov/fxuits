import { TestBed, inject } from '@angular/core/testing';

import { ComService } from '../com.service';

describe('ComService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComService]
    });
  });

  it('should be created', inject([ComService], (service: ComService) => {
    expect(service).toBeTruthy();
  }));
});
