
import { Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class CommunicationService {

  // Observable string sources
  private sideNav = new Subject<any>();

  // Observable string streams
  sideNavMenu$ = this.sideNav.asObservable();

  constructor() { }

  setMenuItems(menus: any[]) {
    this.sideNav.next(menus);
  }

}
