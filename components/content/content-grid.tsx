"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Book, Video, Headphones, Image as ImageIcon, Quote, BookOpen } from "lucide-react";

const categories = [
  { value: "all", label: "All Content" },
  { value: "ebooks", label: "E-books" },
  { value: "videos", label: "Videos" },
  { value: "podcasts", label: "Podcasts" },
  { value: "wallpapers", label: "Mobile Wallpapers" },
  { value: "quotes", label: "Quotes" },
  { value: "books", label: "Books I've Read" },
];

const contentItems = [
  {
    type: "ebooks",
    title: "Leadership Mastery Guide",
    description: "A comprehensive guide to developing leadership skills",
    icon: Book,
    link: "/content/leadership-mastery.pdf",
  },
  {
    type: "videos",
    title: "Sales Excellence Workshop",
    description: "Recording of our most popular sales training session",
    icon: Video,
    link: "https://youtube.com/watch?v=example",
  },
  {
    type: "podcasts",
    title: "Business Growth Strategies",
    description: "Interview with leading industry experts",
    icon: Headphones,
    link: "https://spotify.com/episode/example",
  },
  {
    type: "wallpapers",
    title: "Success Mindset",
    description: "Inspirational wallpaper for your mobile device",
    icon: ImageIcon,
    link: "/content/wallpapers/success-mindset.jpg",
  },
  {
    type: "quotes",
    title: "Leadership Wisdom",
    description: "Collection of inspiring leadership quotes",
    icon: Quote,
    link: "#",
  },
  {
    type: "books",
    title: "Good to Great",
    description: "My review of Jim Collins' business classic",
    icon: BookOpen,
    link: "/content/book-reviews/good-to-great",
  },
];

export function ContentGrid() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredContent = contentItems.filter(
    (item) => selectedCategory === "all" || item.type === selectedCategory
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredContent.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <item.icon className="h-5 w-5" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{item.description}</p>
              <Button variant="secondary" className="w-full" asChild>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Access Content
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}