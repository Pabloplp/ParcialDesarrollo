import { TestBed } from '@angular/core/testing';

import { InterceptoService } from './intercepto.service';

describe('InterceptoService', () => {
  let service: InterceptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
