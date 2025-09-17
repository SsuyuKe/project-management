'use client';

import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import SidebarWorkspaces from './sidebar-workspaces';
import SidebarHeader from './sidebar-header';
import SidebarNav from './sidebar-nav';
import SidebarProjects from './sidebar-projects';
import { Separator } from '../ui/separator';
import SidebarFooter from './sidebar-footer';

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarWorkspaces />
        <Separator />
        <SidebarNav />
        <Separator />
        <SidebarProjects />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
