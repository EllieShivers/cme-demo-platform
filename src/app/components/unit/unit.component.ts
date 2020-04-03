import {Component, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import {Unit} from '../../models/unit';
import {Lesson, LessonType} from '../../models/lesson';
import {NavigateLessons} from '../lesson/lesson.component';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit, OnChanges {

  @Input() unit: Unit;
  selectedLesson: Lesson;
  currentLessonIndex: number;

  public lessonType = LessonType;

  firstLessonInUnit: boolean = false;
  lastLessonInUnit: boolean = false;

  constructor() { }

  ngOnChanges(): void {
    this.selectLesson(this.unit.lessons[0], 0);
  }

  selectLesson(lesson: Lesson, index: number) {

    if (this.unit.lessons[0] === lesson) {
      this.firstLessonInUnit = true;
    }
    else this.firstLessonInUnit = false;

    if (this.unit.lessons[this.unit.lessons.length-1] === lesson) {
      this.lastLessonInUnit = true;
    }
    else this.lastLessonInUnit = false;
    console.log("First: " + this.firstLessonInUnit);
    console.log("Last: " + this.lastLessonInUnit);

    this.currentLessonIndex = index;
    this.selectedLesson = lesson;

  }

  ngOnInit(): void {
    this.selectLesson(this.unit.lessons[0], 0);
  }

  onChangedLesson($event: number) {
    let newLessonIndex: number;
    if ($event === NavigateLessons.next) {
      newLessonIndex = this.currentLessonIndex + 1;
    } else if ($event === NavigateLessons.previous) {
      newLessonIndex = this.currentLessonIndex - 1;
    }
    this.selectLesson(this.unit.lessons[newLessonIndex], newLessonIndex);
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.key === "ArrowRight" && this.currentLessonIndex < this.unit.lessons.length -1) {
      this.onChangedLesson(NavigateLessons.next);
    }
    else if (event.key === "ArrowLeft" && this.currentLessonIndex > 0) {
      this.onChangedLesson(NavigateLessons.previous);
    }
  }
}
