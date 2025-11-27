import AnimatedCounter from './animated-counter';

interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  icon?: string;
  gradient?: 'primary' | 'secondary' | 'accent' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export default function StatsCard({ 
  value, 
  label, 
  description, 
  icon,
  gradient = 'primary',
  size = 'md'
}: StatsCardProps) {
  const gradientClasses = {
    primary: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700',
    secondary: 'bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700',
    accent: 'bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700',
    success: 'bg-gradient-to-br from-green-500 via-green-600 to-green-700'
  };

  const sizeClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const textSizes = {
    sm: { value: 'text-2xl', label: 'text-sm' },
    md: { value: 'text-3xl', label: 'text-base' },
    lg: { value: 'text-4xl', label: 'text-lg' }
  };

  // Extract number from value for animation
  // Special handling for formats like "24/7"
  const is24_7Format = value === '24/7';
  const numericValue = is24_7Format ? 24 : parseInt(value.replace(/[^\d]/g, ''));
  const hasNumber = !isNaN(numericValue) && !is24_7Format;
  const suffix = value.replace(/[\d]/g, '');

  return (
    <div className={`${gradientClasses[gradient]} ${sizeClasses[size]} rounded-xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center`}>
      {icon && (
        <div className="mb-4">
          <i className={`${icon} text-3xl opacity-80`}></i>
        </div>
      )}
      
      <div className={`${textSizes[size].value} font-bold mb-2`}>
        {hasNumber ? (
          <AnimatedCounter 
            end={numericValue} 
            suffix={suffix}
            duration={2500}
          />
        ) : (
          value
        )}
      </div>
      
      <div className={`${textSizes[size].label} font-medium opacity-90`}>
        {label}
      </div>
      
      {description && (
        <div className="text-xs opacity-80 mt-2">
          {description}
        </div>
      )}
    </div>
  );
}