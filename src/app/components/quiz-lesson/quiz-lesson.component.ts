import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LessonComponent, NavigateLessons} from '../lesson/lesson.component';
import {QuizLesson, QuestionType} from '../../models/quiz-lesson';

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

  constructor() {
    super();
  }

  ngOnInit() {
  }

  checkMCAnswer(value: string, currentAnswer: number, correctAnswer): string {
    if((currentAnswer + 1) == correctAnswer) {
      console.log('CORRECT: ' + value);
      return 'Correct Answer';
    }
    else {
      console.log('WRONG: ' + value);
      return 'Incorrect Answer';
    }
  }

  checkTFAnswer(value, correctAnswer:boolean): string{
    let parsedBoolean = (value === 'true');

    if (parsedBoolean === correctAnswer) {
      return 'Correct Answer';
    } else return 'Incorrect Answer';
  }

  @Output() changedLesson = new EventEmitter<number>();

  goToNext(): void{
    this.changedLesson.emit(NavigateLessons.next);
  }

  goToPrevious(): void{
    this.changedLesson.emit(NavigateLessons.previous);
  }
}
