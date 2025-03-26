"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, GraduationCap, Laptop } from "lucide-react";
import Link from "next/link";

export default function ResourcesSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Learning Resources
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Continue Your Professional Growth
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore these curated learning platforms and resources to develop
              your skills and stay current with industry trends.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Online Learning Platforms</CardTitle>
              <CardDescription>
                Comprehensive technical courses and certifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Pluralsight - Technical skill development</li>
                <li>Coursera - University-backed IT courses</li>
                <li>LinkedIn Learning - Professional skills</li>
                <li>A Cloud Guru - Cloud certification prep</li>
              </ul>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/resources#platforms">
                  Explore platforms
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Technical Communities</CardTitle>
              <CardDescription>
                Connect with peers and industry experts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>Stack Overflow - Technical problem solving</li>
                <li>GitHub - Open source collaboration</li>
                <li>Reddit r/sysadmin - IT professional community</li>
                <li>Discord tech servers - Real-time discussions</li>
              </ul>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/resources#communities">
                  Join communities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="p-2 bg-primary/10 rounded-full w-fit">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="mt-4">Certification Paths</CardTitle>
              <CardDescription>
                Structured learning for professional credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                <li>AWS Certification roadmap</li>
                <li>Microsoft Learn paths</li>
                <li>CompTIA certification sequence</li>
                <li>Cisco learning network</li>
              </ul>
              <Button variant="ghost" size="sm" className="mt-4" asChild>
                <Link href="/resources#certifications">
                  View certification paths
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/resources">
              View All Learning Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
