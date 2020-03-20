

export class Lesson {
  type: LessonType;
  id: number;
  title: string;
  citations?: Citation[];
}

export enum LessonType {
  Text = "text",
  Video = "video",
  Quiz = "quiz"
}

export class Citation {
  apaString?: string;
  link?: string;
}
