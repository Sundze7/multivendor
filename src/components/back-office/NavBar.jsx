import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  User,
  User2,
  X,
} from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwicherBtn from "./darkMode/ThemeSwicher";

export default function NavBar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-4 fixed top-0 left-60 right-0">
      {/* Icon */}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3 ">
        <ThemeSwicherBtn />
        {/* <button>
          <Sun className="text-green-600" />
        </button> */}

        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <button className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg focus:ring-4 focus:outline-none  cursor-pointer">
              <Bell className="text-green-600" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-1 end-4 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-2 py-4 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <div className="cursor-pointer flex items-center">
                <Image
                  src="/img/profile.jpg"
                  alt="user_profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full mr-1"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow sweet corn stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Jan 11 2025 : 13:00PM</p>
                  </div>
                </div>
                <button className="ml-1">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="cursor-pointer flex items-center">
                <Image
                  src="/img/profile.jpg"
                  alt="user_profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full mr-1"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow sweet corn stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Jan 11 2025 : 13:00PM</p>
                  </div>
                </div>
                <button className="ml-1">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="cursor-pointer flex items-center">
                <Image
                  src="/img/profile.jpg"
                  alt="user_profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full mr-1"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow sweet corn stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Jan 11 2025 : 13:00PM</p>
                  </div>
                </div>
                <button className="ml-1">
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <button className="cursor-pointer">
              {/* <User className="text-green-600" /> */}
              <Image
                src="/img/profile.jpg"
                alt="user_profile"
                width={200}
                height={200}
                className="w-8 h-8 rounded-full"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-2 py-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="cursor-pointer flex items-center">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="cursor-pointer flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edith Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="cursor-pointer flex items-center ">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
