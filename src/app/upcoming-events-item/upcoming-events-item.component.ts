import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentPopoutComponent } from '../comment-popout/comment-popout.component';

@Component({
  selector: 'app-upcoming-events-item',
  templateUrl: './upcoming-events-item.component.html',
  styleUrls: ['./upcoming-events-item.component.css'],
})
export class UpcomingEventsItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() imgPath: string;
  @Input() artPath: string;
  @Input() artist: string;
  @Input() venue: string;
  @Input() date: string;
  @Input() link: string;
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {}
}
