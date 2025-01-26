import NavBar from "@/components/back-office/NavBar";
import Sidebar from "@/components/back-office/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex ">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* header */}
        <NavBar />
        <main className="ml-60 mt-16 p-8 dark:bg-slate-900 bg-slate-100 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
      {/* Main body */}
    </div>
  );
}
