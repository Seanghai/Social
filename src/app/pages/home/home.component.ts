import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileImage: string;
  profileName: string;
  dateTime: string;
  status: string;
  image: string;
  video: string;
  like: boolean;
  numberLike: number;
  comment: any;
  share: boolean;
  numberShare: number;

  constructor() {
    this.profileImage = 'assets/users/seanghai.jpg';
    this.profileName = 'Seanghai Cheu';
    this.dateTime = '1 day ago';
    this.status = 'Hello, I am Seanghai.';
    this.image = 'http://lorempixel.com/640/480/';
    this.video = '';
    this.like = false;
    this.numberLike = 168;
    this.comment = {};
    this.share = true;
    this.numberShare = 23;
  }

  ngOnInit() {
  }

}
