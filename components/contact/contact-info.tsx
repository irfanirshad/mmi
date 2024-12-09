import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email
          </h3>
          <p className="text-muted-foreground">contact@mmirshad.com</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Phone
          </h3>
          <p className="text-muted-foreground">+1 (555) 123-4567</p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Office
          </h3>
          <p className="text-muted-foreground">
            123 Business Avenue
            <br />
            Suite 456
            <br />
            New York, NY 10001
          </p>
        </div>
      </CardContent>
    </Card>
  );
}