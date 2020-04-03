import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TextLesson} from '../../models/text-lesson';
import {LessonComponent, NavigateLessons} from '../lesson/lesson.component';
import { Position } from '../../models/image-asset';

@Component({
  selector: 'app-text-lesson',
  templateUrl: './text-lesson.component.html',
  styleUrls: ['./text-lesson.component.css', '../lesson/lesson.component.css']
})
export class TextLessonComponent extends LessonComponent implements OnInit {

  @Input() lesson: TextLesson;
  @Input() firstLessonInUnit: boolean;
  @Input() lastLessonInUnit: boolean;

  position = Position;

  constructor() {
    super();
  }

  ngOnInit() {  }

  @Output() changedLesson = new EventEmitter<number>();

  goToNext(): void{
    this.changedLesson.emit(NavigateLessons.next);
  }

  goToPrevious(): void{
    this.changedLesson.emit(NavigateLessons.previous);
  }
}

