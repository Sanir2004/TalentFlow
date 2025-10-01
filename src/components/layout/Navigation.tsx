import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Users, 
  ClipboardCheck, 
  BarChart3 
} from "lucide-react";

const navItems = [
  { 
    label: "Jobs", 
    href: "/jobs", 
    icon: Briefcase 
  },
  { 
    label: "Candidates", 
    href: "/candidates", 
    icon: Users 
  },
  { 
    label: "Assessments", 
    href: "/assessments", 
    icon: ClipboardCheck 
  },
  { 
    label: "Analytics", 
    href: "/analytics", 
    icon: BarChart3 
  },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TF</span>
            </div>
            <span className="text-xl font-semibold text-foreground">TalentFlow</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname.startsWith(item.href);
              
              return (
                <Button
                  key={item.href}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2",
                    isActive && "bg-primary text-primary-foreground"
                  )}
                >
                  <Link to={item.href}>
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open menu</span>
              ☰
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};