import { TestBed, inject } from '@angular/core/testing';

import { ServicioAlumnosService } from './servicio-alumnos.service';

describe('ServicioAlumnosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioAlumnosService]
    });
  });

  it('should be created', inject([ServicioAlumnosService], (service: ServicioAlumnosService) => {
    expect(service).toBeTruthy();
  }));
});
