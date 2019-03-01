import { TestBed } from '@angular/core/testing';

import { ProduktStoreService } from './produkt-store.service';

describe('ProduktStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduktStoreService = TestBed.get(ProduktStoreService);
    expect(service).toBeTruthy();
  });
});
