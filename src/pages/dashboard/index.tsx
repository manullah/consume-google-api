import DashboardLayout from '@/layouts/Dashboard';
import { NextPageWithLayout } from '../_app';

const Page: NextPageWithLayout = () => {
  return <p>Dashboard</p>;
};

Page.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Page;
