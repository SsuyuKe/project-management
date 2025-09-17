'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import ThemeToggle from './theme-toggle';

export function NavActions() {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="text-muted-foreground hidden font-medium md:inline-block">Share</div>
      <ThemeToggle />
    </div>
  );
}
