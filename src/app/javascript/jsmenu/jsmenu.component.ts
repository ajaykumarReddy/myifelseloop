import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../comunication.service';

@Component({
  selector: 'app-jsmenu',
  templateUrl: './jsmenu.component.html',
  styleUrls: ['./jsmenu.component.scss']
})
export class JsmenuComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    const jsTopics = [
      { name: 'Maps', route: '/js-module' },
    ];
    this.communicationService.setMenuItems(jsTopics);
  }




}
