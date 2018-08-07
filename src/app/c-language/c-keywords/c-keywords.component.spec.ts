import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CKeywordsComponent } from './c-keywords.component';

describe('CKeywordsComponent', () => {
  let component: CKeywordsComponent;
  let fixture: ComponentFixture<CKeywordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CKeywordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
