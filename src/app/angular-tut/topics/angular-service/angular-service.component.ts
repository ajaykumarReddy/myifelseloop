import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-service',
  templateUrl: './angular-service.component.html',
  styleUrls: ['./angular-service.component.scss']
})
export class AngularServiceComponent implements OnInit {
  angularService: string;
  constructor() { }

  ngOnInit() {
    this.angularService = `
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {

  constructor() { }

}`;
  }

}
