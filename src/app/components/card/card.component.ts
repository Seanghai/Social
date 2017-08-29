import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // define properties with default value
  // @Input() _status: string = 'hello';

  @Input() _profileImage: string;
  @Input() _profileName: string;
  @Input() _dateTime: string;
  @Input() _status: string = '';
  @Input() _image: string = '';
  @Input() _video: string = '';
  @Input() _like: boolean = false;
  @Input() _numberLike: number = 0;
  @Input() _comment: any;
  @Input() _share: boolean;
  @Input() _numberShare: number = 0;

  numberComment: number = 0;

  constructor() {
    this.numberComment = 168;
  }

  ngOnInit() {
    // alert('On init');
  }

  toggleLike(): void {
    this._like = !this._like;
    if (this._like) {
      this._numberLike = this._numberLike + 1;
    } else {
      this._numberLike = this._numberLike - 1;
    }
  }

}
