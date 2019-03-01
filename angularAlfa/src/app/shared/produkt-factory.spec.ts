import { ProduktFactory } from './produkt-factory';

describe('ProduktFactory', () => {
  it('should create an instance', () => {
    expect(new ProduktFactory()).toBeTruthy();
  });
});
