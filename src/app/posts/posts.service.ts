import { Injectable } from "@angular/core";
import { Post, Posts } from "../interfaces";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn:"root"})
export class PostsService {

  private posts :Posts = [];
  private postsUpdated = new Subject<Posts>();

  constructor(private http:HttpClient){}
 getPosts () {
   this.http.get<{message:String,posts:Posts}>('http://localhost:3000/api/posts')
   .subscribe((postData)=> {
this.posts = postData.posts;
this.postsUpdated.next([...this.posts]) 
   });
 }
 getPostsUpdateListener () {
   return this.postsUpdated.asObservable();
 }
 addPost (title:string,content:string) {
   const post:Post = {id:null,title:title,content:content};
   this.http.post<{message:string}>('http://localhost:3000/api/posts',post)
   .subscribe((responseData)=>{
     console.log(responseData.message);     
     this.posts.push(post);
     this.postsUpdated.next([...this.posts]);
   })
 }
}