import { TestBed } from '@angular/core/testing';

import { EcommerceServService } from './ecommerce-serv.service';

describe('EcommerceServService', () => {
  let service: EcommerceServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
