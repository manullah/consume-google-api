import { TFetchListParams } from '@/modules/common/type';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TCalendarList } from './types/entities';
import { TCalendarListParams } from './types/request';
import { fetchCalendarlistCalendarlist } from './apis';

export const useFetchCalendarlistCalendarlist = (
  params: TFetchListParams<TCalendarList, TCalendarListParams>,
): UseQueryResult<TCalendarList, string> => {
  return useQuery({
    queryKey: ['calendar-list-calendarList'],
    queryFn: () => fetchCalendarlistCalendarlist(params.params),
    ...params.options,
  });
};
