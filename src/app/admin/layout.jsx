import SideBar from "@/components/Admin/SideBar/SideBar";
import { AdminProvider } from "../Providers";

function Layout({ children }) {
  return (
    <div className="flex fixed w-full h-screen bg-white">
      <SideBar />
      <div className="w-full overflow-y-scroll">
        <div className="h-fit">
          <AdminProvider>{children}</AdminProvider>
        </div>
      </div>
    </div>
  );
}

export default Layout;
