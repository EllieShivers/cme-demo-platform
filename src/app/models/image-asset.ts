export class ImageAsset {
  fileName: string;
  externalURL?: string;
  position: Position;
  altText: string;
  caption: string;
}

export enum Position {
  left = 'left',
  above = 'above',
  right = 'right',
  below = 'below'

}
