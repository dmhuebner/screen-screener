import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProfileComponent } from './screen-profile.component';

describe('ScreenProfileComponent', () => {
  let component: ScreenProfileComponent;
  let fixture: ComponentFixture<ScreenProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
