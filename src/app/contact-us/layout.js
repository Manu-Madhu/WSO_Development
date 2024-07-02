import UserNav from "@/components/User/UserNav";
import UserFooter from "@/components/User/footer/UserFooter";

export const metadata = {
    title: "WSO",
    description: "World Spice Organization (WSO)",
};

export default function Layout({ children }) {
    return (
        <>
            <div className="w-full bg-white">
                <UserNav />
            </div>
            <div>
                {children}
            </div>
            <div>
                <UserFooter />
            </div>
        </>
    );
}
