import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, FileText, Clock, Users, Edit, Eye, BarChart3, CheckCircle, XCircle } from "lucide-react";

// Mock data
const mockAssessments = [
  {
    id: "1",
    jobTitle: "Senior Frontend Developer",
    title: "React & TypeScript Skills Assessment",
    questions: 12,
    duration: 45,
    responses: 8,
    status: "active" as const,
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    jobTitle: "Product Manager", 
    title: "Product Strategy & Analytics",
    questions: 15,
    duration: 60,
    responses: 5,
    status: "active" as const,
    createdAt: "2024-01-12"
  },
  {
    id: "3",
    jobTitle: "UX Designer",
    title: "Design Process & User Research",
    questions: 10,
    duration: 30,
    responses: 12,
    status: "draft" as const,
    createdAt: "2024-01-10"
  }
];

const Assessments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "draft">("all");
  const [assessments, setAssessments] = useState(mockAssessments);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [isResultsDialogOpen, setIsResultsDialogOpen] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState<typeof mockAssessments[0] | null>(null);
  const [newAssessment, setNewAssessment] = useState({
    jobTitle: "",
    title: "",
    questions: "",
    duration: "",
    description: "",
    status: "draft" as "active" | "draft"
  });

  const filteredAssessments = assessments.filter(assessment => {
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || assessment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleCreateAssessment = () => {
    if (!newAssessment.jobTitle || !newAssessment.title || !newAssessment.questions || !newAssessment.duration) {
      alert("Please fill in all required fields");
      return;
    }

    const assessment = {
      id: (assessments.length + 1).toString(),
      jobTitle: newAssessment.jobTitle,
      title: newAssessment.title,
      questions: parseInt(newAssessment.questions),
      duration: parseInt(newAssessment.duration),
      responses: 0,
      status: newAssessment.status,
      createdAt: new Date().toISOString().split('T')[0]
    };

    setAssessments([...assessments, assessment]);
    setNewAssessment({
      jobTitle: "",
      title: "",
      questions: "",
      duration: "",
      description: "",
      status: "draft"
    });
    setIsCreateDialogOpen(false);
  };

  const handleEditAssessment = (assessment: typeof mockAssessments[0]) => {
    setSelectedAssessment(assessment);
    setNewAssessment({
      jobTitle: assessment.jobTitle,
      title: assessment.title,
      questions: assessment.questions.toString(),
      duration: assessment.duration.toString(),
      description: "",
      status: assessment.status
    });
    setIsEditDialogOpen(true);
  };

  const handlePreviewAssessment = (assessment: typeof mockAssessments[0]) => {
    setSelectedAssessment(assessment);
    setIsPreviewDialogOpen(true);
  };

  const handleResultsAssessment = (assessment: typeof mockAssessments[0]) => {
    setSelectedAssessment(assessment);
    setIsResultsDialogOpen(true);
  };

  const handleUpdateAssessment = () => {
    if (!newAssessment.jobTitle || !newAssessment.title || !newAssessment.questions || !newAssessment.duration) {
      alert("Please fill in all required fields");
      return;
    }

    const updatedAssessment = {
      ...selectedAssessment!,
      jobTitle: newAssessment.jobTitle,
      title: newAssessment.title,
      questions: parseInt(newAssessment.questions),
      duration: parseInt(newAssessment.duration),
      status: newAssessment.status
    };

    setAssessments(assessments.map(assessment => 
      assessment.id === selectedAssessment!.id ? updatedAssessment : assessment
    ));
    setNewAssessment({
      jobTitle: "",
      title: "",
      questions: "",
      duration: "",
      description: "",
      status: "draft"
    });
    setIsEditDialogOpen(false);
    setSelectedAssessment(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Assessments</h1>
          <p className="text-muted-foreground">Create and manage job-specific assessments</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary-hover">
              <Plus className="w-4 h-4 mr-2" />
              Create Assessment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Create New Assessment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g. Senior Frontend Developer"
                    value={newAssessment.jobTitle}
                    onChange={(e) => setNewAssessment({...newAssessment, jobTitle: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Assessment Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g. React & TypeScript Skills Assessment"
                    value={newAssessment.title}
                    onChange={(e) => setNewAssessment({...newAssessment, title: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="questions">Number of Questions *</Label>
                  <Input
                    id="questions"
                    type="number"
                    placeholder="e.g. 15"
                    value={newAssessment.questions}
                    onChange={(e) => setNewAssessment({...newAssessment, questions: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (minutes) *</Label>
                  <Input
                    id="duration"
                    type="number"
                    placeholder="e.g. 60"
                    value={newAssessment.duration}
                    onChange={(e) => setNewAssessment({...newAssessment, duration: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the assessment content and objectives..."
                  value={newAssessment.description}
                  onChange={(e) => setNewAssessment({...newAssessment, description: e.target.value})}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={newAssessment.status} onValueChange={(value: "active" | "draft") => setNewAssessment({...newAssessment, status: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreateAssessment}>
                Create Assessment
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Edit Assessment Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Edit Assessment</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-jobTitle">Job Title *</Label>
                  <Input
                    id="edit-jobTitle"
                    placeholder="e.g. Senior Frontend Developer"
                    value={newAssessment.jobTitle}
                    onChange={(e) => setNewAssessment({...newAssessment, jobTitle: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Assessment Title *</Label>
                  <Input
                    id="edit-title"
                    placeholder="e.g. React & TypeScript Skills Assessment"
                    value={newAssessment.title}
                    onChange={(e) => setNewAssessment({...newAssessment, title: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-questions">Number of Questions *</Label>
                  <Input
                    id="edit-questions"
                    type="number"
                    placeholder="e.g. 15"
                    value={newAssessment.questions}
                    onChange={(e) => setNewAssessment({...newAssessment, questions: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-duration">Duration (minutes) *</Label>
                  <Input
                    id="edit-duration"
                    type="number"
                    placeholder="e.g. 60"
                    value={newAssessment.duration}
                    onChange={(e) => setNewAssessment({...newAssessment, duration: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  placeholder="Describe the assessment content and objectives..."
                  value={newAssessment.description}
                  onChange={(e) => setNewAssessment({...newAssessment, description: e.target.value})}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="edit-status">Status</Label>
                <Select value={newAssessment.status} onValueChange={(value: "active" | "draft") => setNewAssessment({...newAssessment, status: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdateAssessment}>
                Update Assessment
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Preview Assessment Dialog */}
        <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Assessment Preview</DialogTitle>
            </DialogHeader>
            {selectedAssessment && (
              <div className="space-y-6 py-4">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold">{selectedAssessment.title}</h3>
                  <p className="text-muted-foreground">{selectedAssessment.jobTitle}</p>
                  <div className="flex justify-center gap-4 mt-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {selectedAssessment.questions} Questions
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedAssessment.duration} Minutes
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {selectedAssessment.responses} Responses
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Sample Questions:</h4>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">1. What is the difference between let, const, and var in JavaScript?</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center gap-2">
                          <input type="radio" name="q1" className="w-4 h-4" />
                          <span className="text-sm">A) No difference</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="radio" name="q1" className="w-4 h-4" />
                          <span className="text-sm">B) Different scoping rules</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input type="radio" name="q1" className="w-4 h-4" />
                          <span className="text-sm">C) Different data types</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <p className="font-medium">2. Explain the concept of React hooks and provide an example.</p>
                      <div className="mt-2">
                        <Textarea placeholder="Your answer here..." rows={3} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setIsPreviewDialogOpen(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Results Assessment Dialog */}
        <Dialog open={isResultsDialogOpen} onOpenChange={setIsResultsDialogOpen}>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Assessment Results</DialogTitle>
            </DialogHeader>
            {selectedAssessment && (
              <div className="space-y-6 py-4">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold">{selectedAssessment.title}</h3>
                  <p className="text-muted-foreground">{selectedAssessment.jobTitle}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{selectedAssessment.responses}</div>
                    <div className="text-sm text-muted-foreground">Total Responses</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">85%</div>
                    <div className="text-sm text-muted-foreground">Average Score</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">12</div>
                    <div className="text-sm text-muted-foreground">Passed</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Recent Responses:</h4>
                  <div className="space-y-3">
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <p className="text-sm text-muted-foreground">sarah.johnson@email.com</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-600">92%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">2 days ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Michael Chen</p>
                          <p className="text-sm text-muted-foreground">michael.chen@email.com</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-green-600">78%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Emily Rodriguez</p>
                          <p className="text-sm text-muted-foreground">emily.rodriguez@email.com</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <XCircle className="w-4 h-4 text-red-600" />
                            <span className="font-medium text-red-600">45%</span>
                          </div>
                          <p className="text-sm text-muted-foreground">5 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setIsResultsDialogOpen(false)}>
                Close
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
            placeholder="Search assessments by title or job..."
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
            variant={statusFilter === "draft" ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter("draft")}
          >
            Draft
          </Button>
        </div>
      </div>

      {/* Assessments Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAssessments.map((assessment) => (
          <Card key={assessment.id} className="shadow-soft hover:shadow-medium transition-all duration-200 cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-lg font-semibold">{assessment.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{assessment.jobTitle}</p>
                </div>
                <Badge 
                  variant={assessment.status === "active" ? "default" : "secondary"}
                  className={assessment.status === "active" ? "bg-success text-success-foreground" : "bg-warning text-warning-foreground"}
                >
                  {assessment.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{assessment.questions}</div>
                  <div className="text-xs text-muted-foreground">Questions</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{assessment.duration}</div>
                  <div className="text-xs text-muted-foreground">Minutes</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center">
                    <Users className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{assessment.responses}</div>
                  <div className="text-xs text-muted-foreground">Responses</div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                Created {new Date(assessment.createdAt).toLocaleDateString()}
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleEditAssessment(assessment)}
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handlePreviewAssessment(assessment)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  Preview
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => handleResultsAssessment(assessment)}
                >
                  <BarChart3 className="w-4 h-4 mr-1" />
                  Results
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAssessments.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No assessments found</h3>
          <p className="text-muted-foreground">
            {searchTerm || statusFilter !== "all" 
              ? "Try adjusting your search or filters"
              : "Create your first assessment to evaluate candidates"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Assessments;