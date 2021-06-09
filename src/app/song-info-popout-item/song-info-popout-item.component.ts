import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentPopoutComponent } from '../comment-popout/comment-popout.component';

@Component({
  selector: 'app-song-info-popout-item',
  templateUrl: './song-info-popout-item.component.html',
  styleUrls: ['./song-info-popout-item.component.css'],
})
export class SongInfoPopoutItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() infoType: string;
  @Input() info: string;
  @Input() link: string;
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {}
}
