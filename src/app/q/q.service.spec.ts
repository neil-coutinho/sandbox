import { TestBed, inject } from '@angular/core/testing';

import { QService } from './q.service';

xdescribe('QService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QService]
    });
  });

  it('should be created', inject([QService], (service: QService) => {
    expect(service).toBeTruthy();
  }));
});
