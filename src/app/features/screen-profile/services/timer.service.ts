import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService implements OnInit {

  timeLeft: number = 0;
  // TODO figure out what type the timerInterval is
  timerInterval: any;

  timerOnSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  timerOn$: Observable<boolean> = this.timerOnSubject.asObservable();

  currentTimerValueSubject: BehaviorSubject<number> = new BehaviorSubject<number>(this.timeLeft);
  currentTimerValue$: Observable<number> = this.currentTimerValueSubject.asObservable();

  timerOn: boolean;

  constructor() { }

  ngOnInit(): void {
    this.timerOn$.subscribe(val => this.timerOn = val);
    this.currentTimerValue$.subscribe(val => this.timeLeft = val);
  }

  setTimerOn(bool: boolean): void {
    this.timerOnSubject.next(bool);
  }

  tickTimer(): void {
    this.timeLeft = this.timeLeft + 1;
    this.currentTimerValueSubject.next(this.timeLeft);
  }

  startTimer(timeLength: number): void {
    this.setTimerOn(true);
    this.tickTimer();
    this.timerInterval = setInterval(() => {
      this.tickTimer();
      // If the time is up
      if (this.timeLeft >= timeLength) {
        this.handleTimerIsUp();
      }
    }, 1000);
  }

  resetTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.endTimer();
  }

  setTimeLeft(timeLength: number) {
    this.timeLeft = timeLength;
    this.currentTimerValueSubject.next(this.timeLeft);
  }

  private handleTimerIsUp() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
    this.endTimer();
    this.setTimeLeft(0);
  }

  private endTimer() {
    this.setTimerOn(false);
    this.setTimeLeft(0);
  }
}
