import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="dark:bg-slate-700 bg-slate-100  space-y-5 w-60 h-screen dark:text-slate-100 text-slate-800 p-3 fixed left-0 top-0 shadow-md">
      <Link href="" className="mb-6">
        Logo
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link href="">Dashboard</Link>
        <Link href="">Catalogue</Link>
        <Link href="">Customers</Link>
        <Link href="">Markets</Link>
        <Link href="">Farmers</Link>
        <Link href="">Orders</Link>
        <Link href="">Staff</Link>
        <Link href="">Settings</Link>
        <Link href="">Oline Store</Link>
      </div>
    </div>
  );
}
