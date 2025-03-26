"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Award, Laptop, Users, Brain } from "lucide-react";

export default function ResourceFilterComponent() {
  const [filteredResources, setFilteredResources] = useState<any[]>([]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const resources = [
    {
      name: "Pluralsight",
      type: "online",
      focus: ["technical", "certification"],
      description:
        "Premium learning platform with nearly 5,000 courses for IT professionals.",
    },
    {
      name: "LinkedIn Learning",
      type: "online",
      focus: ["technical", "leadership"],
      description:
        "Courses on technical skills and leadership with LinkedIn profile integration.",
    },
    {
      name: "Coursera",
      type: "online",
      focus: ["academic", "certification"],
      description:
        "University-level courses with structured learning paths and certifications.",
    },
    {
      name: "Stack Overflow",
      type: "community",
      focus: ["technical", "problem-solving"],
      description:
        "Developer community for code-driven learning and problem-solving.",
    },
    {
      name: "GitHub",
      type: "community",
      focus: ["technical", "collaboration"],
      description:
        "Platform for studying well-architected systems and contributing to projects.",
    },
    {
      name: "Cloud Provider Documentation",
      type: "documentation",
      focus: ["technical", "certification"],
      description: "Comprehensive resources from AWS, Azure, and Google Cloud.",
    },
    {
      name: "ChatGPT & AI Tools",
      type: "ai",
      focus: ["technical", "problem-solving"],
      description: "Interactive learning resources for exploring new concepts.",
    },
    {
      name: "Azure Labs",
      type: "hands-on",
      focus: ["technical", "certification"],
      description:
        "Environment for testing new technologies before production implementation.",
    },
    {
      name: "Technology Podcasts",
      type: "multimedia",
      focus: ["trends", "leadership"],
      description:
        "Insights from industry leaders during commutes or downtime.",
    },
    {
      name: "Professional Associations",
      type: "community",
      focus: ["networking", "certification"],
      description:
        "Organizations like IEEE and ACM offering structured learning opportunities.",
    },
  ];

  const handleFilterChange = (filter: string) => {
    let newFilters: string[];

    if (selectedFilters.includes(filter)) {
      newFilters = selectedFilters.filter((f) => f !== filter);
    } else {
      newFilters = [...selectedFilters, filter];
    }

    setSelectedFilters(newFilters);

    if (newFilters.length === 0) {
      setFilteredResources([]);
    } else {
      const filtered = resources.filter((resource) => {
        return newFilters.some(
          (filter) =>
            resource.type === filter || resource.focus.includes(filter)
        );
      });
      setFilteredResources(filtered);
    }
  };

  const resourceTypes = [
    {
      id: "online",
      label: "Online Courses",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "community",
      label: "Communities",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: "documentation",
      label: "Documentation",
      icon: <BookOpen className="h-4 w-4" />,
    },
    { id: "ai", label: "AI-Enhanced", icon: <Brain className="h-4 w-4" /> },
    {
      id: "hands-on",
      label: "Hands-on Labs",
      icon: <Laptop className="h-4 w-4" />,
    },
    {
      id: "multimedia",
      label: "Multimedia",
      icon: <Laptop className="h-4 w-4" />,
    },
  ];

  const focusAreas = [
    { id: "technical", label: "Technical Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "certification", label: "Certification Prep" },
    { id: "problem-solving", label: "Problem Solving" },
    { id: "trends", label: "Industry Trends" },
    { id: "networking", label: "Networking" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Find Learning Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="type" className="w-full">
            <TabsList className="flex flex-col sm:grid sm:grid-cols-2 mb-4 gap-2 sm:gap-1 p-1">
              <TabsTrigger value="type">Filter by Type</TabsTrigger>
              <TabsTrigger value="focus">Filter by Focus Area</TabsTrigger>
            </TabsList>

            <TabsContent value="type" className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {resourceTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={
                      selectedFilters.includes(type.id) ? "default" : "outline"
                    }
                    onClick={() => handleFilterChange(type.id)}
                    className="flex items-center gap-1"
                  >
                    {type.icon}
                    {type.label}
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="focus" className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Button
                    key={area.id}
                    variant={
                      selectedFilters.includes(area.id) ? "default" : "outline"
                    }
                    onClick={() => handleFilterChange(area.id)}
                  >
                    {area.label}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">
              {selectedFilters.length > 0
                ? `Recommended Resources (${filteredResources.length})`
                : "Select filters to see recommended resources"}
            </h3>

            {filteredResources.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredResources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">
                          {resource.name}
                        </CardTitle>
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {resource.focus.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : selectedFilters.length > 0 ? (
              <p className="text-muted-foreground">
                No resources match your selected filters.
              </p>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
