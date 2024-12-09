import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio - M.M. Irshad",
  description: "Explore M.M. Irshad's speaking engagements, training sessions, and success stories.",
};

const categories = [
  { id: "all", label: "All Events" },
  { id: "speaking", label: "Speaking" },
  { id: "training", label: "Training" },
  { id: "coaching", label: "Coaching" },
];

const portfolioItems = [
  {
    id: "global-leadership-summit-2023",
    title: "Global Leadership Summit 2023",
    description: "Keynote speech on transformational leadership in the digital age. Explored emerging trends and practical strategies for modern leaders.",
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
  {
    id: "sales-excellence-workshop",
    title: "Sales Excellence Workshop",
    description: "Intensive training program for high-performing sales teams, focusing on advanced negotiation techniques and customer psychology.",
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
  {
    id: "business-innovation-forum",
    title: "Business Innovation Forum",
    description: "Panel discussion and workshop on fostering innovation in traditional industries through digital transformation.",
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
  {
    id: "executive-coaching-program",
    title: "Executive Coaching Program",
    description: "Six-month intensive coaching program for C-suite executives focusing on strategic leadership and organizational transformation.",
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
];

export default function PortfolioPage() {
  return (
    <div className="container py-12 space-y-12">
      <SectionHeader
        title="Portfolio"
        subtitle="Discover the impact of our speaking engagements and training programs across the globe"
      />

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid gap-8 md:grid-cols-2">
              {portfolioItems
                .filter(
                  (item) =>
                    category.id === "all" || item.category === category.id
                )
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden flex flex-col">
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="flex-1 p-6 space-y-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {item.date}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {item.audience}
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {item.testimonial && (
                        <blockquote className="border-l-2 pl-4 italic">
                          <p className="text-muted-foreground">
                            "{item.testimonial.text}"
                          </p>
                          <footer className="mt-2 text-sm">
                            <strong>{item.testimonial.author}</strong> -{" "}
                            {item.testimonial.role}
                          </footer>
                        </blockquote>
                      )}

                      <Button variant="secondary" className="w-full mt-4" asChild>
                        <Link href={`/portfolio/${item.id}`}>
                          <span>View Details</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}