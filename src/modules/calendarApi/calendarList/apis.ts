import googleAxios from '@/utils/googleAxios';
import { TCalendarList } from './types/entities';
import { TCalendarListParams } from './types/request';

export const fetchCalendarlistCalendarlist = async (params?: TCalendarListParams): Promise<TCalendarList> => {
  const result = await googleAxios.get<TCalendarList>(`/calendar/v3/users/me/calendarList`, {
    params,
  });
  return result.data;
};
