import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../comunication.service';

@Component({
  selector: 'app-clanguagemenu',
  templateUrl: './clanguagemenu.component.html',
  styleUrls: ['./clanguagemenu.component.scss']
})
export class ClanguagemenuComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    const cTopics = [
      { name: 'C Intoduction', route: '/c-programming' },
      // { name: 'Constants', route: '/c-programming/constants' },
      // { name: 'Variables', route: '/c-programming/variables' },

    ];
    this.communicationService.setMenuItems(cTopics);
  }


}
