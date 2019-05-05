import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewScreenEventContainerComponent } from './new-screen-event-container.component';

describe('NewScreenEventContainerComponent', () => {
  let component: NewScreenEventContainerComponent;
  let fixture: ComponentFixture<NewScreenEventContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewScreenEventContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewScreenEventContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
