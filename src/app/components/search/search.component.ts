import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { SearchServiceService } from 'src/app/services/search-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  posts: any = [];
  param : string;
  constructor( private activateRoute: ActivatedRoute,
  private postsService: SearchServiceService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => {
      this.param = params['param'];
      this.posts = this.postsService.searchPosts(params['param'])
    })
  }

}
