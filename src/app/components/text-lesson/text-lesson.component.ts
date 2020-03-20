import {Component, Input, OnInit} from '@angular/core';
import {TextLesson} from '../../models/text-lesson';

@Component({
  selector: 'app-text-lesson',
  templateUrl: './text-lesson.component.html',
  styleUrls: ['./text-lesson.component.css', '../lesson/lesson.component.css']
})
export class TextLessonComponent implements OnInit {

  @Input() lesson: TextLesson;

  constructor() { }

  ngOnInit() {
  }

}
