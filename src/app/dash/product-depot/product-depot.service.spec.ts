import { TestBed } from '@angular/core/testing';

import { ProductDepotService } from './product-depot.service';

describe('ProductDepotService', () => {
  let service: ProductDepotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDepotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
