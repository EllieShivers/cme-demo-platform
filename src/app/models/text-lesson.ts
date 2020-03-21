import {Citation, Lesson} from './lesson';
import {ImageAsset} from './image-asset';

export class TextLesson extends Lesson {
  id: number;
  title: string;
  citations?: Citation[];
  sections: Section[];
  imageAsset?: ImageAsset;
}

class Section {
  header: string;
  body: string;
  imageAsset?: ImageAsset;
}
