import {Citation, Lesson, LessonType} from './lesson';

export class QuizLesson extends Lesson {
  constructor(title: string, questions: Question[], citations?: Citation[]) {
    super(title, citations || undefined);
    this.type = LessonType.Quiz;
    this.questions = questions;
    //if (citations) this.citations = citations;
  }
  questions: Question[];
}

class Question {
  constructor() {
  }
  questionType: QuestionType;
  questionText: string;
}

export class MultipleChoiceQuestion extends Question {
  constructor(questionText: string, possibleAnswers: string[], correctAnswer: number, feedback: string[]) {
    super();
    this.questionType = QuestionType.MultipleChoice;
    this.questionText = questionText;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
    if (feedback) this.feedback = feedback;
  }
  feedback?: string[];
  possibleAnswers: string[];
  correctAnswer: number;
}

export class TrueFalseQuestion extends Question {
  constructor(questionText: string, correctAnswer: boolean, feedback: string){
    super();
    this.questionType = QuestionType.TrueFalse;
    this.questionText = questionText;
    this.correctAnswer = correctAnswer;
    if (feedback) this.feedback = feedback;
  }
  correctAnswer: boolean;
  feedback?: string;
}

export enum QuestionType {
  MultipleChoice = 'Multiple Choice',
  TrueFalse = 'True or False'
}
