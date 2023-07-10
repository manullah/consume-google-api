import { Container } from '@mantine/core';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
