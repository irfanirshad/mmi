import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

// This would typically come from a CMS or database
const portfolioItems = {
  "global-leadership-summit-2023": {
    title: "Global Leadership Summit 2023",
    description: "Keynote speech on transformational leadership in the digital age. Explored emerging trends and practical strategies for modern leaders.",
    fullDescription: `
      <p>The Global Leadership Summit 2023 brought together industry leaders from around the world to discuss the future of leadership in an increasingly digital age. As a keynote speaker, I shared insights on:</p>
      
      <h2>Key Topics Covered</h2>
      <ul>
        <li>Digital transformation strategies for traditional businesses</li>
        <li>Building and maintaining high-performing remote teams</li>
        <li>Leveraging technology for improved leadership effectiveness</li>
        <li>Creating inclusive digital workspaces</li>
      </ul>

      <h2>Impact & Outcomes</h2>
      <p>The session resulted in numerous organizations implementing new digital leadership strategies, with reported improvements in team engagement and productivity.</p>
    `,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    date: "November 2023",
    location: "Dubai, UAE",
    audience: "500+ Executives",
    tags: ["Leadership", "Digital Transformation"],
    category: "speaking",
    testimonial: {
      text: "M.M. Irshad's keynote was the highlight of our summit. His insights on digital leadership were both practical and inspiring.",
      author: "Sarah Chen",
      role: "Event Organizer",
    },
  },
  "sales-excellence-workshop": {
    title: "Sales Excellence Workshop",
    description: "Intensive training program for high-performing sales teams, focusing on advanced negotiation techniques and customer psychology.",
    fullDescription: `
      <p>The Sales Excellence Workshop was designed to transform sales teams through advanced training in modern sales methodologies and customer psychology.</p>

      <h2>Workshop Components</h2>
      <ul>
        <li>Advanced negotiation techniques</li>
        <li>Customer psychology and behavior analysis</li>
        <li>Digital sales tools and CRM optimization</li>
        <li>Performance metrics and goal setting</li>
      </ul>

      <h2>Results</h2>
      <p>Participating teams reported an average 40% increase in sales performance within the first quarter following the workshop.</p>
    `,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
    date: "September 2023",
    location: "Singapore",
    audience: "200+ Sales Professionals",
    tags: ["Sales Training", "Performance"],
    category: "training",
    testimonial: {
      text: "The workshop transformed our sales approach. Our team's performance improved by 40% in the following quarter.",
      author: "Michael Wong",
      role: "Sales Director",
    },
  },
  "business-innovation-forum": {
    title: "Business Innovation Forum",
    description: "Panel discussion and workshop on fostering innovation in traditional industries through digital transformation.",
    fullDescription: `
      <p>The Business Innovation Forum focused on helping traditional businesses embrace digital transformation and foster innovation culture.</p>

      <h2>Forum Highlights</h2>
      <ul>
        <li>Digital transformation case studies</li>
        <li>Innovation frameworks for traditional industries</li>
        <li>Change management strategies</li>
        <li>Technology adoption roadmaps</li>
      </ul>

      <h2>Key Takeaways</h2>
      <p>Participants left with actionable strategies for implementing innovation initiatives in their organizations.</p>
    `,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
    date: "July 2023",
    location: "London, UK",
    audience: "300+ Business Leaders",
    tags: ["Innovation", "Strategy"],
    category: "speaking",
    testimonial: {
      text: "Irshad's insights on innovation were eye-opening. His practical approach to digital transformation is exactly what our industry needed.",
      author: "Emma Thompson",
      role: "Innovation Director",
    },
  },
  "executive-coaching-program": {
    title: "Executive Coaching Program",
    description: "Six-month intensive coaching program for C-suite executives focusing on strategic leadership and organizational transformation.",
    fullDescription: `
      <p>A comprehensive coaching program designed specifically for C-suite executives to enhance their strategic leadership capabilities.</p>

      <h2>Program Structure</h2>
      <ul>
        <li>One-on-one coaching sessions</li>
        <li>Strategic planning workshops</li>
        <li>Leadership assessment and development</li>
        <li>Change management guidance</li>
      </ul>

      <h2>Program Impact</h2>
      <p>Executives reported significant improvements in decision-making capabilities and team alignment.</p>
    `,
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    date: "Ongoing",
    location: "Virtual & In-person",
    audience: "Senior Executives",
    tags: ["Leadership", "Strategy", "Transformation"],
    category: "coaching",
    testimonial: {
      text: "The coaching program has been transformative for our leadership team. We've seen remarkable improvements in decision-making and team alignment.",
      author: "David Miller",
      role: "CEO",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(portfolioItems).map((id) => ({
    id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const item = portfolioItems[params.id as keyof typeof portfolioItems];
  
  if (!item) {
    return {
      title: "Portfolio Item Not Found",
      description: "The requested portfolio item could not be found.",
    };
  }

  return {
    title: `${item.title} - M.M. Irshad Portfolio`,
    description: item.description,
  };
}

export default function PortfolioItemPage({ params }: { params: { id: string } }) {
  const item = portfolioItems[params.id as keyof typeof portfolioItems];

  if (!item) {
    notFound();
  }

  return (
    <div className="container py-12">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/portfolio" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </Button>

      <div className="relative h-[400px] mb-8">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid gap-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            {item.date}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {item.location}
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            {item.audience}
          </div>
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: item.fullDescription }}
        />

        {item.testimonial && (
          <blockquote className="border-l-4 border-primary pl-6 my-8 italic">
            <p className="text-lg mb-4">{item.testimonial.text}</p>
            <footer className="text-sm">
              <strong>{item.testimonial.author}</strong> - {item.testimonial.role}
            </footer>
          </blockquote>
        )}
      </div>
    </div>
  );
}