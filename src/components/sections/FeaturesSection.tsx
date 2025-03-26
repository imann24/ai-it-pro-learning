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
  BookOpen,
  Award,
  Tool,
  Brain,
  Building,
  Globe,
  Lightbulb,
  Server,
  Shield,
  Cloud,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Focus Areas
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Essential Areas for IT Professionals in 2025
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the most important skills and knowledge areas for senior
              IT technicians to stay competitive in the evolving technology
              landscape.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <Cloud className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Cloud Evolution</CardTitle>
              <CardDescription>
                Advanced cloud architectures and multi-cloud strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Master containerization, serverless computing, and cloud-native
                development to design resilient and scalable systems.
              </p>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/technologies#cloud">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Cybersecurity</CardTitle>
              <CardDescription>
                Advanced threat detection and zero-trust security
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Implement robust security frameworks, threat intelligence, and
                automated security responses for comprehensive protection.
              </p>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/technologies#security">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">AI Integration</CardTitle>
              <CardDescription>
                Practical AI implementation for IT operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Leverage AI for predictive maintenance, automated
                troubleshooting, and enhanced decision-making in IT
                infrastructure.
              </p>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/technologies#ai">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Infrastructure as Code</CardTitle>
              <CardDescription>
                Automated infrastructure deployment and management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Master tools like Terraform, Ansible, and Kubernetes to automate
                infrastructure provisioning and configuration management.
              </p>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/tools#infrastructure">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Strategic Certifications</CardTitle>
              <CardDescription>
                High-value credentials for career advancement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Identify and obtain the most valuable certifications that align
                with your career goals and industry demand.
              </p>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/certifications">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Leadership Skills</CardTitle>
              <CardDescription>
                Technical leadership in hybrid environments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Develop the soft skills needed to lead technical teams,
                communicate with stakeholders, and drive organizational change.
              </p>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/skills#leadership">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
