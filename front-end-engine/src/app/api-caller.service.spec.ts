/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiCallerService } from './api-caller.service';

describe('ApiCallerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCallerService]
    });
  });

  it('should ...', inject([ApiCallerService], (service: ApiCallerService) => {
    expect(service).toBeTruthy();
  }));
});
