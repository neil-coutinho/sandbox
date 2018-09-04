import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

xdescribe('TestService', () => {
  let service: TestService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    });
    service = TestBed.get(TestService);
    console.log('hello world');
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
