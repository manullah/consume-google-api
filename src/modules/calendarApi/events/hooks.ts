import { TCalendarListEventParams } from './types/request';
import { TCalendarEventList } from './types/entities';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { fetchCalendarlistEvent } from './apis';
import { TFetchDetailParams } from '@/modules/common/type';
import { TCalendarList } from '../calendarList/types/entities';

export const useFetchCalendarListEvent = (
  params: TFetchDetailParams<TCalendarEventList, TCalendarListEventParams, TCalendarList['id']>,
): UseQueryResult<TCalendarEventList, string> => {
  return useQuery({
    queryKey: ['calendar-list-event'],
    queryFn: () => fetchCalendarlistEvent(params.id, params.params),
    ...params.options,
  });
};
