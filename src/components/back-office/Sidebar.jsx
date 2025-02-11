"use client";
import {
  Box,
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

        <Collapsible>
          <CollapsibleTrigger className="px-6">
            <button className="flex space-x-6 items-center py-2 ">
              <div className="flex space-x-3 items-center">
                <Slack />
                <span className="">Catalogue</span>
              </div>
              <ChevronRightIcon />
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
