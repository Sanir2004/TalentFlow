import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Search, Plus, MapPin, Calendar, Users, Briefcase } from "lucide-react";

// Mock data
const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "active" as const,
    applicants: 24,
    createdAt: "2024-01-15",
    tags: ["React", "TypeScript", "Remote OK"],
    description: "We are looking for a Senior Frontend Developer to join our engineering team. You will be responsible for building and maintaining our web applications using React and TypeScript."
  },
  {
    id: "2", 
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    status: "active" as const,
    applicants: 18,
    createdAt: "2024-01-12",
    tags: ["Strategy", "Analytics", "B2B"],
    description: "Join our product team as a Product Manager and help shape the future of our platform. You will work closely with engineering, design, and business teams."
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    status: "archived" as const,
    applicants: 31,
    createdAt: "2024-01-10",
    tags: ["Figma", "User Research", "B2C"],
    description: "We need a talented UX Designer to help us create amazing user experiences. You will work on user research, wireframing, and prototyping."
  }
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "archived">("all");
  const [jobs, setJobs] = useState(mockJobs);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof mockJobs[0] | null>(null);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    description: "",
    tags: ""
  });

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleCreateJob = () => {
    if (!newJob.title || !newJob.department || !newJob.location || !newJob.type) {
      alert("Please fill in all required fields");
      return;
    }

    const job = {
      id: (jobs.length + 1).toString(),
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      status: "active" as const,
      applicants: 0,
      createdAt: new Date().toISOString().split('T')[0],
      tags: newJob.tags ? newJob.tags.split(',').map(tag => tag.trim()) : [],
      description: newJob.description
    };

    setJobs([...jobs, job]);
    setNewJob({
      title: "",
      department: "",
      location: "",
      type: "",
      description: "",
      tags: ""
    });
    setIsCreateDialogOpen(false);
  };

  const handleViewJob = (job: typeof mockJobs[0]) => {
    setSelectedJob(job);
    setIsViewDialogOpen(true);
  };

  const handleEditJob = (job: typeof mockJobs[0]) => {
    setSelectedJob(job);
    setNewJob({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      description: job.description || "",
      tags: job.tags ? job.tags.join(', ') : ""
    });
    setIsEditDialogOpen(true);
  };

  const handleUpdateJob = () => {
    if (!newJob.title || !newJob.department || !newJob.location || !newJob.type) {
      alert("Please fill in all required fields");
      return;
    }

    const updatedJob = {
      ...selectedJob,
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      tags: newJob.tags ? newJob.tags.split(',').map(tag => tag.trim()) : [],
      description: newJob.description
    };

    setJobs(jobs.map(job => job.id === selectedJob.id ? updatedJob : job));
    setNewJob({
      title: "",
      department: "",
      location: "",
      type: "",
      description: "",
      tags: ""
    });
    setIsEditDialogOpen(false);
    setSelectedJob(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Jobs</h1>
          <p className="text-muted-foreground">Manage your job postings and track applications</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary-hover">
              <Plus className="w-4 h-4 mr-2" />
              Create Job
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Job</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g. Senior Frontend Developer"
                    value={newJob.title}
                    onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department *</Label>
                  <Input
                    id="department"
                    placeholder="e.g. Engineering"
                    value={newJob.department}
                    onChange={(e) => setNewJob({...newJob, department: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    placeholder="e.g. San Francisco, CA"
                    value={newJob.location}
                    onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Job Type *</Label>
                  <Select value={newJob.type} onValueChange={(value) => setNewJob({...newJob, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and requirements..."
                  value={newJob.description}
                  onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  placeholder="e.g. React, TypeScript, Remote OK"
                  value={newJob.tags}
                  onChange={(e) => setNewJob({...newJob, tags: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateJob}>
                Create Job
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* View Job Dialog */}
        <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Job Details</DialogTitle>
            </DialogHeader>
            {selectedJob && (
              <div className="space-y-6 py-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedJob.title}</h3>
                    <p className="text-muted-foreground">{selectedJob.department}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="font-medium">Location:</span>
                        <span className="ml-2">{selectedJob.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Briefcase className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="font-medium">Type:</span>
                        <span className="ml-2">{selectedJob.type}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="font-medium">Posted:</span>
                        <span className="ml-2">{new Date(selectedJob.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="font-medium">Applicants:</span>
                        <span className="ml-2">{selectedJob.applicants}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-medium">Status:</span>
                    <Badge 
                      variant={selectedJob.status === "active" ? "default" : "secondary"}
                      className={selectedJob.status === "active" ? "bg-success text-success-foreground" : ""}
                    >
                      {selectedJob.status}
                    </Badge>
                  </div>

                  {selectedJob.tags && selectedJob.tags.length > 0 && (
                    <div>
                      <span className="font-medium">Tags:</span>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedJob.tags.map((tag: string) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedJob.description && (
                    <div>
                      <span className="font-medium">Description:</span>
                      <p className="mt-2 text-sm text-muted-foreground whitespace-pre-wrap">
                        {selectedJob.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Job Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Job</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Job Title *</Label>
                  <Input
                    id="edit-title"
                    placeholder="e.g. Senior Frontend Developer"
                    value={newJob.title}
                    onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-department">Department *</Label>
                  <Input
                    id="edit-department"
                    placeholder="e.g. Engineering"
                    value={newJob.department}
                    onChange={(e) => setNewJob({...newJob, department: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-location">Location *</Label>
                  <Input
                    id="edit-location"
                    placeholder="e.g. San Francisco, CA"
                    value={newJob.location}
                    onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-type">Job Type *</Label>
                  <Select value={newJob.type} onValueChange={(value) => setNewJob({...newJob, type: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full-time">Full-time</SelectItem>
                      <SelectItem value="Part-time">Part-time</SelectItem>
                      <SelectItem value="Contract">Contract</SelectItem>
                      <SelectItem value="Internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-description">Job Description</Label>
                <Textarea
                  id="edit-description"
                  placeholder="Describe the role, responsibilities, and requirements..."
                  value={newJob.description}
                  onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-tags">Tags (comma-separated)</Label>
                <Input
                  id="edit-tags"
                  placeholder="e.g. React, TypeScript, Remote OK"
                  value={newJob.tags}
                  onChange={(e) => setNewJob({...newJob, tags: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateJob}>
                Update Job
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs by title or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={statusFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("all")}
          >
            All
          </Button>
          <Button
            variant={statusFilter === "active" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("active")}
          >
            Active
          </Button>
          <Button
            variant={statusFilter === "archived" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("archived")}
          >
            Archived
          </Button>
        </div>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((job) => (
          <Card key={job.id} className="shadow-soft hover:shadow-medium transition-all duration-200 cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{job.department}</p>
                </div>
                <Badge 
                  variant={job.status === "active" ? "default" : "secondary"}
                  className={job.status === "active" ? "bg-success text-success-foreground" : ""}
                >
                  {job.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Posted {new Date(job.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  {job.applicants} applicants
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {job.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleViewJob(job)}
                >
                  View
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleEditJob(job)}
                >
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No jobs found</h3>
          <p className="text-muted-foreground">
            {searchTerm || statusFilter !== "all" 
              ? "Try adjusting your search or filters"
              : "Get started by creating your first job posting"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Jobs;