import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Briefcase, 
  UserCheck, 
  Clock,
  TrendingUp,
  TrendingDown
} from "lucide-react";

const Analytics = () => {
  // Mock analytics data
  const stats = [
    {
      title: "Total Jobs",
      value: "24",
      change: "+3",
      changeType: "increase" as const,
      icon: Briefcase,
      description: "Active job postings"
    },
    {
      title: "Total Candidates", 
      value: "1,247",
      change: "+127",
      changeType: "increase" as const,
      icon: Users,
      description: "All time applications"
    },
    {
      title: "Hired This Month",
      value: "8",
      change: "-2",
      changeType: "decrease" as const,
      icon: UserCheck,
      description: "Successful placements"
    },
    {
      title: "Avg. Time to Hire",
      value: "18 days",
      change: "-3 days",
      changeType: "increase" as const,
      icon: Clock,
      description: "From application to offer"
    }
  ];

  const recentActivity = [
    {
      action: "New application received",
      candidate: "Sarah Johnson",
      job: "Senior Frontend Developer",
      timestamp: "2 hours ago"
    },
    {
      action: "Candidate moved to Technical stage",
      candidate: "Michael Chen", 
      job: "Product Manager",
      timestamp: "4 hours ago"
    },
    {
      action: "Job posted",
      candidate: null,
      job: "Backend Engineer",
      timestamp: "1 day ago"
    },
    {
      action: "Offer accepted",
      candidate: "Emily Rodriguez",
      job: "UX Designer", 
      timestamp: "2 days ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Track your hiring performance and metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const isIncrease = stat.changeType === "increase";
          
          return (
            <Card key={stat.title} className="shadow-soft">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="w-4 h-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  {isIncrease ? (
                    <TrendingUp className="w-3 h-3 text-success" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-destructive" />
                  )}
                  <span className={isIncrease ? "text-success" : "text-destructive"}>
                    {stat.change}
                  </span>
                  <span>from last month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Hiring Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { stage: "Applied", count: 247, percentage: 100 },
                { stage: "Screening", count: 128, percentage: 52 },
                { stage: "Technical", count: 64, percentage: 26 },
                { stage: "Offer", count: 18, percentage: 7 },
                { stage: "Hired", count: 8, percentage: 3 }
              ].map((item) => (
                <div key={item.stage} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.stage}</span>
                    <span className="text-muted-foreground">{item.count} ({item.percentage}%)</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div className="space-y-1 flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <div className="text-xs text-muted-foreground">
                      {activity.candidate && (
                        <span className="font-medium">{activity.candidate}</span>
                      )}
                      {activity.candidate && activity.job && " • "}
                      {activity.job}
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Candidate Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">15%</div>
              <div className="text-sm text-muted-foreground">Conversion Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;