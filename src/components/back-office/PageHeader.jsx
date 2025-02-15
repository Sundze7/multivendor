import Heading from "@/components/back-office/Heading";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function PageHeader({ heading, href, linkTitle }) {
  return (
    <div className="flex justify-between">
      <Heading title={heading} />
      <Link
        href={href}
        className="text-white bg-lime-600 hover:bg-lime-600/50 focus:ring-4 focus:outline-none rounded-lg text-base font-medium px-5 py-3 text-center inline-flex items-center dark:focus:ring-lime-600/55 mx-2 space-x-3"
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
