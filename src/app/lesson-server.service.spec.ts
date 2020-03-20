import { TestBed } from '@angular/core/testing';

import { LessonServerService } from './lesson-server.service';

describe('LessonServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LessonServerService = TestBed.get(LessonServerService);
    expect(service).toBeTruthy();
  });
});
