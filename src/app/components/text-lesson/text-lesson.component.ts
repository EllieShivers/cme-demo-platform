import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TextLesson} from '../../../../projects/simple-course-core/src/lib/models/text-lesson';
import {LessonComponent, NavigateLessons} from '../lesson/lesson.component';
import { ImageAssetPosition } from '../../../../projects/simple-course-core/src/lib/models/image-asset';

@Component({
  selector: 'app-text-lesson',
  templateUrl: './text-lesson.component.html',
  styleUrls: ['./text-lesson.component.css', '../lesson/lesson.component.css']
})
export class TextLessonComponent extends LessonComponent implements OnInit {

  @Input() lesson: TextLesson;
  @Input() firstLessonInUnit: boolean;
  @Input() lastLessonInUnit: boolean;

  position = ImageAssetPosition;

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

