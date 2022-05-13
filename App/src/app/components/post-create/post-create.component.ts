import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.sass']
})
export class PostCreateComponent implements OnInit {
  postTitle = '';
  postContent = '';
  @Output() postCreated = new EventEmitter();     // Parent component listens to this

  constructor() { }

  ngOnInit(): void {
  }

  onCreatePost(){
    const post = {
      title: this.postTitle,
      content: this.postContent
    };
    this.postCreated.emit(post)
  }

}
