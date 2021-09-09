export interface PaginationData {
  offset: number;
  limit: number;
  direction?: string;
  filter?: any;
  totalDocs?: number;
  totalPages?: number;
  hasNextPage?: boolean;
}

export interface DateContext{
  created?: Date;
  updated?: Date;
}

export interface MenuContext {
  displayName: string;
  disabled?: boolean;
  iconName?: string;
  route?: string;
  children?: MenuContext[];
}

// export interface CommentContext extends DateContext{
//   id: string;
//   body: string;
//   user: ProfileContext;
//   replies: CommentReplyContext[];
//   article?: ArticleContext;
// }
// export interface CommentReplyContext extends DateContext{
//   id: string;
//   body: string;
//   user: ProfileContext;
//   parent: CommentContext;
// }
