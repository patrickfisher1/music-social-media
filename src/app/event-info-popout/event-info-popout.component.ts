import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentPopoutComponent } from '../comment-popout/comment-popout.component';

@Component({
  selector: 'app-event-info-popout',
  templateUrl: './event-info-popout.component.html',
  styleUrls: ['./event-info-popout.component.css'],
})
export class EventInfoPopoutComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  @Input() eventName = 'MusicFest \'22';
  @Input() date = '6/15/2022';
  @Input() venue = 'The Venue';
  @Input() host = 'BumpinEvents';
  @Input() eventInfoPopoutItems: string[][] = [];
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {
    this.eventInfoPopoutItems.push([
      'Lineup',
      'Artist 1. Artist 2. Artist 3.'
    ]);
	
	this.eventInfoPopoutItems.push([
      'Ticket Information',
      'You cannot buy tickets to an imaginary event. :/'
    ]);
	this.eventInfoPopoutItems.push([
      'Venue Information',
      'On the corner of oh no where am i, and how did i end up here. No outside food or beverages.'
    ]);
  }
}
