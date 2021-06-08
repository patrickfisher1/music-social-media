import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-popout',
  templateUrl: './comment-popout.component.html',
  styleUrls: ['./comment-popout.component.css'],
})
export class CommentPopoutComponent implements OnInit {
  constructor() {}

  @Input() commentItems: string[][] = [];

  ngOnInit(): void {
    this.commentItems.push([
      'This is a sample comment.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is a sample response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'Hey you welcome to the page.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'I hope you like it here.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'I\'ll check out the page.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'I like music.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'Well, I like toitles.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'It\'s spelled \"TURTLES\".',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'But I like toitles.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'Listen you...',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'Hey hey no fighting now. We\'re here to enojoy music.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'Besides everyone knows its a tortoise not a turtle.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'Now that\'s the last straw.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
	this.commentItems.push([
      'This is another response.',
      'https://picsum.photos/200',
      'username',
    ]);
      }
}
