import { AlignJustify, Bell, Sun, User } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-4 fixed top-0 left-60 right-0">
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3 ">
        <button>
          <Sun className="text-green-600" />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none  cursor-pointer"
        >
          <Bell className="text-green-600" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-4 dark:border-gray-900">
            20
          </div>
        </button>
        <button>
          {/* <User className="text-green-600" /> */}
          <Image
            src="/img/profile.jpg"
            alt="user_profile"
            width={200}
            height={200}
            className="w-8 h-8 rounded-full"
          />
        </button>
      </div>
    </div>
  );
}
