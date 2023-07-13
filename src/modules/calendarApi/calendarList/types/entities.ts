import { TConferenceProperties } from '../../entities';

export type TCalendarList = {
  kind: string;
  etag: string;
  id: string;
  summary: string;
  description: string;
  location: string;
  timeZone: string;
  summaryOverride: string;
  colorId: string;
  backgroundColor: string;
  foregroundColor: string;
  hidden: boolean;
  selected: boolean;
  accessRole: string;
  defaultReminders: TDefaultReminders[];
  notificationSettings: TNotificationSettings;
  primary: boolean;
  deleted: boolean;
  conferenceProperties: TConferenceProperties;
};

export type TDefaultReminders = {
  method: string;
  minutes: number;
};

export type TNotificationSettings = {
  notifications: TNotification[];
};

export type TNotification = {
  type: string;
  method: string;
};
