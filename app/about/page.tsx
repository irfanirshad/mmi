import { Metadata } from "next";
import { ProfileSection } from "@/components/about/profile-section";
import { ValuesSection } from "@/components/about/values-section";
import { Timeline } from "@/components/ui/timeline";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "About M.M. Irshad - Business Coach & Public Speaker",
  description: "Learn about M.M. Irshad's journey, values, and mission in transforming leaders and organizations through professional coaching and training.",
};

const journey = [
  {
    year: "2008",
    title: "Started Professional Speaking Career",
    description: "Began journey as a motivational speaker, focusing on personal development and leadership.",
  },
  {
    year: "2012",
    title: "Founded Business Coaching Practice",
    description: "Established dedicated coaching practice to help organizations achieve breakthrough results.",
  },
  {
    year: "2015",
    title: "International Speaking Tours",
    description: "Expanded reach globally, conducting workshops and seminars across multiple countries.",
  },
  {
    year: "2018",
    title: "Published First Book",
    description: "Released 'Transform Your Team' - a comprehensive guide to leadership and organizational change.",
  },
  {
    year: "2020",
    title: "Launched Online Training Platform",
    description: "Adapted to global changes by creating digital learning experiences and virtual coaching programs.",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-24">
      <ProfileSection />
      
      <section>
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide our approach to transformation and growth"
        />
        <ValuesSection />
      </section>

      <section>
        <SectionHeader
          title="Professional Journey"
          subtitle="Key milestones in my career as a business coach and public speaker"
        />
        <Timeline items={journey} className="max-w-3xl mx-auto" />
      </section>
    </div>
  );
}