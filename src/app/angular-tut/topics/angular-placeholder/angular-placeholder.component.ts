import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../../comunication.service';

@Component({
  selector: 'app-angular-placeholder',
  templateUrl: './angular-placeholder.component.html',
  styleUrls: ['./angular-placeholder.component.scss']
})
export class AngularPlaceholderComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    const angularTopics = [
      { name: 'Features', route: '/angular' },
      { name: 'Create Applicaton', route: '/angular/create-angular-app' },
      { name: 'HttpClient', route: '/angular/http-client' },
      { name: 'Services', route: '/angular/http-service' },
      { name: 'Angular-Elements', route: '/angular/angular-element' },
      { name: 'Http-Operators', route: '/angular/http-operators' },
      { name: 'vscode-extensions', route: '/angular/vs-code-ext' },
      { name: 'angularv6.1-features', route: '/angular/angularv6.1-features' },
      { name: 'keyvalue', route: '/angular/keyvalue' },
    ];
    this.communicationService.setMenuItems(angularTopics);
  }

}
