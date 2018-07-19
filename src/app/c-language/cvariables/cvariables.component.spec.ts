import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvariablesComponent } from './cvariables.component';

describe('CvariablesComponent', () => {
  let component: CvariablesComponent;
  let fixture: ComponentFixture<CvariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
