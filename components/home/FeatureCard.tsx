import { Card, CardContent } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <Card
      className={cn(
        "group animate-fade-in border-paxillin-mist/40 bg-white transition-shadow duration-300",
        "hover:shadow-card"
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-8">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-paxillin-mist/50 bg-paxillin-parchment/50">
            <Icon className="h-8 w-8 text-paxillin-sage" strokeWidth={1.75} />
          </div>
        </div>

        <h3 className="mb-4 text-center font-heading text-xl font-semibold text-paxillin-secondary">
          {title}
        </h3>

        <p className="mx-auto max-w-xs text-center text-base leading-relaxed text-paxillin-ink/70">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
