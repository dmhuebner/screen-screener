import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ss-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {
  // The type of button to use
  @Input() buttonType: 'button' | 'submit' = 'button';
  // The material theme color to use
  @Input() color: string = 'primary';
  // The button click output
  @Input() isDisabled: boolean = false;
  // The button click output
  @Output() clicked: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.clicked.emit();
  }

}
