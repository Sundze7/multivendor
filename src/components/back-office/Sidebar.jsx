"use client";
import {
  ExternalLink,
  LayoutGrid,
  ListOrdered,
  LogOut,
  Settings,
  Slack,
  Tractor,
  User,
  User2,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const sideBarLinks = [
    {
      title: "Customers",
      icon: User,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: Tractor,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: ListOrdered,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User2,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  return (
    <div className="dark:bg-slate-700 bg-slate-100  space-y-5 w-64 h-screen dark:text-slate-100 text-slate-800 fixed left-0 top-0 shadow-md">
      <div className=" ml-8 px-6 py-4 ">
        <Link href="" className="mb-6 text-4xl font-bold">
          Logo
        </Link>
      </div>
      <div className="space-y-3 flex flex-col">
        <Link
          href="/dashboard"
          className={
            pathname == "/dashboard"
              ? "flex space-x-3 px-6 py-2 border-l-8 border-lime-400 text-lime-500"
              : "flex space-x-3 px-6 py-2   "
          }
        >
          <LayoutGrid />
          <span className="">Dashboard</span>
        </Link>

        <button className="flex space-x-3 px-6 py-2 border-l-4 ">
          <Slack />
          <span className="">Catalogue</span>
        </button>
        {sideBarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex space-x-3 px-6 py-2 border-l-8 border-lime-400 text-lime-500"
                  : "flex space-x-3 px-6 py-2  "
              }
            >
              <Icon />
              <span className="">{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex space-x-3 px-6 py-2 bg-lime-600 rounded items-center">
            <LogOut />
            <span className=""> Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
