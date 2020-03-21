import {Lesson} from './lesson';

export class QuizLesson extends Lesson {
  questions: Question[];
  id: number;
  title: string;
}

class Question {
  questionType: QuestionType;
  questionText: string;
  possibleAnswers?: string[]
}

export class MultipleChoiceQuestion extends Question {
  possibleAnswers: string[];
  correctAnswer: number; // Should correspond with the index of the correct answer in possibleAnswers. TODO Need to handle this differently.
}

export enum QuestionType {
  MultipleChoice='Multiple Choice',
  TrueFalse='True False'
}
