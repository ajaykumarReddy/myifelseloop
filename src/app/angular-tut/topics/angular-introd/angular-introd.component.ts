import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './../../../comunication.service';

@Component({
  selector: 'app-angular-introd',
  templateUrl: './angular-introd.component.html',
  styleUrls: ['./angular-introd.component.scss']
})
export class AngularIntrodComponent implements OnInit {

  constructor(private communicationService: CommunicationService) { }

  ngOnInit() {
    const angularTopics = [
      { name: 'Introduction1', route: 'introduction' },
      { name: 'Introduction2', route: 'introduction' },
      { name: 'Introduction3', route: 'introduction' },
      { name: 'Introduction4', route: 'introduction' }];
    this.communicationService.setMenuItems(angularTopics);
  }

}
