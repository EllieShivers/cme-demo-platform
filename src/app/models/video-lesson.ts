import {Lesson, LessonType} from './lesson';

export class VideoLesson extends Lesson {
  videoEmbedCode: string;
  transcript: string;
  id: number;
  title: string;
}
