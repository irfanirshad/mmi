import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { ReCaptchaProvider } from "@/components/contact/recaptcha-provider";

export const metadata: Metadata = {
  title: "Contact - M.M. Irshad",
  description: "Get in touch with M.M. Irshad for business coaching, speaking engagements, and training programs.",
};

export default function ContactPage() {
  return (
    <div className="container py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Get in touch to discuss how we can help transform your business
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ReCaptchaProvider>
          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <ContactForm />
            </CardContent>
          </Card>
        </ReCaptchaProvider>
        <ContactInfo />
      </div>
    </div>
  );
}