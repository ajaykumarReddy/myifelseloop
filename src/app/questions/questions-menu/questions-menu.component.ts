import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../comunication.service';

@Component({
  selector: 'app-questions-menu',
  templateUrl: './questions-menu.component.html',
  styleUrls: ['./questions-menu.component.scss']
})
export class QuestionsMenuComponent implements OnInit {


  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    const questionsMenu = [
      { name: 'C-Language', route: '/questions' },
    ];
    this.communicationService.setMenuItems(questionsMenu);
  }
}
