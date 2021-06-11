import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-image',
  templateUrl: './info-image.component.html',
  styleUrls: ['./info-image.component.css'],
})
export class InfoImageComponent implements OnInit {
  constructor() {}
  @Input() text: string;
  @Input() imgPath: string;
  @Input() link: string;

  ngOnInit(): void {}
}
