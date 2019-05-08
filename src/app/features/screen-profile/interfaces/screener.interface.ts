import ScreenerEvent from './screener-event.interface';

export default interface Screener {
    id: string;
    runTimeInMin: number;
    title: string;
    events: ScreenerEvent[];
}
