import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LessonComponent, NavigateLessons} from '../lesson/lesson.component';
import {QuestionType, QuizLesson, TrueFalseQuestion} from '../../models/quiz-lesson';

@Component({
  selector: 'app-quiz-lesson',
  templateUrl: './quiz-lesson.component.html',
  styleUrls: ['./quiz-lesson.component.css', '../lesson/lesson.component.css']
})
export class QuizLessonComponent extends LessonComponent implements OnInit {

  @Input() lesson: QuizLesson;
  public questionType = QuestionType;
  @Input() firstLessonInUnit: boolean;
  @Input() lastLessonInUnit: boolean;

  selectedAnswers: any[] = [];

  constructor() {
    super();
  }

  ngOnInit() {
    for (let i = 0; i < this.lesson.questions.length; i++) {
      this.selectedAnswers.push('UNANSWERED');
    }
  }

  selectAndCheckAnswer(answer: any, questionIndex: number) {
    this.selectedAnswers[questionIndex] = answer;
  }

  @Output() changedLesson = new EventEmitter<number>();

  goToNext(): void{
    this.changedLesson.emit(NavigateLessons.next);
  }

  goToPrevious(): void{
    this.changedLesson.emit(NavigateLessons.previous);
  }
}
