import DashboardLayout from '@/layouts/Dashboard';
import { NextPageWithLayout } from '@/pages/_app';
import { Anchor, Breadcrumbs, Title } from '@mantine/core';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus cum, est rerum ea voluptates eaque dolorem
        maxime hic dignissimos laborum.
      </p>
    </>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  const breadcrumbs = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Calendar', href: '/dashboard/calendar' },
  ];

  return (
    <DashboardLayout>
      <Title order={2}>Calendar</Title>
      <Breadcrumbs separator="→" mt="xs">
        {breadcrumbs.map((item, index) => (
          <Anchor href={item.href} key={index}>
            {item.title}
          </Anchor>
        ))}
      </Breadcrumbs>

      {page}
    </DashboardLayout>
  );
};

export default Page;
