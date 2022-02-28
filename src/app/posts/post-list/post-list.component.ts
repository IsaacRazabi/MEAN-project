import { Subscription } from "rxjs";
import { Component , OnDestroy, OnInit} from "@angular/core";
import {Post,Posts} from '../../interfaces';
import { PostsService } from "../posts.service";

   
@Component ({
  selector:'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls:['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy {
posts:Posts =[];
  private postsSub!: Subscription;

constructor (public postsService : PostsService) {}

ngOnInit() {
    this.postsService.getPosts();
   this.postsSub = this.postsService.getPostsUpdateListener()
    .subscribe((posts:Posts)=>{
this.posts = posts
    });
}

ngOnDestroy() {
  this.postsSub.unsubscribe();
}
}