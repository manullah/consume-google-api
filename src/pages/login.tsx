import { GetServerSideProps } from 'next';
import { getSession, signIn, useSession } from 'next-auth/react';

const login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>Welcome, {session.user?.email}</div>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default login;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession();

  if (session) {
    return {
      props: { data: null },
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: { session },
  };
};
