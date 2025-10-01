import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Mail, Phone, Calendar, MapPin, Upload, UserPlus, FileText, Eye, ArrowRight, Clock } from "lucide-react";

// Mock data
const mockCandidates = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    stage: "tech" as const,
    jobTitle: "Senior Frontend Developer",
    appliedAt: "2024-01-20",
    avatar: ""
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "michael.chen@email.com", 
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    stage: "screen" as const,
    jobTitle: "Product Manager",
    appliedAt: "2024-01-18",
    avatar: ""
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1 (555) 456-7890", 
    location: "Austin, TX",
    stage: "offer" as const,
    jobTitle: "UX Designer",
    appliedAt: "2024-01-15",
    avatar: ""
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@email.com",
    phone: "+1 (555) 234-5678",
    location: "Seattle, WA", 
    stage: "applied" as const,
    jobTitle: "Senior Frontend Developer",
    appliedAt: "2024-01-22",
    avatar: ""
  }
];

const stageColors = {
  applied: "bg-blue-100 text-blue-800",
  screen: "bg-yellow-100 text-yellow-800", 
  tech: "bg-purple-100 text-purple-800",
  offer: "bg-green-100 text-green-800",
  hired: "bg-emerald-100 text-emerald-800",
  rejected: "bg-red-100 text-red-800"
};

const stageLabels = {
  applied: "Applied",
  screen: "Screening", 
  tech: "Technical",
  offer: "Offer",
  hired: "Hired",
  rejected: "Rejected"
};

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState<string>("all");
  const [candidates, setCandidates] = useState(mockCandidates);
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);
  const [isViewProfileDialogOpen, setIsViewProfileDialogOpen] = useState(false);
  const [isMoveStageDialogOpen, setIsMoveStageDialogOpen] = useState(false);
  const [isScheduleInterviewDialogOpen, setIsScheduleInterviewDialogOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<typeof mockCandidates[0] | null>(null);
  const [newCandidate, setNewCandidate] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    jobTitle: "",
    stage: "applied" as "applied" | "screen" | "tech" | "offer" | "hired" | "rejected",
    notes: ""
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [interviewDetails, setInterviewDetails] = useState({
    date: "",
    time: "",
    type: "phone" as "phone" | "video" | "in-person",
    location: "",
    notes: ""
  });

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.jobTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === "all" || candidate.stage === stageFilter;
    
    return matchesSearch && matchesStage;
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      // In a real app, you would parse the CSV/Excel file here
      alert(`File "${file.name}" selected. In a real application, this would parse the file and import candidates.`);
    }
  };

  const handleAddCandidate = () => {
    if (!newCandidate.name || !newCandidate.email || !newCandidate.jobTitle) {
      alert("Please fill in all required fields");
      return;
    }

    const candidate = {
      id: (candidates.length + 1).toString(),
      name: newCandidate.name,
      email: newCandidate.email,
      phone: newCandidate.phone,
      location: newCandidate.location,
      stage: newCandidate.stage as "applied" | "screen" | "tech" | "offer" | "hired" | "rejected",
      jobTitle: newCandidate.jobTitle,
      appliedAt: new Date().toISOString().split('T')[0],
      avatar: ""
    };

    setCandidates([...candidates, candidate as typeof mockCandidates[0]]);
    setNewCandidate({
      name: "",
      email: "",
      phone: "",
      location: "",
      jobTitle: "",
      stage: "applied" as "applied" | "screen" | "tech" | "offer" | "hired" | "rejected",
      notes: ""
    });
    setIsImportDialogOpen(false);
  };

  const handleBulkImport = () => {
    if (!uploadedFile) {
      alert("Please select a file to import");
      return;
    }
    
    // In a real app, you would parse the file and add multiple candidates
    alert(`Bulk import from "${uploadedFile.name}" would be processed here. This would parse the file and add multiple candidates to the list.`);
    setIsImportDialogOpen(false);
  };

  const handleViewProfile = (candidate: typeof mockCandidates[0]) => {
    setSelectedCandidate(candidate);
    setIsViewProfileDialogOpen(true);
  };

  const handleMoveStage = (candidate: typeof mockCandidates[0]) => {
    setSelectedCandidate(candidate);
    setIsMoveStageDialogOpen(true);
  };

  const handleScheduleInterview = (candidate: typeof mockCandidates[0]) => {
    setSelectedCandidate(candidate);
    setIsScheduleInterviewDialogOpen(true);
  };

  const handleUpdateStage = (newStage: "applied" | "screen" | "tech" | "offer" | "hired" | "rejected") => {
    if (!selectedCandidate) return;

    setCandidates(candidates.map(candidate => 
      candidate.id === selectedCandidate.id 
        ? { ...candidate, stage: newStage as typeof candidate.stage }
        : candidate
    ));
    setIsMoveStageDialogOpen(false);
    setSelectedCandidate(null);
  };

  const handleScheduleInterviewSubmit = () => {
    if (!interviewDetails.date || !interviewDetails.time) {
      alert("Please fill in date and time");
      return;
    }

    // In a real app, this would create an interview record
    alert(`Interview scheduled for ${selectedCandidate?.name} on ${interviewDetails.date} at ${interviewDetails.time}`);
    
    setInterviewDetails({
      date: "",
      time: "",
      type: "phone",
      location: "",
      notes: ""
    });
    setIsScheduleInterviewDialogOpen(false);
    setSelectedCandidate(null);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Candidates</h1>
          <p className="text-muted-foreground">Manage candidates and track their progress</p>
        </div>
        <Dialog open={isImportDialogOpen} onOpenChange={setIsImportDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary-hover">
              Import Candidates
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Import Candidates</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="manual" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="manual" className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Manual Entry
                </TabsTrigger>
                <TabsTrigger value="file" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  File Upload
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="manual" className="space-y-4 py-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="e.g. John Doe"
                        value={newCandidate.name}
                        onChange={(e) => setNewCandidate({...newCandidate, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="e.g. john.doe@email.com"
                        value={newCandidate.email}
                        onChange={(e) => setNewCandidate({...newCandidate, email: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        placeholder="e.g. +1 (555) 123-4567"
                        value={newCandidate.phone}
                        onChange={(e) => setNewCandidate({...newCandidate, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        placeholder="e.g. San Francisco, CA"
                        value={newCandidate.location}
                        onChange={(e) => setNewCandidate({...newCandidate, location: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        placeholder="e.g. Senior Frontend Developer"
                        value={newCandidate.jobTitle}
                        onChange={(e) => setNewCandidate({...newCandidate, jobTitle: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stage">Initial Stage</Label>
                      <Select value={newCandidate.stage} onValueChange={(value: "applied" | "screen" | "tech" | "offer" | "hired" | "rejected") => setNewCandidate({...newCandidate, stage: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="applied">Applied</SelectItem>
                          <SelectItem value="screen">Screening</SelectItem>
                          <SelectItem value="tech">Technical</SelectItem>
                          <SelectItem value="offer">Offer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Additional notes about the candidate..."
                      value={newCandidate.notes}
                      onChange={(e) => setNewCandidate({...newCandidate, notes: e.target.value})}
                      rows={3}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsImportDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleAddCandidate}>
                    Add Candidate
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="file" className="space-y-4 py-4">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">Upload Candidate File</h3>
                      <p className="text-sm text-muted-foreground">
                        Upload a CSV or Excel file with candidate information
                      </p>
                      <div className="mt-4">
                        <input
                          type="file"
                          accept=".csv,.xlsx,.xls"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload"
                        />
                        <Label htmlFor="file-upload" className="cursor-pointer">
                          <Button variant="outline" asChild>
                            <span>Choose File</span>
                          </Button>
                        </Label>
                      </div>
                      {uploadedFile && (
                        <p className="text-sm text-green-600 mt-2">
                          Selected: {uploadedFile.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Expected CSV Format:</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>Required columns:</strong> name, email, jobTitle</p>
                      <p><strong>Optional columns:</strong> phone, location, stage, notes</p>
                      <p><strong>Example:</strong> John Doe, john@email.com, Senior Developer, +1-555-1234, San Francisco, applied</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setIsImportDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleBulkImport} disabled={!uploadedFile}>
                    Import Candidates
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>

        {/* View Profile Dialog */}
        <Dialog open={isViewProfileDialogOpen} onOpenChange={setIsViewProfileDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Candidate Profile</DialogTitle>
            </DialogHeader>
            {selectedCandidate && (
              <div className="space-y-6 py-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={selectedCandidate.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {getInitials(selectedCandidate.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-semibold">{selectedCandidate.name}</h3>
                    <p className="text-muted-foreground">{selectedCandidate.jobTitle}</p>
                    <Badge className={`mt-2 ${stageColors[selectedCandidate.stage]}`}>
                      {stageLabels[selectedCandidate.stage]}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{selectedCandidate.email}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{selectedCandidate.phone}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>{selectedCandidate.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Application Details</h4>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                          <span>Applied: {new Date(selectedCandidate.appliedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="font-medium">Current Stage:</span>
                          <Badge className={`ml-2 ${stageColors[selectedCandidate.stage]}`}>
                            {stageLabels[selectedCandidate.stage]}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-end">
              <Button variant="outline" onClick={() => setIsViewProfileDialogOpen(false)}>
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Move Stage Dialog */}
        <Dialog open={isMoveStageDialogOpen} onOpenChange={setIsMoveStageDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Move Candidate Stage</DialogTitle>
            </DialogHeader>
            {selectedCandidate && (
              <div className="space-y-4 py-4">
                <div className="text-center">
                  <Avatar className="w-12 h-12 mx-auto mb-3">
                    <AvatarImage src={selectedCandidate.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(selectedCandidate.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{selectedCandidate.name}</h3>
                  <p className="text-muted-foreground">{selectedCandidate.jobTitle}</p>
                  <div className="mt-2">
                    <span className="text-sm text-muted-foreground">Current Stage: </span>
                    <Badge className={stageColors[selectedCandidate.stage]}>
                      {stageLabels[selectedCandidate.stage]}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label>Move to Stage:</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(stageLabels).map(([stage, label]) => (
                      <Button
                        key={stage}
                        variant={selectedCandidate.stage === stage ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleUpdateStage(stage as "applied" | "screen" | "tech" | "offer" | "hired" | "rejected")}
                        disabled={selectedCandidate.stage === stage}
                        className="justify-start"
                      >
                        {label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsMoveStageDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Schedule Interview Dialog */}
        <Dialog open={isScheduleInterviewDialogOpen} onOpenChange={setIsScheduleInterviewDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Schedule Interview</DialogTitle>
            </DialogHeader>
            {selectedCandidate && (
              <div className="space-y-4 py-4">
                <div className="text-center">
                  <Avatar className="w-12 h-12 mx-auto mb-3">
                    <AvatarImage src={selectedCandidate.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(selectedCandidate.name)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{selectedCandidate.name}</h3>
                  <p className="text-muted-foreground">{selectedCandidate.jobTitle}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="interview-date">Date *</Label>
                      <Input
                        id="interview-date"
                        type="date"
                        value={interviewDetails.date}
                        onChange={(e) => setInterviewDetails({...interviewDetails, date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interview-time">Time *</Label>
                      <Input
                        id="interview-time"
                        type="time"
                        value={interviewDetails.time}
                        onChange={(e) => setInterviewDetails({...interviewDetails, time: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interview-type">Interview Type</Label>
                    <Select value={interviewDetails.type} onValueChange={(value: "phone" | "video" | "in-person") => setInterviewDetails({...interviewDetails, type: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone Interview</SelectItem>
                        <SelectItem value="video">Video Interview</SelectItem>
                        <SelectItem value="in-person">In-Person Interview</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {interviewDetails.type === "in-person" && (
                    <div className="space-y-2">
                      <Label htmlFor="interview-location">Location</Label>
                      <Input
                        id="interview-location"
                        placeholder="e.g. Office Address"
                        value={interviewDetails.location}
                        onChange={(e) => setInterviewDetails({...interviewDetails, location: e.target.value})}
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="interview-notes">Notes</Label>
                    <Textarea
                      id="interview-notes"
                      placeholder="Additional notes for the interview..."
                      value={interviewDetails.notes}
                      onChange={(e) => setInterviewDetails({...interviewDetails, notes: e.target.value})}
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsScheduleInterviewDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleScheduleInterviewSubmit}>
                Schedule Interview
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
            placeholder="Search candidates by name, email, or job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={stageFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setStageFilter("all")}
          >
            All
          </Button>
          {Object.entries(stageLabels).map(([stage, label]) => (
            <Button
              key={stage}
              variant={stageFilter === stage ? "default" : "outline"}
              size="sm"
              onClick={() => setStageFilter(stage)}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* Candidates List */}
      <div className="space-y-4">
        {filteredCandidates.map((candidate) => (
          <Card key={candidate.id} className="shadow-soft hover:shadow-medium transition-all duration-200 cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={candidate.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(candidate.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                    <p className="text-sm text-muted-foreground">Applied for {candidate.jobTitle}</p>
                  </div>
                </div>
                <Badge className={stageColors[candidate.stage]}>
                  {stageLabels[candidate.stage]}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  {candidate.email}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  {candidate.phone}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  {candidate.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Applied {new Date(candidate.appliedAt).toLocaleDateString()}
                </div>
              </div>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleViewProfile(candidate)}
                >
                  <Eye className="w-4 h-4 mr-1" />
                  View Profile
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleMoveStage(candidate)}
                >
                  <ArrowRight className="w-4 h-4 mr-1" />
                  Move Stage
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleScheduleInterview(candidate)}
                >
                  <Clock className="w-4 h-4 mr-1" />
                  Schedule Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCandidates.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">No candidates found</h3>
          <p className="text-muted-foreground">
            {searchTerm || stageFilter !== "all" 
              ? "Try adjusting your search or filters"
              : "Candidates will appear here as they apply to your jobs"
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Candidates;