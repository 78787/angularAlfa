

import { PersonFactory } from './person-factory';

describe('PersonFactory', () => {
  it('should create an instance', () => {
    expect(new PersonFactory()).toBeTruthy();
  });
});
