import { DateContext } from "./common";

export interface ArticleCategory extends DateContext{
  id?: string;
  slug: string | null;
  name: string;
  description?: string;
  image?: string;
  thumbnail?: string;
  ancestors?: ArticleCategory[];
  parent?: ArticleCategory;
}
