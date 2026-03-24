import { cn } from '@/lib/utils';

interface StatsCardProps {
  value: string | number;
  label: string;
  variant?: 'default' | 'alert' | 'warning' | 'success';
}

export function StatsCard({ value, label, variant = 'default' }: StatsCardProps) {
  const variants = {
    default: 'bg-white/15 border-white/20',
    alert: 'bg-[#ff3b30]/15 border-[#ff3b30]/30 animate-pulse',
    warning: 'bg-[#ff9500]/15 border-[#ff9500]/30',
    success: 'bg-[#34c759]/15 border-[#34c759]/30',
  };

  return (
    <div className={cn(
      'rounded-2xl p-4 border backdrop-blur-sm',
      variants[variant]
    )}>
      <div className="text-center">
        <div className="text-2xl lg:text-3xl font-bold text-white">{value}</div>
        <div className="text-xs lg:text-sm text-white/70 mt-1">{label}</div>
      </div>
    </div>
  );
}

interface SimpleStatsCardProps {
  value: string | number;
  label: string;
  trend?: 'up' | 'down' | 'neutral';
}

export function SimpleStatsCard({ value, label, trend = 'neutral' }: SimpleStatsCardProps) {
  const trendColors = {
    up: 'text-[#34c759]',
    down: 'text-[#ff3b30]',
    neutral: 'text-gray-900',
  };

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-5 border border-black/5">
      <div className={cn('text-2xl lg:text-3xl font-bold', trendColors[trend])}>
        {value}
      </div>
      <div className="text-sm text-gray-500 mt-1">{label}</div>
    </div>
  );
}
