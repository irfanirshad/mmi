import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Dedicated to inspiring positive change and growth in others.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering measurable outcomes and lasting impact.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong partnerships to achieve shared success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Embracing new ideas and approaches to solve challenges.",
  },
];

export function ValuesSection() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {values.map((value, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <value.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}