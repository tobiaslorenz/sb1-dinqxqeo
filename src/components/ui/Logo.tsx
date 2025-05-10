import React from 'react';
import { FileSearch } from 'lucide-react';

type LogoProps = {
  variant?: 'dark' | 'light';
};

const Logo = ({ variant = 'dark' }: LogoProps) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-gray-800';
  const iconColor = variant === 'light' ? '#ffffff' : '#2563eb';

  return (
    <div className="flex items-center">
      <div className="relative mr-2">
        <FileSearch size={28} color={iconColor} strokeWidth={1.5} />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
      <span className={`text-xl font-bold ${textColor}`}>SamDoq</span>
    </div>
  );
};

export default Logo;