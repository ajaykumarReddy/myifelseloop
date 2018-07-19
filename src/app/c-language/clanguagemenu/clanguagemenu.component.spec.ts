import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClanguagemenuComponent } from './clanguagemenu.component';

describe('ClanguagemenuComponent', () => {
  let component: ClanguagemenuComponent;
  let fixture: ComponentFixture<ClanguagemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClanguagemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClanguagemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
