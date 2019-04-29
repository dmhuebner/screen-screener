import { Component, Input, OnInit } from '@angular/core';
import ScreenProfileSummary from '@shared/interfaces/screenProfileSummary.interface';
import Screener from '../../interfaces/screener.interface';

@Component({
  selector: 'ss-screener-container',
  templateUrl: './screener-container.component.html',
  styleUrls: ['./screener-container.component.scss']
})
export class ScreenerContainerComponent implements OnInit {

  @Input() screenProfileSummary: ScreenProfileSummary;
  // TODO type this better than object
  @Input() screenerDetails: Screener;

  constructor() { }

  ngOnInit() {
  }

}
