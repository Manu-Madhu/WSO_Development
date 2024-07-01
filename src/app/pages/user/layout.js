import UserNav from "@/components/User/UserNav";
import UserFooter from "@/components/User/footer/UserFooter";

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
            <div className="w-full relative">
                {children}
            </div>
            <div>
                <UserFooter />
            </div>
        </body>
    )
}
