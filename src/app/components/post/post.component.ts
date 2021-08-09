import { Component, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent{

  comments: any = [];
  users: any = [];
  id: number;
  idParam: any;
  idUser: any;

  constructor( private activeRoute: ActivatedRoute,
    private servicePosts : SearchServiceService) {
    this.activeRoute.params.subscribe(
      params => {
      this.idParam = params;
      this.servicePosts.getCommentsbyPostId(params['id'])
      .subscribe(resp => {
        this.comments = resp;
        this.id = resp[0].postId;
      })
      }
    )

    this.servicePosts.getPostById(this.idParam['id'])
    .subscribe(resp => {
      this.idUser = resp[0].userId;
      this.servicePosts.getUserById(this.idUser)
      .subscribe(resp => {
        this.users.push(resp);
        })
      })
  }
}
