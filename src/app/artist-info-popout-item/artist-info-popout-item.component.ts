import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentPopoutComponent } from '../comment-popout/comment-popout.component';

@Component({
  selector: 'app-artist-info-popout-item',
  templateUrl: './artist-info-popout-item.component.html',
  styleUrls: ['./artist-info-popout-item.component.css'],
})
export class ArtistInfoPopoutItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() infoType: string;
  @Input() info: string;
  @Input() link: string;
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {}
}
