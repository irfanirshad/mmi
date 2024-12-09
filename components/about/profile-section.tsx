import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function ProfileSection() {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative aspect-square">
        <Image
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
          alt="M.M. Irshad Profile"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">M.M. Irshad</h1>
        <p className="text-xl text-muted-foreground">
          Business Coach | Sales Trainer | Community Leader
        </p>
        <p className="text-lg leading-relaxed">
          With over 15 years of experience in business coaching and public speaking,
          I've dedicated my career to helping leaders and organizations unlock their
          full potential. My approach combines proven methodologies with
          personalized strategies to deliver transformative results.
        </p>
        <Button className="gap-2">
          <FileText className="w-4 h-4" />
          Download Biography
        </Button>
      </div>
    </div>
  );
}