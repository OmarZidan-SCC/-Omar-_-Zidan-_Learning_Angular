export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  published?: boolean;
  imageUrl?: string;

  publishDate: Date;
  sponsorship: number;
}
