import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CintroductionComponent } from './cintroduction.component';

describe('CintroductionComponent', () => {
  let component: CintroductionComponent;
  let fixture: ComponentFixture<CintroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CintroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CintroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
