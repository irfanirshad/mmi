import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Users, Target, Star, TrendingUp, Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[95vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80"
            alt="Business Leadership"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl space-y-8">
            <Badge className="mb-4" variant="secondary">
              Business Coach & Leadership Expert
            </Badge>
            <h1 className="text-5xl sm:text-7xl font-bold text-white leading-tight">
              Transform Your <span className="text-primary">Leadership</span> Journey
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Empowering leaders and organizations to achieve breakthrough results through
              expert coaching, training, and strategic guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Journey</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-muted/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Expert Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions to transform your business and empower your team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Business Coaching</h3>
                <p className="text-muted-foreground mb-6">
                  Personalized guidance to unlock your business potential and achieve sustainable growth.
                </p>
                <Button variant="secondary" className="group-hover:translate-x-2 transition-transform" asChild>
                  <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Sales Excellence</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your sales team with proven methodologies and performance strategies.
                </p>
                <Button variant="secondary" className="group-hover:translate-x-2 transition-transform" asChild>
                  <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden group">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Global Speaking</h3>
                <p className="text-muted-foreground mb-6">
                  Inspiring keynotes and workshops that drive organizational transformation.
                </p>
                <Button variant="secondary" className="group-hover:translate-x-2 transition-transform" asChild>
                  <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Speaking Events</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">15K+</div>
              <div className="text-primary-foreground/80">Leaders Trained</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">25+</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">98%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24">
        <div className="container">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="relative w-full md:w-1/3 aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                    alt="Client Testimonial"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-xl italic">
                    "M.M. Irshad's coaching transformed our leadership team's effectiveness.
                    His strategic insights and practical approach led to measurable improvements
                    in our organization's performance."
                  </blockquote>
                  <footer>
                    <div className="font-semibold">David Chen</div>
                    <div className="text-muted-foreground">CEO, Global Innovations Inc</div>
                  </footer>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards extraordinary results. Schedule a consultation
            to discuss your business goals and challenges.
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}