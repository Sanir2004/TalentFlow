import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  Users, 
  ClipboardCheck, 
  BarChart3,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Calendar,
  Target,
  Activity,
  Bell,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Heart,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [stats, setStats] = useState({
    totalJobs: 12,
    activeCandidates: 45,
    completedAssessments: 28,
    hiringGoal: 75
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: "job",
      title: "Senior Frontend Developer",
      action: "New application received",
      time: "2 minutes ago",
      icon: Briefcase,
      color: "text-blue-600"
    },
    {
      id: 2,
      type: "candidate",
      title: "Sarah Johnson",
      action: "Moved to Technical Interview",
      time: "15 minutes ago",
      icon: Users,
      color: "text-green-600"
    },
    {
      id: 3,
      type: "assessment",
      title: "React Skills Test",
      action: "Assessment completed",
      time: "1 hour ago",
      icon: ClipboardCheck,
      color: "text-purple-600"
    },
    {
      id: 4,
      type: "analytics",
      title: "Weekly Report",
      action: "New insights available",
      time: "3 hours ago",
      icon: BarChart3,
      color: "text-orange-600"
    }
  ]);

  const [quickActions] = useState([
    {
      title: "Create Job",
      description: "Post a new job opening",
      icon: Plus,
      href: "/jobs",
      color: "bg-blue-500"
    },
    {
      title: "Import Candidates",
      description: "Bulk import candidates",
      icon: Users,
      href: "/candidates",
      color: "bg-green-500"
    },
    {
      title: "Create Assessment",
      description: "Build a new assessment",
      icon: ClipboardCheck,
      href: "/assessments",
      color: "bg-purple-500"
    },
    {
      title: "View Analytics",
      description: "Check hiring metrics",
      icon: BarChart3,
      href: "/analytics",
      color: "bg-orange-500"
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Briefcase,
      title: "Job Management",
      description: "Create, edit, and manage job postings with drag-and-drop reordering",
      href: "/jobs"
    },
    {
      icon: Users,
      title: "Candidate Tracking", 
      description: "Track candidates through your hiring pipeline with kanban boards",
      href: "/candidates"
    },
    {
      icon: ClipboardCheck,
      title: "Assessments",
      description: "Build custom assessments with various question types and validation",
      href: "/assessments"
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Monitor hiring metrics and performance with detailed insights",
      href: "/analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm">
                <Zap className="w-4 h-4" />
                <span>Streamline Your Hiring Process</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Welcome to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  TalentFlow
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive mini hiring platform that helps HR teams manage jobs, 
                track candidates, and conduct assessments with ease.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-hover shadow-medium">
                <Link to="/jobs">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/analytics">
                  View Analytics
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Stats Overview */}
          <div className="lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalJobs}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+2</span> from last week
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Candidates</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.activeCandidates}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+12</span> from last week
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Assessments Completed</CardTitle>
                  <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.completedAssessments}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+8</span> from last week
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Hiring Goal Progress</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.hiringGoal}%</div>
                  <Progress value={stats.hiringGoal} className="mt-2" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.title}
                      asChild
                      variant="ghost"
                      className="w-full justify-start h-auto p-3 hover:bg-muted/50"
                    >
                      <Link to={action.href}>
                        <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center mr-3`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-sm text-muted-foreground">{action.description}</div>
                        </div>
                      </Link>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>

            {/* Live Clock */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Current Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {currentTime.toLocaleTimeString()}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {currentTime.toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center ${activity.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-sm text-muted-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-200">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800">New Candidate Application</p>
                    <p className="text-sm text-green-600">Sarah Johnson applied for Senior Frontend Developer</p>
                    <p className="text-xs text-green-500 mt-1">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800">Assessment Reminder</p>
                    <p className="text-sm text-blue-600">3 candidates have pending assessments</p>
                    <p className="text-xs text-blue-500 mt-1">1 hour ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-orange-800">Weekly Report Ready</p>
                    <p className="text-sm text-orange-600">Your hiring analytics report is available</p>
                    <p className="text-xs text-orange-500 mt-1">3 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything you need to hire better
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to make your hiring process efficient and effective
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <Card 
                key={feature.title} 
                className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                  <Button asChild variant="ghost" size="sm" className="group-hover:bg-primary/5">
                    <Link to={feature.href}>
                      Explore
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">TalentFlow</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Streamline your hiring process with our comprehensive talent management platform. 
                Find, assess, and hire the best candidates efficiently.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/jobs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Job Management
                  </Link>
                </li>
                <li>
                  <Link to="/candidates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Candidate Tracking
                  </Link>
                </li>
                <li>
                  <Link to="/assessments" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Assessments
                  </Link>
                </li>
                <li>
                  <Link to="/analytics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                    API Documentation
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            {/* Support & Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
              
              <div className="space-y-2 pt-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@talentflow.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-muted">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-sm text-muted-foreground">
                  © 2024 TalentFlow. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>for HR teams worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
