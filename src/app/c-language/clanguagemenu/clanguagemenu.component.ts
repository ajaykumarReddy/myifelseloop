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
      { name: 'Constants in C', route: '/c-programming/constants-in-c' },
      { name: 'Variables in C', route: '/c-programming/variables-in-c' },
      { name: 'Keywords and Identifiers', route: '/c-programming/c-keywords-identifiers' },

    ];
    this.communicationService.setMenuItems(cTopics);
  }


}
