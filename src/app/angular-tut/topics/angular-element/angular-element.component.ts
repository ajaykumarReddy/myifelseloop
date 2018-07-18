import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: ['./angular-element.component.scss']
})
export class AngularElementComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('how to create angular elements');
  }

  ngOnInit() {
  }

}
