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
  Brain,
  Users,
  Clock,
  Heart,
  Building,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function SkillsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Soft Skills and Leadership Capabilities for Senior IT Technicians
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Develop these essential interpersonal and leadership skills to excel
          in senior IT roles in 2025 and beyond.
        </p>

        <Tabs defaultValue="leadership" className="w-full">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-3 mb-8 gap-2 sm:gap-1 p-1">
            <TabsTrigger value="leadership">Leadership Skills</TabsTrigger>
            <TabsTrigger value="interpersonal">
              Interpersonal Skills
            </TabsTrigger>
            <TabsTrigger value="hybrid">Hybrid Work Leadership</TabsTrigger>
          </TabsList>

          <TabsContent value="leadership" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Empathic, Validating Leadership</CardTitle>
                <CardDescription>
                  Creating connection through understanding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Empathic leadership goes beyond active listening to make team
                  members feel truly heard and valued.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Making people feel heard beyond just active listening</li>
                  <li>Validating others' thoughts and opinions</li>
                  <li>
                    Being relatable and offering guidance based on past
                    experiences
                  </li>
                  <li>
                    Providing constructive feedback that goes beyond just
                    sharing opinions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Growth Mindset</CardTitle>
                <CardDescription>
                  Embracing continuous learning and adaptation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A growth mindset is essential for staying relevant in the
                  rapidly evolving technology landscape.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Staying informed about AI and emerging technologies</li>
                  <li>Letting go of outdated thinking and embracing change</li>
                  <li>
                    Surrounding oneself with both experienced voices and fresh
                    perspectives
                  </li>
                  <li>Adapting to rapid shifts in the industry</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>
                  Balancing Technical Mastery With Strategic Insight
                </CardTitle>
                <CardDescription>
                  Connecting technology to business outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Senior IT technicians must bridge the gap between technical
                  expertise and business strategy.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Understanding the need for new tools before adopting them
                  </li>
                  <li>Blending technical expertise with business strategy</li>
                  <li>
                    Developing active listening and empathetic communication
                  </li>
                  <li>
                    Grasping diverse perspectives to align initiatives and drive
                    innovation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Influencing Without Authority</CardTitle>
                <CardDescription>
                  Leading through expertise and trust
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The ability to influence decisions and drive change without
                  formal authority is crucial for senior technical roles.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Building trust and communicating a clear vision</li>
                  <li>Aligning stakeholders without direct control</li>
                  <li>Inspiring action rather than enforcing decisions</li>
                  <li>
                    Turning technical expertise into organizational impact
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Psychological Safety</CardTitle>
                <CardDescription>
                  Creating environments where innovation thrives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Psychological safety enables teams to take risks, share ideas,
                  and learn from mistakes.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Creating an environment where team members feel comfortable
                    taking calculated risks
                  </li>
                  <li>
                    Encouraging speaking up about concerns and sharing
                    innovative ideas
                  </li>
                  <li>Enabling teams to learn quickly from mistakes</li>
                  <li>Building trust among team members</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interpersonal" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Communication Skills</CardTitle>
                <CardDescription>
                  Bridging technical and business languages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Effective communication is essential for translating technical
                  concepts into business value.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Explaining complex technical concepts to non-technical
                    stakeholders
                  </li>
                  <li>
                    Simplifying technical jargon for broader understanding
                  </li>
                  <li>Refining email writing and presentation skills</li>
                  <li>
                    Ensuring seamless collaboration between technical teams and
                    business leaders
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Emotional Intelligence</CardTitle>
                <CardDescription>
                  Understanding and managing emotions effectively
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Emotional intelligence enables better team dynamics and
                  conflict resolution.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Fostering better team dynamics</li>
                  <li>Resolving conflicts effectively</li>
                  <li>Boosting overall productivity</li>
                  <li>
                    Recognizing and managing emotions in high-pressure
                    situations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Team Collaboration</CardTitle>
                <CardDescription>
                  Working effectively across disciplines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Collaboration skills are essential for working on complex
                  projects with diverse stakeholders.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Working effectively across multiple teams or disciplines
                  </li>
                  <li>Engaging in group projects and team discussions</li>
                  <li>Appreciating diverse perspectives</li>
                  <li>
                    Contributing to large-scale projects with multiple
                    stakeholders
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Adaptability</CardTitle>
                <CardDescription>
                  Thriving in rapidly changing environments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Adaptability is crucial for staying relevant in the face of
                  rapid technological change.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Evolving with changing technologies like AI, blockchain, and
                    edge computing
                  </li>
                  <li>
                    Continuous learning through certifications and courses
                  </li>
                  <li>
                    Remaining valuable in the face of rapid technological change
                  </li>
                  <li>Quickly adjusting to new tools and methodologies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Time Management and Prioritization</CardTitle>
                <CardDescription>
                  Balancing multiple responsibilities effectively
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Effective time management is essential for meeting deadlines
                  and maintaining productivity.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Managing multiple deadlines and tasks effectively</li>
                  <li>Maintaining productivity and system uptime</li>
                  <li>Using organizational tools to stay on track</li>
                  <li>Meeting deadlines in high-pressure environments</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hybrid" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>
                  Transparent Communication of Hybrid Work Policies
                </CardTitle>
                <CardDescription>
                  Setting clear expectations for work arrangements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Clear communication about hybrid work policies is essential
                  for team alignment and satisfaction.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Making expectations clear about remote vs. in-office work
                  </li>
                  <li>
                    Providing unambiguous information about work arrangements
                  </li>
                  <li>
                    Avoiding pretense of flexibility when the culture demands
                    office presence
                  </li>
                  <li>Enabling informed choices about work arrangements</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Outcome-Based Performance Measurement</CardTitle>
                <CardDescription>
                  Focusing on results rather than activity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Measuring performance based on outcomes rather than hours
                  worked is crucial in hybrid environments.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Focusing on results rather than activity or inputs</li>
                  <li>Giving flexibility and trust to manage schedules</li>
                  <li>
                    Judging based on committed outcomes rather than hours worked
                  </li>
                  <li>Avoiding micromanagement through monitoring tools</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Team Autonomy for In-Person Schedules</CardTitle>
                <CardDescription>
                  Allowing teams to determine their collaboration needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Different teams have different needs for in-person
                  collaboration, requiring flexible approaches.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Allowing business units and teams to determine their own
                    in-person schedules
                  </li>
                  <li>
                    Recognizing that different functions have different needs
                    for in-person collaboration
                  </li>
                  <li>
                    Identifying key moments when being in the same room is most
                    meaningful
                  </li>
                  <li>
                    Creating function-specific patterns for in-office work
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Boundary Management</CardTitle>
                <CardDescription>
                  Creating sustainable work-life balance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Clear boundaries are essential for preventing burnout in
                  hybrid work environments.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Having explicit conversations about communication outside
                    work hours
                  </li>
                  <li>
                    Setting expectations for gaining access to personal time and
                    attention
                  </li>
                  <li>Respecting team members' working hours</li>
                  <li>
                    Creating sustainable work-life balance in a connected
                    environment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Personal Connection in Virtual Settings</CardTitle>
                <CardDescription>
                  Building relationships across digital barriers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Intentional relationship-building is crucial for maintaining
                  team cohesion in virtual environments.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Dedicating time for personal connection at the start of
                    virtual meetings
                  </li>
                  <li>Nurturing human relationships in digital environments</li>
                  <li>
                    Building network connections that transcend virtual barriers
                  </li>
                  <li>
                    Prioritizing relationship-building over immediate business
                    concerns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Key Insights for Skill Development
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Balance technical and human skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Technical expertise remains essential but must be complemented
                by strong interpersonal capabilities.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Adapt leadership style to hybrid work</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Remote and hybrid environments require different leadership
                approaches than traditional office settings.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Focus on outcomes over process</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Measuring success based on results rather than activity is
                crucial in distributed work environments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Build psychological safety</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Creating environments where team members feel safe to take risks
                and share ideas drives innovation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Develop strategic communication</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The ability to translate complex technical concepts into clear,
                actionable insights for stakeholders is increasingly valuable.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Embrace continuous learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The rapid pace of technological change requires ongoing skill
                development and adaptation.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Foster inclusive collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Ensuring all team members can contribute effectively regardless
                of location is essential for team success in hybrid
                environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button asChild size="lg">
          <Link href="/resources">
            Explore Learning Resources
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
