import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col overflow-x-hidden overflow-y-scroll pt-2 lg:flex-row">
      <div className="w-full flex-none lg:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-2 md:overflow-y-auto md:p-12 md:p-6">{children}</div>
    </div>
  );
}
