/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FetchdataService } from './fetchdata.service';

describe('Service: Fetchdata', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchdataService]
    });
  });

  it('should ...', inject([FetchdataService], (service: FetchdataService) => {
    expect(service).toBeTruthy();
  }));
});
