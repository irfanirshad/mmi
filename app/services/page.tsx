import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - M.M. Irshad",
  description: "Professional business coaching, sales training, and public speaking services to transform your organization.",
};

const services = [
  {
    title: "Business Coaching",
    description: "Transform your business with strategic guidance",
    price: "Starting at $500/session",
    features: [
      "One-on-one coaching sessions",
      "Business strategy development",
      "Performance optimization",
      "Leadership development",
      "Goal setting and tracking",
    ],
  },
  {
    title: "Sales Training",
    description: "Enhance your team's sales performance",
    price: "Custom pricing for teams",
    features: [
      "Sales process optimization",
      "Team training workshops",
      "Performance metrics",
      "Sales psychology",
      "Negotiation techniques",
    ],
  },
  {
    title: "Public Speaking",
    description: "Inspire and motivate your audience",
    price: "Contact for pricing",
    features: [
      "Keynote presentations",
      "Conference speeches",
      "Corporate events",
      "Motivational talks",
      "Interactive workshops",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Professional services designed to transform your business and empower your team
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <p className="text-muted-foreground">{service.description}</p>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-2xl font-bold">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full" asChild>
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}