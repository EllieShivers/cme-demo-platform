import {Lesson, LessonType} from './lesson';

export class QuizLesson extends Lesson {
  questions: Question[];
  id: number;
  title: string;
}


class Question {
  questionType: number;
  correctFeedback?: string;
  incorrectFeedback?: string;
}

class MultipleChoiceQuestion extends Question {
  questionText: string;
  possibleAnswers: string[];
  correctAnswer: number; // Should correspond with the index of the correct answer in possibleAnswers. TODO Need to handle this differently.
}

export enum QuestionType {
  MultipleChoice
}
