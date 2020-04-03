import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnDestroy {
  @Input() lesson;

  constructor() {}

  ngOnInit() { }

  ngOnDestroy(): void {}
}

export enum NavigateLessons {
  previous,
  next
}
