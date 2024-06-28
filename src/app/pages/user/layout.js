import UserNav from "@/components/User/UserNav";
import UserFooter from "@/components/User/footer/UserFooter";
import { ToastContainer } from "react-toastify";

export const metadata = {
    title: "WSO",
    description: "World Spice Organization (WSO)",
};


export default function Layout({ children }) {
    return (
        <body>
            <div className="w-full bg-white">
                <UserNav />
            </div>
            <div>
                <ToastContainer/>
                {children}
            </div>
            <div>
                <UserFooter />
            </div>
        </body>
    )
}
