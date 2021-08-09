import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: any = {};
  @Input() id: number;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  searchPost(){
    this.router.navigate(['/post', this.id])
  }

}
