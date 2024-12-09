import { cn } from "@/lib/utils";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex gap-8">
          <div className="flex-none w-24 text-2xl font-bold text-primary">
            {item.year}
          </div>
          <div className="relative pb-8 last:pb-0">
            <div className="absolute left-0 top-0 -ml-[17px] h-full w-[2px] bg-border">
              <div className="absolute left-1/2 top-[6px] h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />
            </div>
            <div className="pl-8">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}