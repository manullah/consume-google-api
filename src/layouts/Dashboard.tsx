import { OwnHeader, OwnSidebar } from '@/components';
import { AppShell, Container } from '@mantine/core';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AppShell
      padding="md"
      layout="alt"
      navbar={<OwnSidebar />}
      header={<OwnHeader links={[]} />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}
      {children}
    </AppShell>
  );
}
