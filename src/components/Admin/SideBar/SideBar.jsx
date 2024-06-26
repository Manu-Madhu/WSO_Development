'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiHome, FiCheckSquare } from "react-icons/fi";
import { MdOutlineEqualizer } from "react-icons/md";
import { ImStack } from "react-icons/im";
import { GrFlag } from "react-icons/gr";
import { usePathname } from 'next/navigation';
import { RxExit } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

const menuItems = [
    { href: "/pages/admin/news", icon: FiHome, label: "Latest News" },
    { href: "/pages/admin/members", icon: MdOutlineEqualizer, label: "Manage Members" },
    { href: "/pages/admin/publications", icon: ImStack, label: "Publications" },
    { href: "/pages/admin/newsletter", icon: FiCheckSquare, label: "Newsletter" },
    { href: "/pages/admin/events", icon: GrFlag, label: "Events" },
];

function SideBar() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        menuItems.forEach((item, index) => {
            if (pathname.includes(item.href)) {
                setSelectedItem(index);
            }
        });
    }, [pathname]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex">
            <div className="md:hidden flex bg-white  p-4 text-black">
                <GiHamburgerMenu size={24} onClick={toggleSidebar} className="cursor-pointer" />
            </div>
            <div className={`fixed max-w-fit inset-0 z-40 md:relative transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out bg-white p-6 min-h-screen border-r border-gray-400`}>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-5">
                        <h1 className="font-[Clash Display] text-xl font-extrabold text-green-900">
                            WSO
                        </h1>
                        <div className="flex items-center border border-gray-500 rounded-md mt-3">
                            <CiSearch className="ml-2 text-gray-950" size={22} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="py-2 px-4 rounded-md outline-none text-black placeholder:text-gray-800 placeholder:text-sm"
                                aria-label="Search"
                            />
                        </div>
                        <ul className="gap-y-1 flex flex-col">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={`p-2 rounded-md ${selectedItem === index ? "bg-[#f4f6f7]" : ""}`}
                                >
                                    <Link href={item.href}>
                                        <span className="flex text-black items-center font-semibold gap-x-3">
                                            <item.icon className={`text-[#667085] ${selectedItem === index ? "bg-[#f4f6f7]" : ""}`} size={23} />
                                            <h1>{item.label}</h1>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-start justify-between text-black border-t border-gray-400 pt-5">
                        <div className="flex items-center gap-3">
                            <img
                                className="w-12 h-12 rounded-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbLonevQIqBWh2Yh2C1BACaaoMhoJIKHedg&s"
                                alt="Profile picture"
                            />
                            <div className="flex flex-col justify-center">
                                <h1 className="font-semibold">Olivia Rhye</h1>
                                <p>hafis@qmark.com</p>
                            </div>
                        </div>
                        <RxExit size={22} className="text-gray-900" />
                    </div>
                </div>
            </div>
            {sidebarOpen && (
                <div className="fixed inset-0 z-30 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>
            )}
        </div>
    );
}

export default SideBar;
