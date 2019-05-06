export default interface ScreenerEvent {
    screenEventName: string;
    screenEventDescription: string;
    // screenEventType: EventTypeEnum;
    screenEventType: string;
}

enum EventTypeEnum {
    JUMP_SCARE,
    VIOLENCE,
    GORE,
    SEXUAL_CONTENT
}
