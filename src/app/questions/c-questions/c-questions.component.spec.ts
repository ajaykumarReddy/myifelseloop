import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CQuestionsComponent } from './c-questions.component';

describe('CQuestionsComponent', () => {
  let component: CQuestionsComponent;
  let fixture: ComponentFixture<CQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
