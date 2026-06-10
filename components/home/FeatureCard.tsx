interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color?: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className="pax-card p-6 text-left animate-fade-in transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(25,63,99,0.10)]"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 rounded-xl bg-pax-sky flex items-center justify-center mb-4">
        <img src={icon} alt="" aria-hidden="true" className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-semibold mb-2 text-pax-ink">{title}</h3>

      <p className="text-sm text-pax-slate leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
