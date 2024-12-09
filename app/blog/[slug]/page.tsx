import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This would typically come from a CMS or database
const blogPosts = {
  "leadership-strategies-2024": {
    title: "5 Key Strategies for Effective Leadership in 2024",
    content: `
      <p>Leadership in 2024 requires a new approach that combines traditional wisdom with modern innovations. Here are five key strategies that every leader should consider:</p>

      <h2>1. Embrace Digital Transformation</h2>
      <p>In today's rapidly evolving business landscape, leaders must stay ahead of technological trends and understand how to leverage them effectively.</p>

      <h2>2. Foster Inclusive Leadership</h2>
      <p>Creating an inclusive environment where all team members feel valued and heard is crucial for success in modern organizations.</p>

      <h2>3. Prioritize Emotional Intelligence</h2>
      <p>Understanding and managing emotions - both your own and others' - is more important than ever in today's workplace.</p>

      <h2>4. Implement Agile Decision Making</h2>
      <p>The ability to make quick, informed decisions while remaining flexible to change is a crucial leadership skill.</p>

      <h2>5. Focus on Sustainable Practices</h2>
      <p>Leaders must consider the long-term environmental and social impact of their decisions.</p>
    `,
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
  },
  "high-performance-sales-teams": {
    title: "Building High-Performance Sales Teams",
    content: `
      <p>Creating and maintaining a high-performance sales team requires careful planning, consistent training, and effective leadership. Here's how to build a winning sales team:</p>

      <h2>Recruitment and Selection</h2>
      <p>The foundation of a great sales team starts with hiring the right people. Look for candidates with drive, resilience, and a growth mindset.</p>

      <h2>Training and Development</h2>
      <p>Implement a comprehensive training program that covers product knowledge, sales techniques, and customer relationship management.</p>

      <h2>Performance Metrics</h2>
      <p>Establish clear KPIs and regularly monitor performance to identify areas for improvement and recognize success.</p>

      <h2>Team Culture</h2>
      <p>Foster a positive, competitive environment that encourages collaboration and celebrates achievements.</p>
    `,
    date: "March 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
  },
  "future-of-business-coaching": {
    title: "The Future of Business Coaching",
    content: `
      <p>Business coaching is evolving rapidly with new technologies and changing workplace dynamics. Here's what to expect in the coming years:</p>

      <h2>Virtual Coaching Solutions</h2>
      <p>Digital platforms and AI-powered tools are making coaching more accessible and personalized than ever before.</p>

      <h2>Data-Driven Approaches</h2>
      <p>Analytics and performance metrics are becoming integral to measuring coaching effectiveness and ROI.</p>

      <h2>Hybrid Coaching Models</h2>
      <p>The future will see a blend of in-person and virtual coaching methods, offering flexibility and improved results.</p>

      <h2>Focus on Wellbeing</h2>
      <p>Mental health and work-life balance are becoming central themes in business coaching.</p>
    `,
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
  },
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} - M.M. Irshad`,
    description: post.content.substring(0, 155) + "...",
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-12">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </Button>

      <div className="relative h-[400px] mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}