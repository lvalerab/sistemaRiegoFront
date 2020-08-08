import { TestBed } from '@angular/core/testing';

import { MainStationService } from './main-station.service';

describe('MainStationService', () => {
  let service: MainStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
