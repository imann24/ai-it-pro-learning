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
import { ArrowRight, Award, Shield, Cloud, Server, Laptop } from "lucide-react";
import Link from "next/link";

export default function CertificationsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          In-Demand Certifications for Senior IT Technicians in 2025
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Boost your career with these highly valued certifications that
          demonstrate your expertise and commitment to professional growth.
        </p>

        <Tabs defaultValue="cloud" className="w-full">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 mb-8 gap-2 sm:gap-1 p-1">
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="networking">Networking</TabsTrigger>
            <TabsTrigger value="specialized">Specialized</TabsTrigger>
          </TabsList>

          <TabsContent value="cloud" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AWS Certifications</CardTitle>
                <CardDescription>
                  Amazon Web Services certification path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      AWS Certified Solutions Architect – Associate/Professional
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Validates knowledge of AWS services and best practices for
                      building secure and reliable applications. This
                      certification is consistently among the highest-paying IT
                      certifications.
                    </p>
                  </li>
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      AWS Certified Security – Specialty
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Focuses on security expertise within the AWS environment,
                      including specialized knowledge of data protection
                      mechanisms, encryption, and security controls.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">
                      AWS Certified Developer – Associate
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Validates knowledge of core AWS services, best practices,
                      and application development, particularly valuable for IT
                      technicians involved in DevOps practices.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Microsoft Azure Certifications</CardTitle>
                <CardDescription>
                  Microsoft's cloud platform certification path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      Microsoft Certified: Azure Solutions Architect Expert
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For professionals who design and implement solutions that
                      run on Microsoft Azure, covering compute, network,
                      storage, and security.
                    </p>
                  </li>
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      Microsoft Certified: Azure Administrator Associate
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For IT professionals who manage cloud services spanning
                      storage, security, networking, and compute capabilities in
                      an Azure environment.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">
                      Microsoft 365 Certified: Endpoint Administrator Associate
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For managing device compliance and security policies,
                      particularly valuable as remote work continues to be
                      prevalent in 2025.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Google Cloud Certifications</CardTitle>
                <CardDescription>
                  Google's cloud platform certification path
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold">
                      Google Cloud Professional Cloud Architect
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Demonstrates ability to design, develop, and manage
                      robust, secure, scalable, highly available, and dynamic
                      solutions using Google Cloud technologies.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cybersecurity Certifications</CardTitle>
                <CardDescription>
                  Essential security credentials for IT professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">CompTIA Security+</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Covers network security, compliance and operation
                      security, threats and vulnerabilities, application, data
                      and host security. This is an excellent entry point into
                      security specialization.
                    </p>
                  </li>
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      Certified Information Systems Security Professional
                      (CISSP)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Advanced security certification for security professionals
                      with at least five years of experience. Highly respected
                      and often required for senior security positions.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">
                      Certified Ethical Hacker (CEH)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For security professionals who want to understand how to
                      identify weaknesses and vulnerabilities in target systems.
                      Valuable for penetration testing and security assessment
                      roles.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="networking" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cisco Certifications</CardTitle>
                <CardDescription>
                  Industry-standard networking credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      Cisco Certified Network Associate (CCNA)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Entry-level networking certification covering networking
                      fundamentals, IP services, security, automation and
                      programmability. Still relevant in 2025 as a foundation
                      for networking careers.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">
                      Cisco Certified Network Professional (CCNP)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Advanced certification for IT professionals who plan,
                      implement, verify and troubleshoot local and wide-area
                      enterprise networks. Demonstrates deep networking
                      expertise.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Laptop className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>General IT Certifications</CardTitle>
                <CardDescription>
                  Foundational credentials for IT professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">CompTIA A+</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Foundation-level certification that covers
                      troubleshooting, networking, operating systems, mobile
                      devices, hardware, virtualization, cloud computing, and
                      operational procedures.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">CompTIA Network+</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Validates the essential knowledge and skills needed to
                      design, configure, manage and troubleshoot wired and
                      wireless networks.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specialized" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Specialized Certifications</CardTitle>
                <CardDescription>
                  Niche expertise for career advancement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      Certified Data Privacy Solutions Engineer (CDPSE)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For implementing privacy by design, increasingly important
                      as data privacy regulations continue to evolve globally.
                    </p>
                  </li>
                  <li className="border-b pb-4">
                    <h4 className="font-semibold">
                      Certified Information Security Manager (CISM)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For information security management, focusing on
                      governance, program development, risk management, and
                      incident management.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold">
                      Project Management Professional (PMP)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      For IT professionals moving into management roles,
                      demonstrating expertise in leading and directing projects
                      and teams.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Key Insights for Certification Strategy
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Cloud expertise is essential</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                AWS, Azure, and Google Cloud certifications are among the most
                valuable and highest-paying certifications in 2025.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cybersecurity remains critical</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                With increasing cyber threats, security certifications like
                CompTIA Security+, CISSP, and AWS Security Specialty are highly
                valued.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Networking fundamentals still matter</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cisco certifications (CCNA, CCNP) continue to be valuable for IT
                professionals, especially those working with network
                infrastructure.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Specialization pays off</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Specialized certifications in areas like data privacy, security
                management, and cloud security typically command higher
                salaries.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certification stacking is beneficial</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Senior IT technicians benefit from having multiple complementary
                certifications (e.g., combining cloud, security, and networking
                certifications).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Continuous certification updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Many certification providers are updating their programs to
                include emerging technologies like AI integration, automation,
                and advanced security practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button asChild size="lg">
          <Link href="/tools">
            Explore Key Software Tools
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
