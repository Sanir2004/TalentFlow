import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  TrendingUp,
  BookOpen,
  Tag,
  Filter,
  Star
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "hiring", name: "Hiring Tips", count: 8 },
    { id: "technology", name: "Technology", count: 6 },
    { id: "hr", name: "HR Insights", count: 5 },
    { id: "product", name: "Product Updates", count: 5 }
  ];

  const blogPosts = [
    {
      id: "1",
      title: "The Future of AI in Talent Acquisition",
      excerpt: "How artificial intelligence is revolutionizing the way companies find and hire the best talent, with insights from industry leaders.",
      author: "Sarah Chen",
      authorRole: "CEO",
      publishDate: "2024-01-15",
      readTime: "5 min read",
      category: "technology",
      image: "",
      featured: true,
      tags: ["AI", "Talent Acquisition", "Future of Work"]
    },
    {
      id: "2",
      title: "10 Essential Interview Questions for Developers",
      excerpt: "Discover the most effective interview questions that help you identify top developer talent and avoid common hiring mistakes.",
      author: "Michael Rodriguez",
      authorRole: "CTO",
      publishDate: "2024-01-12",
      readTime: "7 min read",
      category: "hiring",
      image: "",
      featured: false,
      tags: ["Interview", "Developers", "Hiring Tips"]
    },
    {
      id: "3",
      title: "Building a Diverse and Inclusive Hiring Process",
      excerpt: "Learn how to create hiring practices that promote diversity and inclusion while finding the best candidates for your team.",
      author: "Emily Johnson",
      authorRole: "Head of Product",
      publishDate: "2024-01-10",
      readTime: "6 min read",
      category: "hr",
      image: "",
      featured: false,
      tags: ["Diversity", "Inclusion", "Hiring Process"]
    },
    {
      id: "4",
      title: "New Features: Advanced Candidate Analytics",
      excerpt: "Introducing powerful new analytics features that give you deeper insights into your hiring process and candidate performance.",
      author: "David Kim",
      authorRole: "Head of Engineering",
      publishDate: "2024-01-08",
      readTime: "4 min read",
      category: "product",
      image: "",
      featured: true,
      tags: ["Product Update", "Analytics", "Features"]
    },
    {
      id: "5",
      title: "Remote Hiring Best Practices",
      excerpt: "Essential strategies for conducting effective remote interviews and building strong remote teams from day one.",
      author: "Sarah Chen",
      authorRole: "CEO",
      publishDate: "2024-01-05",
      readTime: "8 min read",
      category: "hiring",
      image: "",
      featured: false,
      tags: ["Remote Work", "Hiring", "Best Practices"]
    },
    {
      id: "6",
      title: "The Psychology of Candidate Experience",
      excerpt: "Understanding how candidate experience impacts your employer brand and how to create positive interactions throughout the hiring process.",
      author: "Emily Johnson",
      authorRole: "Head of Product",
      publishDate: "2024-01-03",
      readTime: "9 min read",
      category: "hr",
      image: "",
      featured: false,
      tags: ["Candidate Experience", "Psychology", "Employer Brand"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                TalentFlow Blog
              </Badge>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
                Insights on
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Talent Acquisition
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert insights, best practices, and the latest trends in talent acquisition, 
                hiring, and HR technology to help you build better teams.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.name}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      {selectedCategory === "all" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              Featured Articles
            </h2>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="p-0 h-auto">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {selectedCategory === "all" ? "All Articles" : `${categories.find(cat => cat.id === selectedCategory)?.name}`}
          </h2>
          <p className="text-muted-foreground">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {categories.find(cat => cat.id === post.category)?.name}
                  </Badge>
                  {post.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 2}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(post.publishDate).toLocaleDateString()}
                  </span>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="shadow-soft bg-primary/5 border-primary/20">
          <CardContent className="p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the latest articles, hiring tips, and product updates delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary-hover">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
