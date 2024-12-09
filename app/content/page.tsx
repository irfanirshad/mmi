import { Metadata } from "next";
import { ContentGrid } from "@/components/content/content-grid";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Content Library - M.M. Irshad",
  description: "Access a wealth of resources including e-books, videos, podcasts, and more to enhance your leadership and business skills.",
};

export default function ContentPage() {
  return (
    <div className="container py-12 space-y-12">
      <SectionHeader
        title="Content Library"
        subtitle="Explore our collection of resources designed to help you grow personally and professionally"
      />
      <ContentGrid />
    </div>
  );
}