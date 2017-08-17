import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ontheday',
  templateUrl: './ontheday.component.html',
  styleUrls: ['./ontheday.component.css']
})
export class OnthedayComponent implements OnInit {

  names=[{Country:"turkey",Name:"tim"},{Country:"turkey2",Name:"tim2"}]

  constructor() { }

  ngOnInit() {
  }

}
