import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <Card
      className="group  transition-all duration-500 transform  border-2 bg-white/70 backdrop-blur-sm animate-fade-in border-pexilllin-primary rounded-lg"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-8">
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-6  transition-transform duration-300 mx-auto`}
        >
           <img src={Icon} alt={title} className="h-8 w-8" />
        </div>

        <h3 className="text-xl font-bold mb-4 text-center text-pexilllin-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 px-2  leading-relaxed text-center text-base max-w-xs mx-auto">
          {description}
        </p>

        <div className="mt-6 w-12 h-1 bg-pexilllin-primary rounded-full opacity-0  transition-opacity duration-300"></div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
