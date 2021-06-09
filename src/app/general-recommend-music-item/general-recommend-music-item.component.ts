import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-general-recommend-music-item',
  templateUrl: './general-recommend-music-item.component.html',
  styleUrls: ['./general-recommend-music-item.component.css'],
})
export class GeneralRecommendMusicItemComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() imgPath: string;
  @Input() albumPath: string;
  @Input() username: string;
  @Input() song: string;
  @Input() artist: string;
  @Input() album: string;
  @Input() link: string;
	open(content): void {
		this.modalService.open(content, { modalDialogClass: 'hidden-modal' });
	}
  ngOnInit(): void {}
}
