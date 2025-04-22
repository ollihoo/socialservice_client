import SideNav from '../ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col lg:flex-row overflow-x-hidden pt-2 overflow-y-scroll">
            <div className="w-full flex-none lg:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-2 md:p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}