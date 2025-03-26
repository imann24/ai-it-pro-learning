"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Brain,
  Building,
  Lightbulb,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 break-words">
                Professional Development for Senior IT Technicians
              </h1>
              <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl break-words">
                Stay ahead in your career with the latest skills,
                certifications, and technologies for 2025 and beyond.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="w-full min-[400px]:w-auto">
                <Link href="/technologies">
                  <span className="flex items-center">
                    <span className="truncate">Explore Technologies</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full min-[400px]:w-auto"
              >
                <Link href="/certifications">
                  <span className="truncate">View Certifications</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 lg:flex-1 w-full max-w-full overflow-hidden">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 gap-1 p-1">
                <TabsTrigger
                  value="overview"
                  className="text-xs sm:text-sm px-1 sm:px-2"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="text-xs sm:text-sm px-1 sm:px-2"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="certifications"
                  className="text-xs sm:text-sm px-1 sm:px-2"
                >
                  Certifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-0 mt-4">
                <Card className="overflow-hidden">
                  <CardHeader className="px-3 py-3 sm:px-6 sm:py-4">
                    <CardTitle className="text-base sm:text-lg">
                      Senior IT Professional Development
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Key focus areas for IT professionals in 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:gap-4 px-3 pb-4 sm:px-6">
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full shrink-0">
                        <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium leading-none">
                          Emerging Technologies
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Stay current with AI, cloud computing, and
                          cybersecurity
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full shrink-0">
                        <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium leading-none">
                          Leadership Development
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Enhance both technical and people management skills
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="certifications" className="p-0 mt-4">
                <Card className="overflow-hidden">
                  <CardHeader className="px-3 py-3 sm:px-6 sm:py-4">
                    <CardTitle className="text-base sm:text-lg">
                      In-Demand Certifications
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Top certifications for senior IT technicians
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:gap-4 px-3 pb-4 sm:px-6">
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full shrink-0">
                        <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium leading-none">
                          AWS Certified Solutions Architect
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Design and deploy scalable systems on AWS
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full shrink-0">
                        <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium leading-none">
                          CompTIA Security+
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Essential security skills for IT professionals
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="skills" className="p-0 mt-4">
                <Card className="overflow-hidden">
                  <CardHeader className="px-3 py-3 sm:px-6 sm:py-4">
                    <CardTitle className="text-base sm:text-lg">
                      Essential Skills
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      Critical skills for career advancement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:gap-4 px-3 pb-4 sm:px-6">
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full shrink-0">
                        <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium leading-none">
                          Strategic Thinking
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Align technology decisions with business objectives
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-4">
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-full shrink-0">
                        <Building className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      </div>
                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <p className="text-xs sm:text-sm font-medium leading-none">
                          Remote Team Leadership
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">
                          Effectively manage distributed technical teams
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
