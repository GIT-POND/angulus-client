import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-sample',
  templateUrl: './post-sample.component.html',
  styleUrls: ['./post-sample.component.sass']
})
export class PostSampleComponent implements OnInit {
  funcVar = 'no content'
  funcVar2 = ''

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(input:HTMLTextAreaElement){
    this.funcVar = input.value
  }

  handleClick2(){
    this.funcVar = this.funcVar2
  }
}
