import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "",
      bio: "Former VP of Engineering at TechCorp with 15+ years in HR tech"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image: "",
      bio: "Full-stack engineer passionate about building scalable solutions"
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      image: "",
      bio: "Product strategist with expertise in user experience design"
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image: "",
      bio: "Engineering leader focused on performance and reliability"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "People First",
      description: "We believe that great companies are built by great people, and great people deserve great tools."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in talent acquisition and management."
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand the challenges of HR teams and build solutions that truly make their lives easier."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building tools that help companies worldwide find and hire the best talent."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to revolutionize hiring"
    },
    {
      year: "2021",
      title: "First 100 Customers",
      description: "Reached our first major milestone"
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M to accelerate growth"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 15 countries worldwide"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Launched AI-powered candidate matching"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                About TalentFlow
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Building the Future of
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Talent Acquisition
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're on a mission to make hiring more efficient, fair, and effective for companies worldwide. 
                Our platform empowers HR teams with the tools they need to find, assess, and hire the best talent.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To democratize access to top talent by providing HR teams with intelligent, 
                user-friendly tools that streamline the entire hiring process. We believe 
                that great companies are built by great people, and we're here to help 
                you find them.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the world's leading talent acquisition platform, where every 
                company can find the perfect candidate for every role, and every candidate 
                can find their dream job. We envision a future where hiring is seamless, 
                fair, and data-driven.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            The passionate people behind TalentFlow
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <Card key={member.name} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">
                  {member.role}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            Key milestones in our company's growth
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <Card className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <Badge variant="outline">{milestone.year}</Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2 px-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">By the Numbers</h2>
          <p className="text-lg text-muted-foreground">
            Our impact in the hiring world
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Companies Served</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Candidates Processed</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          <Card className="shadow-soft text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="shadow-soft bg-primary/5 border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of companies that trust TalentFlow to find and hire the best talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
