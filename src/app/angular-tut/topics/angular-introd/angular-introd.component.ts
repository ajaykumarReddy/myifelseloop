import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angular-introd',
  templateUrl: './angular-introd.component.html',
  styleUrls: ['./angular-introd.component.scss'],
})
export class AngularIntrodComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  getStart() {
    this.router.navigate(['/angular/createAngularApp']);
  }

}
