import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Unit} from '../models/unit';
import {Lesson, LessonType} from '../models/lesson';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit, OnChanges {

  @Input() unit: Unit;
  selectedLesson: Lesson;
  public lessonType = LessonType;

  constructor() { }

  ngOnChanges(): void {
    this.selectedLesson = this.unit.lessons[0];
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson = lesson;
  }

  ngOnInit(): void {
    this.selectedLesson = this.unit.lessons[0];
  }
}
