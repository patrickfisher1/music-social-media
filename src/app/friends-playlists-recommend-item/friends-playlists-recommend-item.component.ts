import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-friends-playlists-recommend-item',
  templateUrl: './friends-playlists-recommend-item.component.html',
  styleUrls: ['./friends-playlists-recommend-item.component.css'],
})
export class FriendsPlaylistsRecommendItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() link: string;
  @Input() playlistName: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() length: string;
    open(content): void {
    this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
  }
  ngOnInit(): void {}
}
