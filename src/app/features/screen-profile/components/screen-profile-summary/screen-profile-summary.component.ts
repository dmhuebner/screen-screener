import { Component, OnInit, Input } from '@angular/core';
import ScreenProfileSummary from '@shared/interfaces/screenProfileSummary.interface';

@Component({
  selector: 'ss-screen-profile-summary',
  templateUrl: './screen-profile-summary.component.html',
  styleUrls: ['./screen-profile-summary.component.scss']
})
export class ScreenProfileSummaryComponent implements OnInit {

  @Input() screenProfileSummary: ScreenProfileSummary;

  constructor() { }

  ngOnInit() {
  }

}
