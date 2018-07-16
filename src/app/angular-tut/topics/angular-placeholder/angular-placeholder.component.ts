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
      { name: 'HttpClient', route: '/angular/http-client' }];
    this.communicationService.setMenuItems(angularTopics);
  }

}
