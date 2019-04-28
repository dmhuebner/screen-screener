import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProfileSummaryComponent } from './screen-profile-summary.component';

describe('ScreenProfileSummaryComponent', () => {
  let component: ScreenProfileSummaryComponent;
  let fixture: ComponentFixture<ScreenProfileSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenProfileSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenProfileSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
