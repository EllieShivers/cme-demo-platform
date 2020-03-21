import {Component, Input, OnInit} from '@angular/core';
import {LessonComponent} from '../lesson/lesson.component';
import {QuizLesson, QuestionType} from '../../models/quiz-lesson';

@Component({
  selector: 'app-quiz-lesson',
  templateUrl: './quiz-lesson.component.html',
  styleUrls: ['./quiz-lesson.component.css', '../lesson/lesson.component.css']
})
export class QuizLessonComponent extends LessonComponent implements OnInit {

  @Input() lesson: QuizLesson;
  public questionType = QuestionType;

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
