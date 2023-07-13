export type TCalendarEventList = {
  accessRole: string;
  defaultReminders: {
    method: string;
    minutes: number;
  }[];
  items: TCalendarEventItem[];
  kind: string;
  nextSyncToken: string;
  summary: string;
  timeZone: string;
  updated: string;
};

export type TCalendarEventItem = {
  kind: 'calendar#event';
  etag: string;
  id: string;
  status: string;
  htmlLink: string;
  created: string;
  updated: string;
  summary: string;
  description: string;
  location: string;
  colorId: string;
  creator: TCreator;
  organizer: TOrganizer;
  start: TStart;
  end: TEnd;
  endTimeUnspecified: boolean;
  recurrence: string[];
  recurringEventId: string;
  originalStartTime: TOriginalStartTime;
  transparency: string;
  visibility: string;
  iCalUID: string;
  sequence: number;
  attendees: TAttendance[];
  attendeesOmitted: boolean;
  extendedProperties: TExtendedProperties;
  hangoutLink: string;
  conferenceData: TConferenceData;
  gadget: TGadget[];
  anyoneCanAddSelf: boolean;
  guestsCanInviteOthers: boolean;
  guestsCanModify: boolean;
  guestsCanSeeOtherGuests: boolean;
  privateCopy: boolean;
  locked: boolean;
  reminders: TReminders;
  source: TSource;
  workingLocationProperties: TWorkingLocationProperties;
  attachments: TAttachment[];
  eventType: string;
};

type TCreator = {
  id: string;
  email: string;
  displayName: string;
  self: boolean;
};

type TOrganizer = {
  id: string;
  email: string;
  displayName: string;
  self: boolean;
};

type TStart = {
  date: string;
  dateTime: string;
  timeZone: string;
};

type TEnd = {
  date: string;
  dateTime: string;
  timeZone: string;
};

type TOriginalStartTime = {
  date: string;
  dateTime: string;
  timeZone: string;
};

type TAttendance = {
  id: string;
  email: string;
  displayName: string;
  organizer: boolean;
  self: boolean;
  resource: boolean;
  optional: boolean;
  responseStatus: string;
  comment: string;
  additionalGuests: number;
};

type TExtendedProperties = {
  private: (key: string) => void;
  shared: (key: string) => void;
};

type TConferenceData = {
  createRequest: {
    requestId: string;
    conferenceSolutionKey: {
      type: string;
    };
    status: {
      statusCode: string;
    };
  };
  entryPoints: {
    entryPointType: string;
    uri: string;
    label: string;
    pin: string;
    accessCode: string;
    meetingCode: string;
    passcode: string;
    password: string;
  }[];
  conferenceSolution: {
    key: {
      type: string;
    };
    name: string;
    iconUri: string;
  };
  conferenceId: string;
  signature: string;
  notes: string;
};

type TGadget = {
  type: string;
  title: string;
  link: string;
  iconLink: string;
  width: number;
  height: number;
  display: string;
  preferences: (key: string) => void;
};

type TReminders = {
  useDefault: boolean;
  overrides: {
    method: string;
    minutes: number;
  }[];
};

type TSource = {
  url: string;
  title: string;
};

type TWorkingLocationProperties = {
  type: string;
  homeOffice: string;
  customLocation: {
    label: string;
  };
  officeLocation: {
    buildingId: string;
    floorId: string;
    floorSectionId: string;
    deskId: string;
    label: string;
  };
};

type TAttachment = {
  fileUrl: string;
  title: string;
  mimeType: string;
  iconLink: string;
  fileId: string;
};
