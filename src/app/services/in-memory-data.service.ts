import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Lesson, LessonType} from '../models/lesson';
import {TextLesson} from '../models/text-lesson';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    return {};
  }
}
