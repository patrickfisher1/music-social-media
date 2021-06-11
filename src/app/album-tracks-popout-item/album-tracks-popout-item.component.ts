import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-album-tracks-popout-item',
  templateUrl: './album-tracks-popout-item.component.html',
  styleUrls: ['./album-tracks-popout-item.component.css'],
})
export class AlbumTracksPopoutItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {}
}
