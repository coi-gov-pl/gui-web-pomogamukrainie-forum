export class Alert {
  header: string | undefined;
  content: string | undefined;
}

export enum ALERT_TYPES {
  CONFIRM = 'CONFIRM',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}
