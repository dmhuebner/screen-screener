import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenEventFormComponent } from './screen-event-form.component';

describe('ScreenEventFormComponent', () => {
  let component: ScreenEventFormComponent;
  let fixture: ComponentFixture<ScreenEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
