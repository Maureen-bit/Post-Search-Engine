import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  postsData: any[];

  constructor( private http: HttpClient) {
    }

    getPosts(): any{
      return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }

    getCommentsbyPostId(termino){
      return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${termino}`);
    }

    getPostById(termino){
      return this.http.get(`https://jsonplaceholder.typicode.com/posts?id=${termino}`);
    }

    getUserById(termino){
      return this.http.get(`https://jsonplaceholder.typicode.com/users?id=${termino}`);
    }

    searchPosts(termino){
      let arrayPosts: any[] = [];
      termino = termino.toLowerCase();
      let dataTest = this.http.get("https://jsonplaceholder.typicode.com/posts");

      dataTest.subscribe(
        ( dataResp: any) => {
          for(let data of dataResp){
            let title = data.title.toLocaleLowerCase();
            let body = data.body.toLocaleLowerCase();
            if(title.indexOf(termino) >= 0 || body.indexOf(termino) >= 0){
              arrayPosts.push(data)
            }
          }
      });
      return arrayPosts
    }
}

