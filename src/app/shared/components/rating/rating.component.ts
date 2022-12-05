import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  cropWidth: number;

  constructor() { }

  ngOnInit() {
    this.cropStars();
  }

  cropStars(): void {
    this.cropWidth = 75;
    this.cropWidth = this.rating * this.cropWidth/5;
  }
}
