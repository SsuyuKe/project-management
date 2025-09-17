'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // 確保只在客戶端渲染
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative"
    >
      <Sun
        className={`absolute h-5 w-5 transition-transform duration-500 ${
          isDark ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
        } text-foreground`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-transform duration-500 ${
          isDark ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
        } text-foreground`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
