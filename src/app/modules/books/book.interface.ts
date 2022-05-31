export interface BookInterface {
  title: string;
  imageUrl: string;
  description: string;
  mainAuthorId: number;
  coAuthorsIds: number[];
  amount: number;
}
