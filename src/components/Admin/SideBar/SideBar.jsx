'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiHome, FiCheckSquare } from "react-icons/fi";
import { MdOutlineEqualizer } from "react-icons/md";
import { ImStack } from "react-icons/im";
import { GrFlag } from "react-icons/gr";
import { usePathname } from 'next/navigation'

function SideBar() {
    const [selectedItem, setSelectedItem] = useState(null);
    const pathname = usePathname();
    useEffect(() => {
        console.log(pathname);
        menuItems.forEach((item, index) => {
            if (pathname.includes(item.href)) {
                setSelectedItem(index);
            }
        });
    }, [pathname]);

    const menuItems = [
        { href: "/pages/admin/news", icon: FiHome, label: "Latest News" },
        { href: "/pages/admin/dashboard", icon: MdOutlineEqualizer, label: "Manage Members" },
        { href: "/pages/admin/announcements", icon: ImStack, label: "Publications" },
        { href: "/pages/admin/announcements", icon: FiCheckSquare, label: "Newsletter" },
        { href: "/pages/admin/announcements", icon: GrFlag, label: "Events" },
    ];

    return (
        <div className="flex flex-col gap-5 bg-white p-6 h-screen">
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
                        className={`p-2 rounded-md ${selectedItem === index ? "bg-gray-200" : ""}`}
                    >
                        <Link href={item.href}>
                            <span className="flex text-black items-center font-semibold gap-x-3">
                                <item.icon className={`text-[#667085] ${selectedItem === index ? "bg-gray-200" : ""}`} size={23} />
                                <h1>{item.label}</h1>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;
