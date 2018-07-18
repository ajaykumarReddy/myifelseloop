import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { CommunicationService } from './../comunication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit, AfterViewInit, OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav: any = [];
  @ViewChild('snav') snav: any;
  hideSideNav: boolean;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private communicationService: CommunicationService, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.communicationService.sideNavMenu$.subscribe(navItems => {
      setTimeout(() => {
        this.setMenuItems(navItems);
        this.hideSideNav = true;
        this.snav.toggle();
      }, 0);
    });
  }

  setMenuItems(navItems) {
    this.fillerNav = navItems;
  }

  goToPage() {
    this.fillerNav = [];
    this.router.navigate(['/']);
  }

  hireMe() {
    this.fillerNav = [];
    this.router.navigate(['/hireme']);
  }



  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
