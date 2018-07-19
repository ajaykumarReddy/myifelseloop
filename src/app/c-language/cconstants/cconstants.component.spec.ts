import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CconstantsComponent } from './cconstants.component';

describe('CconstantsComponent', () => {
  let component: CconstantsComponent;
  let fixture: ComponentFixture<CconstantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CconstantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CconstantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
