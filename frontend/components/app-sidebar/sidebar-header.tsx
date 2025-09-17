import Link from 'next/link';
import { Cherry } from 'lucide-react';
import { SidebarHeader, useSidebar } from '../ui/sidebar';

export default function Header() {
  const { open } = useSidebar();
  return (
    <SidebarHeader>
      <Link href="/" className="flex h-[50px] items-center justify-start w-full px-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <Cherry className="size-3" />
        </div>
        {open && (
          <h2 className="hidden md:flex ml-2 items-center gap-2 self-center font-medium">Cherry</h2>
        )}
      </Link>
    </SidebarHeader>
  );
}
