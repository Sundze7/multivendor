import {
  ExternalLink,
  Group,
  LayoutGrid,
  ListOrdered,
  Settings,
  Slack,
  Tractor,
  User,
  User2,
  UserIcon,
  Warehouse,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="dark:bg-slate-700 bg-slate-100  space-y-5 w-64 h-screen dark:text-slate-100 text-slate-800 fixed left-0 top-0 shadow-md">
      <div className=" ml-8 px-6 py-4 ">
        <Link href="" className="mb-6 text-4xl font-bold">
          Logo
        </Link>
      </div>
      <div className="space-y-3 flex flex-col">
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <LayoutGrid />
          <span className="">Dashboard</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <Slack />
          <span className="">Catalogue</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <User />
          <span className="">Customers</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <Warehouse />
          <span className="">Markets</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <Tractor />
          <span className="">Farmers</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <ListOrdered />
          <span className="">Orders</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <User2 />
          <span className="">Staff</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <Settings />
          <span className="">Settings</span>
        </Link>
        <Link
          href=""
          className="flex space-x-3 px-6 py-2 border-l-4 border-green-400 "
        >
          <ExternalLink />
          <span className="">Online Stores</span>
        </Link>
      </div>
    </div>
  );
}
