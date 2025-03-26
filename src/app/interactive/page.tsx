"use client";

import { useState } from "react";
import SearchComponent from "@/components/SearchComponent";
import SkillAssessmentComponent from "@/components/SkillAssessmentComponent";
import ResourceFilterComponent from "@/components/ResourceFilterComponent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function InteractivePage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Interactive Tools
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Use these interactive tools to personalize your professional
          development journey as a senior IT technician.
        </p>

        <Tabs defaultValue="search" className="w-full">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-3 mb-8 gap-2 sm:gap-1 p-1">
            <TabsTrigger value="search">Search Content</TabsTrigger>
            <TabsTrigger value="assessment">Skill Assessment</TabsTrigger>
            <TabsTrigger value="resources">Resource Finder</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Find Specific Information
              </h2>
              <p className="text-muted-foreground mb-6">
                Search across all content to quickly find information about
                specific technologies, certifications, or skills.
              </p>
              <SearchComponent />
            </div>
          </TabsContent>

          <TabsContent value="assessment" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Assess Your Skills
              </h2>
              <p className="text-muted-foreground mb-6">
                Take this quick assessment to identify your strengths and areas
                for improvement as a senior IT technician.
              </p>
              <SkillAssessmentComponent />
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Find Learning Resources
              </h2>
              <p className="text-muted-foreground mb-6">
                Filter learning resources by type and focus area to find the
                best options for your professional development.
              </p>
              <ResourceFilterComponent />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
