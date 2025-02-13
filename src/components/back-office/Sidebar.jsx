"use client";
import {
  Box,
  ChevronDown,
  ChevronRightIcon,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  ListOrdered,
  LogOut,
  Monitor,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  Tractor,
  User,
  User2,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export default function Sidebar({ isOpen }) {
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
  const catalogueLinks = [
    {
      title: "Products",
      icon: Box,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store sliders",
      icon: Monitor,
      href: "/dashboard/sliders",
    },
  ];
  const [openCaret, setOpenCaret] = useState(false);
  return (
    <div
      className={`z-40 transition-transform duration-300 fixed top-20 md:top-0 left-0 h-screen md:w-64 bg-slate-100 dark:bg-slate-700 shadow-md 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="flex justify-between items-center ml-8 px-6 py-4 ">
        <Link href="" className="mb-6 md:text-4xl text-2xl font-bold">
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

        <Collapsible>
          <CollapsibleTrigger
            className="px-6"
            onClick={() => setOpenCaret(!openCaret)}
          >
            <button className="flex space-x-6 items-center py-2 ">
              <div className="flex space-x-3 items-center cursor-pointer">
                <Slack />
                <span className="">Catalogue</span>
              </div>
              {openCaret ? <ChevronRightIcon /> : <ChevronDown />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className=" dark:bg-slate-800 mx-6 py-2 rounded-lg text-sm">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={
                    pathname == item.href
                      ? "flex space-x-3 px-6 py-1text-lime-500"
                      : "flex space-x-3 px-6 py-1 "
                  }
                >
                  <Icon className="text-sm" />
                  <span className="">{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

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
