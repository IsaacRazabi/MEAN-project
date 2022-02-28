export interface Post {
  id?:string|null;
  title?: string;
  content?: string;
}
export interface Posts extends Array<Post>{}
//or : Post [] on the component