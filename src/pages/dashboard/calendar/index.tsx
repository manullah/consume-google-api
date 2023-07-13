import DashboardLayout from '@/layouts/Dashboard';
import { useFetchCalendarlistCalendarlist } from '@/modules/calendarApi/calendarList/hooks';
import { useFetchCalendarListEvent } from '@/modules/calendarApi/events/hooks';
import { TCalendarEventItem } from '@/modules/calendarApi/events/types/entities';
import { NextPageWithLayout } from '@/pages/_app';
import { PARAMS_CALENDAR_FORMAT_DATE } from '@/utils/helpers/date';
import { Anchor, Avatar, Breadcrumbs, Button, Card, Group, Paper, Stack, Text, TextProps, Title } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import dayjs from 'dayjs';
import { useState } from 'react';

const Page: NextPageWithLayout = () => {
  const [activedDate, setActivedDate] = useState<Date>(new Date());
  const setToday = () => {
    setActivedDate(new Date());
  };

  const calendarListDataHook = useFetchCalendarlistCalendarlist({});

  const calendarEvents = useFetchCalendarListEvent({
    id: 'mimanullah26@gmail.com',
    params: {
      timeMin: dayjs().startOf('month').format(PARAMS_CALENDAR_FORMAT_DATE),
      timeMax: dayjs().endOf('month').format(PARAMS_CALENDAR_FORMAT_DATE),
    },
  });

  return (
    <>
      <Group position="right">
        <Button mb={'md'} onClick={setToday}>
          Today
        </Button>
      </Group>

      <Calendar
        className="own-calendar"
        size="lg"
        date={activedDate}
        static
        onDateChange={setActivedDate}
        renderDay={(date) => <DateDay date={date} events={calendarEvents.data?.items || []} />}
      />
    </>
  );
};

type TDateDay = {
  date: Date;
  events: TCalendarEventItem[];
};

const DateDay: React.FC<TDateDay> = (props) => {
  const { date, events } = props;

  const isDay = dayjs().format('YYYY-MM-DD') === dayjs(date).format('YYYY-MM-DD');
  const isMonth = dayjs().format('MM') === dayjs(date).format('MM');

  const conditionalStyleDate = (): TextProps => {
    if (isDay) {
      return {
        fw: 800,
        c: 'blue',
      };
    }

    if (!isMonth) {
      return {
        c: 'gray.5',
      };
    }

    return {};
  };

  const listEvent =
    events
      .filter((item) => dayjs(item.start.dateTime).format('DD MMMMM') === dayjs(date).format('DD MMMMM'))
      .splice(0, 2) || [];

  return (
    <Paper p={'xs'} w={'100%'} mih={'90px'}>
      <Text align={'end'} size={'md'} {...conditionalStyleDate()} mb={'xs'}>
        {date.getDate()}
      </Text>

      <Stack spacing={'xs'}>
        {listEvent?.map((item) => (
          <Button key={item.id} variant="outline" size="xs" compact>
            <Text align="left" truncate>
              {item.summary}
            </Text>
          </Button>
        ))}
        {listEvent?.length > 2 ? (
          <Button variant="outline" size="xs" compact>
            More...
          </Button>
        ) : null}
      </Stack>
    </Paper>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Calendar', href: '/dashboard/calendar' },
  ];

  return (
    <DashboardLayout>
      <Card p={'xl'} withBorder>
        <Breadcrumbs separator="→" mb={'xs'}>
          {breadcrumbs.map((item, index) => (
            <Anchor href={item.href} key={index}>
              {item.title}
            </Anchor>
          ))}
        </Breadcrumbs>
        <Title order={2} mb={'xl'}>
          Calendar
        </Title>

        {page}
      </Card>
    </DashboardLayout>
  );
};

export default Page;
