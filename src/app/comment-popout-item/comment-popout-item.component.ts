import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-popout-item',
  templateUrl: './comment-popout-item.component.html',
  styleUrls: ['./comment-popout-item.component.css'],
})
export class CommentPopoutItemComponent implements OnInit {
  constructor() {}
  @Input() text: string;
  @Input() imgPath: string;
  @Input() username: string;
  @Input() link: string;

  ngOnInit(): void {}
}
