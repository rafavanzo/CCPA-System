import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

describe('livroResolver', () => {
  let executeResolver: ResolveFn<boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    executeResolver = (...resolverParameters) =>
      Promise.resolve(true);
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
