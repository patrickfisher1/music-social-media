import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-artist-albums-popout-item',
  templateUrl: './artist-albums-popout-item.component.html',
  styleUrls: ['./artist-albums-popout-item.component.css'],
})
export class ArtistAlbumsPopoutItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {}
}
