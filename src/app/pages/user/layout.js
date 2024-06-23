import UserNav from "@/components/User/UserNav";

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
                {children}
            </div>
            <div> </div>
        </body>
    )
}
