import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Coffee,
  Laptop,
  Globe,
  BookOpen,
  Trophy
} from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const openPositions = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for a Senior Frontend Developer to join our engineering team and help build the future of talent acquisition.",
      requirements: [
        "5+ years of experience with React and TypeScript",
        "Strong understanding of modern frontend frameworks",
        "Experience with state management libraries",
        "Knowledge of testing frameworks (Jest, Cypress)",
        "Experience with CI/CD pipelines"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ]
    },
    {
      id: "2",
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our product team to help shape the future of our platform and drive product strategy.",
      requirements: [
        "3+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with user research and data analysis",
        "Excellent communication and collaboration skills",
        "Technical background preferred"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Remote work flexibility",
        "Professional development budget",
        "Unlimited PTO"
      ]
    },
    {
      id: "3",
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      experience: "4+ years",
      description: "Help us create beautiful, intuitive user experiences that make hiring easier for everyone.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma and design tools",
        "Strong portfolio demonstrating user-centered design",
        "Experience with user research and testing",
        "Knowledge of accessibility best practices"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Design tools and software budget",
        "Professional development opportunities",
        "Unlimited PTO"
      ]
    }
  ];

  const companyValues = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in flexible work arrangements and unlimited PTO to help you maintain a healthy work-life balance."
    },
    {
      icon: Zap,
      title: "Growth Opportunities",
      description: "Continuous learning and development opportunities with dedicated budgets for courses, conferences, and training."
    },
    {
      icon: Users,
      title: "Inclusive Culture",
      description: "We're committed to building a diverse and inclusive workplace where everyone feels valued and respected."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Regular recognition and rewards for outstanding performance and contributions to the team."
    }
  ];

  const perks = [
    { icon: Coffee, title: "Free Coffee & Snacks", description: "Unlimited coffee, tea, and healthy snacks" },
    { icon: Laptop, title: "Latest Equipment", description: "Top-of-the-line laptops and equipment" },
    { icon: Globe, title: "Remote Work", description: "Flexible remote work options" },
    { icon: BookOpen, title: "Learning Budget", description: "$2,000 annual learning budget" },
    { icon: Trophy, title: "Team Events", description: "Regular team building and social events" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Join Our Team
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Build the Future of
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Talent Acquisition
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're looking for passionate, talented individuals to join our mission of 
                revolutionizing how companies find and hire the best talent.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Work With Us</h2>
          <p className="text-lg text-muted-foreground">
            We're building more than just a product - we're building a culture
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value) => {
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

      {/* Perks & Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Perks & Benefits</h2>
          <p className="text-lg text-muted-foreground">
            We take care of our team with comprehensive benefits
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => {
            const Icon = perk.icon;
            return (
              <Card key={perk.title} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{perk.title}</h3>
                      <p className="text-sm text-muted-foreground">{perk.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Open Positions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Open Positions</h2>
          <p className="text-lg text-muted-foreground">
            Find your next opportunity with us
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((job) => (
            <Card key={job.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{job.department}</Badge>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              {selectedJob === job.id && (
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Job Description</h4>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="bg-primary hover:bg-primary-hover">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Apply for a Position</CardTitle>
            <p className="text-center text-muted-foreground">
              Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="position">Position of Interest</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a position" />
                </SelectTrigger>
                <SelectContent>
                  {openPositions.map((job) => (
                    <SelectItem key={job.id} value={job.id}>
                      {job.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="coverLetter">Cover Letter</Label>
              <Textarea 
                id="coverLetter" 
                placeholder="Tell us why you're interested in joining our team..."
                rows={4}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resume">Resume</Label>
              <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
            </div>
            
            <div className="flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Submit Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Careers;
