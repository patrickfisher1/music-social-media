import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentPopoutComponent } from '../comment-popout/comment-popout.component';

@Component({
  selector: 'app-album-info-popout-item',
  templateUrl: './album-info-popout-item.component.html',
  styleUrls: ['./album-info-popout-item.component.css'],
})
export class AlbumInfoPopoutItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() infoType: string;
  @Input() info: string;
  @Input() link: string;
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {}
}
