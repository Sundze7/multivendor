import PageHeader from "@/components/back-office/PageHeader";
import TableActions from "@/components/back-office/TableActions";

export default function page() {
  return (
    <div>
      {/* Hading */}
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />
      {/* Table  Actions */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />

      <div className="py-8">
        <h2>Categories</h2>
      </div>
    </div>
  );
}
