import Heading from "@/components/back-office/Heading";
import LargeCards from "@/components/back-office/cards/LargeCards";
import SmallCards from "@/components/back-office/cards/SmallCards";

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      {/* large cards */}
      <LargeCards />
      {/* Small cards */}
      <SmallCards />
      {/* charts */}
      {/* recent order table */}
    </div>
  );
}
