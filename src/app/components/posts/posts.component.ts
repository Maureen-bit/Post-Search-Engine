import { Component } from '@angular/core';
import { SearchServiceService } from 'src/app/services/search-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[] = [];

  constructor( public postsService: SearchServiceService, private router : Router) {
      this.postsService.getPosts()
      .subscribe(
        ( data: any) => {
        this.posts = data;
      });
  }

  searchPost(id){
    this.router.navigate(['/post', id])
  }
}



