import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You - M.M. Irshad",
  description: "Thank you for contacting M.M. Irshad. We'll get back to you soon.",
};

export default function ThankYouPage() {
  return (
    <div className="container py-24">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <CheckCircle className="w-16 h-16 text-primary mx-auto" />
        <h1 className="text-4xl font-bold">Thank You!</h1>
        <p className="text-xl text-muted-foreground">
          Your message has been received. We'll get back to you within 24-48 hours.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/content">Explore Resources</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}