import DesktopSidebar from "./desktop-sidebar";
import MobileFooter from "./mobile-footer";
import getCurrentUser from "@/app/actions/get-current-user";

export default async function Sidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
}
