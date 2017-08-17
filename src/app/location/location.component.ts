import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  width=window.screen.availWidth
  height=window.screen.availHeight


  constructor() { }

  ngOnInit() {
  }

}
