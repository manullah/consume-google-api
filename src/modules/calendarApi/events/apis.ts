import googleAxios from '@/utils/googleAxios';
import { TCalendarEventList } from './types/entities';
import { TCalendarListEventParams } from './types/request';
import { TCalendarList } from '../calendarList/types/entities';

export const fetchCalendarlistEvent = async (
  calendarId: TCalendarList['id'],
  params?: TCalendarListEventParams,
): Promise<TCalendarEventList> => {
  const result = await googleAxios.get<TCalendarEventList>(`/calendar/v3/calendars/${calendarId}/events`, {
    params,
  });
  return result.data;
};
