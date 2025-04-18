
import {
  BookOpen,
  Home,
  Award,
  LineChart,
  Settings,
  Library
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter
} from "@/components/ui/sidebar";

export function ExplainifySidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-white/10 p-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-explainify-purple to-explainify-accent-light text-transparent bg-clip-text">
            Explainify
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex gap-3 py-3">
                  <a href="#" className="flex items-center">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex gap-3 py-3">
                  <a href="#" className="flex items-center">
                    <Library className="h-5 w-5" />
                    <span>Library</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex gap-3 py-3">
                  <a href="#" className="flex items-center">
                    <Award className="h-5 w-5" />
                    <span>Challenges</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex gap-3 py-3">
                  <a href="#" className="flex items-center">
                    <LineChart className="h-5 w-5" />
                    <span>Progress</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="flex gap-3 py-3">
                  <a href="#" className="flex items-center">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-white/10">
        <div className="p-2 text-xs text-white/40">
          © 2025 Explainify AI
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
