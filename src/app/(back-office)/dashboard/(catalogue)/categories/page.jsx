import PageHeader from "@/components/back-office/PageHeader";

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

      <h2>Categories</h2>
    </div>
  );
}
