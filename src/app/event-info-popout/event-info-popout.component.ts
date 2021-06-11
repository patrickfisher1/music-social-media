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
  @Input() eventLineup: string[][] = [];
  @Input() eventInfoPopoutItems: string[][] = [];
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {
	
	this.eventInfoPopoutItems.push([
      'Ticket Information',
      'You cannot buy tickets to an imaginary event. :/'
    ]);
	this.eventInfoPopoutItems.push([
      'Schedule',
      'Put in Event Schedule Here, in order of appearance time. Above lineup is more for listing in order of headliners probably, and to get individual artist info.'
    ]);
	this.eventInfoPopoutItems.push([
      'Venue Information',
      'On the corner of oh no where am i, and how did i end up here. No outside food or beverages.'
    ]);
	
	
	this.eventLineup.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artistName',
    ]);
    this.eventLineup.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artistName',
    ]);
    this.eventLineup.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artistName',
    ]);
    this.eventLineup.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artistName',
    ]);
    this.eventLineup.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artistName',
    ]);
    this.eventLineup.push([
      'https://picsum.photos/200',
      'https://picsum.photos/200',
      'artistName',
    ]);
  }
}
