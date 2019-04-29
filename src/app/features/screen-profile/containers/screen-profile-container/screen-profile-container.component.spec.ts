import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenProfileContainerComponent } from './screen-profile-container.component';

describe('ScreenProfileContainerComponent', () => {
  let component: ScreenProfileContainerComponent;
  let fixture: ComponentFixture<ScreenProfileContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenProfileContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenProfileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
