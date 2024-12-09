import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - M.M. Irshad",
  description: "Insights and articles about leadership, business growth, and professional development.",
};

const blogPosts = [
  {
    title: "5 Key Strategies for Effective Leadership in 2024",
    excerpt: "Discover the essential leadership strategies that will help you navigate the challenges of modern business.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    readTime: "5 min read",
    slug: "leadership-strategies-2024",
  },
  {
    title: "Building High-Performance Sales Teams",
    excerpt: "Learn how to develop and maintain a sales team that consistently exceeds targets and drives growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
    date: "March 10, 2024",
    readTime: "7 min read",
    slug: "high-performance-sales-teams",
  },
  {
    title: "The Future of Business Coaching",
    excerpt: "Explore how technology and changing workplace dynamics are reshaping business coaching.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    date: "March 5, 2024",
    readTime: "6 min read",
    slug: "future-of-business-coaching",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights and articles to help you grow personally and professionally
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary hover:underline"
              >
                Read More →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}