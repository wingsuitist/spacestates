/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { SpaceAPIService } from './space-api.service';

describe('Service: SpaceAPI', () => {
  beforeEach(() => {
    addProviders([SpaceAPIService]);
  });

  it('should ...',
    inject([SpaceAPIService],
      (service: SpaceAPIService) => {
        expect(service).toBeTruthy();
      }));
});
