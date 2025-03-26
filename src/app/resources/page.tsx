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
  GraduationCap,
  Laptop,
  Users,
  Bot,
  Building,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Learning Resources for Senior IT Technicians
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover the best platforms and resources to continue your
          professional development and stay current with industry trends.
        </p>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 mb-8 gap-2 sm:gap-0">
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="communities">Communities</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Specialized IT Learning Platforms</CardTitle>
                <CardDescription>
                  Focused resources for technical skill development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Pluralsight</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Premium learning platform offering nearly 5,000 courses
                      for IT professionals. Pluralsight stands out for its
                      consistently high quality content, assessments, and
                      certificates that can be combined with LinkedIn skill
                      tests.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Advanced
                      courses in cloud computing, cybersecurity, AI
                      implementation, and other cutting-edge technologies.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">LinkedIn Learning</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Provides desktop and mobile app experiences with
                      personalized course recommendations driven by data
                      analytics. The platform's integration with LinkedIn
                      profiles makes it particularly valuable for showcasing
                      skills.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Balancing
                      technical expertise with management responsibilities
                      through courses on both technical skills and leadership.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Udemy Business</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Allows organizations to build custom courses with
                      certifications tailored to specific needs. The platform's
                      course builder and certification functionalities make it
                      easy to create and deliver training content.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Learning
                      specialized skills from industry practitioners with
                      hands-on experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>
                  Academic and Comprehensive Learning Platforms
                </CardTitle>
                <CardDescription>
                  University-backed education for IT professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Coursera</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Partners with top universities and companies to offer
                      courses, specializations, and degree programs. Provides
                      access to cutting-edge research and academic perspectives
                      on technology trends.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Deep,
                      comprehensive learning in areas like machine learning,
                      data science, and cybersecurity.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">edX</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Offers university-level courses from prestigious
                      institutions with a focus on academic rigor and
                      comprehensive coverage of complex technical concepts.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span>{" "}
                      MicroMasters and Professional Certificate programs for
                      specialized expertise.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Khan Academy</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      While often associated with K-12 education, Khan Academy
                      offers excellent resources for foundational computer
                      science and mathematics concepts.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Refreshing
                      understanding of algorithms, data structures, or
                      mathematical principles underlying machine learning.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Developer Communities and Forums</CardTitle>
                <CardDescription>
                  Collaborative learning through peer interaction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Stack Overflow</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Invaluable resource for code-driven learning and
                      problem-solving. Engaging with real-world code challenges,
                      contributing to discussions, and collaborating with the
                      developer community provides hands-on experience.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Solutions
                      to immediate problems and insights into best practices and
                      emerging patterns in software development.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hosts countless open-source projects that support learning
                      and collaboration. Provides opportunities to study
                      well-architected systems, contribute to meaningful
                      projects, and build a portfolio of work.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Team-based
                      learning, knowledge sharing, and building a visible
                      portfolio of contributions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Discord Servers and Reddit Communities
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Specialized Discord servers and subreddits focused on
                      specific technologies or IT domains connect professionals
                      with like-minded peers and subject matter experts.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Real-time
                      problem-solving, mentorship opportunities, and discussions
                      about emerging trends.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Documentation and Technical Resources</CardTitle>
                <CardDescription>
                  Authoritative sources for technical knowledge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">
                      Cloud Provider Documentation
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      The freely available documentation from AWS, Azure, Google
                      Cloud, and other major platforms serves as comprehensive
                      learning resources with quick-start guides, architecture
                      patterns, and best practices.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span>{" "}
                      Authoritative information directly from the source,
                      including advanced topics not covered in third-party
                      courses.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Microsoft Applied Skills</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Offers verification of in-demand technical skills for
                      specific, real-world scenarios. These credentials allow IT
                      professionals to demonstrate proficiency in implementing
                      critical projects aligned with business objectives.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Hands-on,
                      scenario-based learning in cloud, AI, security, and data
                      management.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Public APIs for Practice Projects
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Working with public APIs from services like Twitter,
                      Spotify, and GitHub provides opportunities to build
                      practical skills through personal projects.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Developing
                      system design skills and creating tangible demonstrations
                      of technical abilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="books" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI-Powered Learning Tools</CardTitle>
                <CardDescription>
                  Leveraging artificial intelligence for accelerated learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">
                      Generative AI Tools for Learning
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tools like ChatGPT, Google Bard, and Microsoft Copilot
                      serve as interactive learning resources. Effective prompt
                      engineering allows IT professionals to extract valuable
                      information, generate code examples, and receive
                      explanations.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Bridging
                      knowledge gaps, exploring new concepts, and accelerating
                      learning in emerging technologies.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">AI-Based Research Tools</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Platforms like Perplexity.ai enhance traditional learning
                      by providing AI-powered research capabilities that
                      synthesize information from multiple sources.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Saving time
                      in information gathering and providing broader context for
                      specialized knowledge.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      AI-Enhanced Coding Environments
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Integrated development environments (IDEs) with AI
                      capabilities, such as GitHub Copilot and JetBrains AI
                      Assistant, provide real-time learning opportunities during
                      actual development work.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Continuous
                      learning embedded in daily work through code suggestions
                      and best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Interactive Learning Environments</CardTitle>
                <CardDescription>
                  Hands-on learning through practical application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Azure Labs</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Enables quick creation of different server types for
                      proofs of concept, training, and test environments without
                      managing infrastructure.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Safe
                      environment to test new technologies and architectures
                      before implementing them in production.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">
                      Interactive Coding Platforms
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Platforms like freeCodeCamp offer interactive learning
                      experiences with coding challenges and projects where
                      users can build real-world applications.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Practical
                      skill development in programming and web development
                      through hands-on projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Virtual Tech Book Clubs</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Virtual tech book clubs bring together technology
                      enthusiasts to discuss and analyze the latest
                      publications, encouraging deep understanding of emerging
                      trends.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Exploring
                      topics in depth and learning from diverse perspectives in
                      a community setting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communities" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Learning Management Systems (LMS)</CardTitle>
                <CardDescription>
                  Corporate training platforms for organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Docebo</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Cloud-based corporate training platform designed for
                      talent development, employee onboarding, compliance
                      training, and sales enablement with AI-powered learning
                      experiences.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Creating
                      comprehensive learning paths that combine technical skills
                      with business knowledge.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">TalentLMS</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Focuses on course creation and management for employee
                      training with an intuitive drag-and-drop course creator,
                      making it accessible for subject matter experts.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Both
                      consuming and contributing to organizational learning in a
                      straightforward way.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">iSpring Suite</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Specializes in creating learning content quickly with AI
                      assistance, featuring PowerPoint to SCORM conversion and
                      interactive assessments.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Rapidly
                      evolving technical domains where training materials need
                      frequent updates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multimedia and Collaborative Learning</CardTitle>
                <CardDescription>
                  Alternative formats for professional development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">Video and Audio Resources</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      YouTube tutorials, technology podcasts, and webinar
                      platforms provide diverse formats for learning technical
                      content.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Visual
                      demonstrations, just-in-time learning, and consuming
                      content during commutes or downtime.
                    </p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold">
                      Internal "Demo Days" and Mentorship
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Weekly internal knowledge sharing events and mentorship
                      programs create a culture of continuous learning within
                      organizations.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Both
                      teaching and learning, reinforcing knowledge while
                      developing leadership skills.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Professional Associations</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Organizations like IEEE, ACM, and technology-specific user
                      groups offer structured learning opportunities,
                      conferences, and networking.
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Best for:</span> Access to
                      cutting-edge research, industry best practices, and a
                      community of peers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Key Considerations for Learning Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Blend Formal and Informal Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Combine structured courses with community engagement,
                mentorship, and hands-on projects for a comprehensive learning
                approach.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Focus on Applied Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Prioritize resources that emphasize practical application over
                theoretical knowledge, particularly those offering hands-on labs
                and real-world scenarios.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Develop T-Shaped Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Use learning resources to both deepen technical specialization
                and broaden understanding of adjacent technologies and business
                domains.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Leverage AI Wisely</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Incorporate AI-powered learning tools to accelerate knowledge
                acquisition while maintaining critical thinking about the
                information provided.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contribute While Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Engage with communities not just as a consumer of knowledge but
                also as a contributor, which reinforces learning and builds
                professional reputation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Align Learning with Career Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Select resources that support both immediate job requirements
                and longer-term career aspirations, balancing tactical and
                strategic skill development.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Establish Continuous Learning Habits</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Rather than episodic, intensive learning sprints, develop
                sustainable routines that incorporate regular learning into
                daily work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button asChild size="lg">
          <Link href="/">
            Return to Home
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
