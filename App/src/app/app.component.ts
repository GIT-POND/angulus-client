import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  storedPosts = [];

  onPostCreated(post:Post){
    this.storedPosts.push(post)
  }
}

type Post = {
    title: string;
    content: string;
};
