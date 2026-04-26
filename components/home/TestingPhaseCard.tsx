
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

interface TestingPhaseCardProps {
  phase: string;
  title: string;
  description: string;
  features: string[];
  availability: string;
  timeline: string;
  isSelected: boolean;
  onSelect: () => void;
  delay?: number;
}

const TestingPhaseCard = ({ 
  phase, 
  title, 
  description, 
  features, 
  availability, 
  timeline, 
  isSelected, 
  onSelect, 
  delay = 0 
}: TestingPhaseCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
        isSelected 
          ? 'ring-2 ring-paxillin-secondary shadow-xl bg-gradient-to-br from-paxillin-parchment to-paxillin-mist/25' 
          : 'hover:shadow-lg bg-white/70 backdrop-blur-sm'
      }`}
      style={{ animationDelay: `${delay}s` }}
      onClick={onSelect}
    >
      <CardContent className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <Badge 
            variant={isSelected ? "default" : "secondary"}
            className={`${isSelected ? 'bg-paxillin-secondary text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {timeline}
          </Badge>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Features Included:</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700">Availability:</p>
            <p className="text-sm text-gray-600">{availability}</p>
          </div>
        </div>
        
        {isSelected && (
          <div className="p-4 rounded-lg border border-paxillin-mist/60 bg-paxillin-parchment/80">
            <p className="text-sm font-medium text-paxillin-secondary">
              ✨ Selected for registration
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TestingPhaseCard;
