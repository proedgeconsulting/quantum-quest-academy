
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Edit, PlusCircle } from "lucide-react";

export const CourseOverview = () => {
  const [filter, setFilter] = useState("all");
  
  // Mock data - would come from your database
  const courses = [
    { 
      id: "qb101", 
      title: "Quantum Basics", 
      enrollments: 458, 
      completionRate: 72, 
      avgRating: 4.8,
      status: "active"
    },
    { 
      id: "qc201", 
      title: "Quantum Circuits", 
      enrollments: 326, 
      completionRate: 65, 
      avgRating: 4.6,
      status: "active"
    },
    { 
      id: "qe301", 
      title: "Quantum Entanglement", 
      enrollments: 214, 
      completionRate: 58, 
      avgRating: 4.9,
      status: "active"
    },
    { 
      id: "qml401", 
      title: "Quantum Machine Learning", 
      enrollments: 189, 
      completionRate: 42, 
      avgRating: 4.5,
      status: "active"
    },
    { 
      id: "qec501", 
      title: "Quantum Error Correction", 
      enrollments: 132, 
      completionRate: 36, 
      avgRating: 4.3,
      status: "draft"
    },
  ];
  
  const filteredCourses = filter === "all" 
    ? courses 
    : courses.filter(course => course.status === filter);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search courses..." className="pl-8" />
          </div>
          <Select defaultValue="all" onValueChange={setFilter}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Filter status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Course
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course Name</TableHead>
              <TableHead>Enrollments</TableHead>
              <TableHead>Completion Rate</TableHead>
              <TableHead>Avg. Rating</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCourses.map(course => (
              <TableRow key={course.id}>
                <TableCell className="font-medium">{course.title}</TableCell>
                <TableCell>{course.enrollments}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={course.completionRate} className="w-24" />
                    <span>{course.completionRate}%</span>
                  </div>
                </TableCell>
                <TableCell>{course.avgRating}/5.0</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    course.status === "active" ? "bg-green-100 text-green-800" : 
                    course.status === "draft" ? "bg-yellow-100 text-yellow-800" : 
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
