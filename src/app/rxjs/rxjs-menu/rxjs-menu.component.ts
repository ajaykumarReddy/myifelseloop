import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../comunication.service';

@Component({
  selector: 'app-rxjs-menu',
  templateUrl: './rxjs-menu.component.html',
  styleUrls: ['./rxjs-menu.component.scss']
})
export class RxjsMenuComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    const rxjsMenus = [
      { name: 'Migration', route: '/rxjs' },
    ];
    this.communicationService.setMenuItems(rxjsMenus);
  }

}
