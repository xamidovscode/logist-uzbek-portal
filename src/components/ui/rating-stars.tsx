import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  rating: number; // 0-5, supports decimals like 4.5
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({ 
  rating, 
  size = 'md', 
  showValue = false,
  className 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const renderStar = (index: number) => {
    const filled = rating >= index + 1;
    const halfFilled = rating > index && rating < index + 1;
    
    return (
      <div key={index} className="relative">
        <Star 
          className={cn(
            sizeClasses[size],
            "text-muted-foreground"
          )}
        />
        {(filled || halfFilled) && (
          <Star 
            className={cn(
              sizeClasses[size],
              "absolute top-0 left-0 text-warning fill-warning",
              halfFilled && "clip-path-half"
            )}
            style={halfFilled ? {
              clipPath: `polygon(0 0, ${(rating - index) * 100}% 0, ${(rating - index) * 100}% 100%, 0 100%)`
            } : undefined}
          />
        )}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[0, 1, 2, 3, 4].map(renderStar)}
      </div>
      {showValue && (
        <span className="text-sm text-muted-foreground ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};