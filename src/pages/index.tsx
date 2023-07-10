import { GoogleButton } from '@/components';
import { Group, Paper, Text } from '@mantine/core';
import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]';
import DefaultLayout from '@/layouts/Default';

const Page = () => {
  return (
    <Paper radius="md" p="xl" my={'xl'} withBorder>
      <Text size="lg" weight={500}>
        Welcome to Web App, login with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>
    </Paper>
  );
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);

  if (session) {
    return {
      props: {},
      redirect: {
        destination: '/dashboard',
      },
    };
  }

  return {
    props: { session },
  };
};
