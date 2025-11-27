import { Link } from "wouter";
import { ArrowRight, Check, Brain, Cog, Link2, Users, Cpu, Rocket } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
  color: string;
  path: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  brain: Brain,
  cogs: Cog, 
  link: Link2,
  users: Users,
  microchip: Cpu,
  rocket: Rocket
};

const colorMap: Record<string, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  accent: "bg-accent",
  "blue-600": "bg-blue-600",
  "green-600": "bg-green-600",
  "purple-600": "bg-purple-600"
};

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  icon, 
  color, 
  path 
}: ServiceCardProps) {
  const IconComponent = iconMap[icon];
  
  return (
    <div className="service-card">
      <div className={`w-16 h-16 ${colorMap[color]} rounded-lg flex items-center justify-center mb-6`}>
        {IconComponent && <IconComponent className="text-white w-8 h-8" />}
      </div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <ul className="space-y-2 text-sm text-slate-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="text-success mr-2 h-4 w-4" />
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={path}
        className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
      >
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
