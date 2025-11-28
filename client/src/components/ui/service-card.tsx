import { Link } from "wouter";
import { ArrowRight, Check, Brain, Cog, Link2, Users, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1000}
      className="h-full"
    >
      <motion.div 
        className="service-card h-full"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className={`w-16 h-16 ${colorMap[color]} rounded-lg flex items-center justify-center mb-6`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {IconComponent && <IconComponent className="text-white w-8 h-8" />}
        </motion.div>
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
        <ul className="space-y-2 text-sm text-slate-600 mb-6">
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Check className="text-success mr-2 h-4 w-4" />
              {feature}
            </motion.li>
          ))}
        </ul>
        <Link
          href={path}
          className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center group"
        >
          Learn More 
          <motion.span
            className="ml-1"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowRight className="h-4 w-4" />
          </motion.span>
        </Link>
      </motion.div>
    </Tilt>
  );
}
