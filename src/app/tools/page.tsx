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
  Shield,
  Server,
  Cpu,
  Bot,
  Workflow,
  Lock,
  Cloud,
} from "lucide-react";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Key Software Tools for Senior IT Technicians in 2025
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Master these essential tools and platforms to enhance your efficiency,
          security, and technical capabilities.
        </p>

        <Tabs defaultValue="automation" className="w-full">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 mb-8 gap-2 sm:gap-1 p-1">
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          </TabsList>

          <TabsContent value="automation" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AIOps Platforms</CardTitle>
                <CardDescription>AI-powered IT operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Tools that use AI to enable real-time resource optimization,
                  automated decision-making, and predictive incident resolution.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Solutions that pull together disparate infrastructure
                    elements to deliver self-service AI platforms
                  </li>
                  <li>
                    Anomaly detection and predictive analytics for proactive
                    issue resolution
                  </li>
                  <li>
                    Automated root cause analysis and remediation
                    recommendations
                  </li>
                  <li>
                    Performance optimization through machine learning algorithms
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Workflow className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>IT Process Automation</CardTitle>
                <CardDescription>
                  Workflow automation for IT operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Tools that streamline and automate routine IT tasks and
                  processes to improve efficiency and reduce human error.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>Custom workflow builders for automated IT processes</li>
                  <li>
                    Tools that automate routine tasks like system
                    administration, compliance reporting, and configuration
                    management
                  </li>
                  <li>
                    Solutions that integrate with existing systems through APIs
                  </li>
                  <li>
                    Low-code/no-code platforms for creating custom automation
                    workflows
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Generative AI for IT</CardTitle>
                <CardDescription>
                  AI assistants for IT professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  AI tools that assist IT professionals with various tasks,
                  enhancing productivity and problem-solving capabilities.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    AI tools that assist with code generation, documentation
                    creation, and technical writing
                  </li>
                  <li>
                    Solutions that summarize and analyze activity logs and
                    automate alerts
                  </li>
                  <li>
                    Tools that optimize database queries and automate schema
                    generation
                  </li>
                  <li>
                    AI assistants for troubleshooting and knowledge management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Device and Asset Management</CardTitle>
                <CardDescription>
                  Hardware and software asset tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Josys</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      IT management platform focused on providing "360-degree
                      control" of both SaaS and device assets.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                      <li>
                        Automated employee lifecycle workflows for software and
                        hardware
                      </li>
                      <li>Integrated device asset tracking and management</li>
                      <li>Granular access control and provisioning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Remote Monitoring and Management</CardTitle>
                <CardDescription>
                  Endpoint monitoring and management solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">NinjaOne</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Unified IT management solution combining remote
                      monitoring, endpoint management, and IT automation.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                      <li>Remote monitoring and management</li>
                      <li>Automated patch management and scripting</li>
                      <li>Integrated remote access and control</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>
                  Extended Detection and Response (XDR) Platforms
                </CardTitle>
                <CardDescription>
                  Advanced threat detection and response
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">
                      SentinelOne Singularity Platform
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      AI-powered platform offering automated response, clear
                      visibility on attack surface, and protection against
                      threats.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                      <li>Advanced threat intelligence powered by Mandiant</li>
                      <li>
                        Generative AI capabilities for security operations
                      </li>
                      <li>
                        Behavioral and static detections for endpoint protection
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cloud Security Tools</CardTitle>
                <CardDescription>
                  Specialized security for cloud environments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">
                      Cloud Security Posture Management (CSPM)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tools that manage asset inventory, assess compliance, and
                      eliminate misconfiguration issues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Cloud Workload Protection Platform (CWPP)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Solutions that safeguard cloud workloads from threats and
                      vulnerabilities.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Cloud Detection and Response (CDR)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Tools for faster incident response in cloud environments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      AI Security Posture Management (AI-SPM)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Solutions that evaluate configurations of AI-based
                      services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Zero Trust Security Solutions</CardTitle>
                <CardDescription>
                  Modern security architecture for distributed environments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Zero trust architectures are becoming essential as
                  perimeter-based security becomes obsolete in hybrid and remote
                  work environments.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Solutions that implement micro-segmentation, user context
                    checks, and continuous session monitoring
                  </li>
                  <li>
                    Tools that validate every request rather than providing
                    blanket access after initial authentication
                  </li>
                  <li>
                    Platforms that integrate identity, device health, and
                    behavioral analytics for access decisions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Quantum-Resistant Cryptography Tools</CardTitle>
                <CardDescription>
                  Future-proof security against quantum computing threats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Post-quantum cryptography solutions to protect against future
                  quantum computing threats that could break traditional
                  encryption.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Tools that implement quantum-resistant algorithms for
                    sensitive data protection
                  </li>
                  <li>
                    Solutions for cryptographic agility to adapt to evolving
                    standards
                  </li>
                  <li>
                    Migration frameworks for transitioning from vulnerable
                    cryptographic systems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="collaboration" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Unified Workforce Platforms</CardTitle>
                <CardDescription>
                  Comprehensive IT management solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Rippling IT</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Comprehensive platform that brings together HR, IT, and
                      Finance with advanced capabilities.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                      <li>
                        Automated access provisioning and deprovisioning tied to
                        HRIS systems
                      </li>
                      <li>
                        Device management with zero-touch deployment and MDM
                      </li>
                      <li>Self-service app management for employees</li>
                      <li>Advanced security with zero-trust architecture</li>
                      <li>Custom workflows for automated IT processes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Identity Management Platforms</CardTitle>
                <CardDescription>
                  Secure access management solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Okta</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Enterprise-grade identity management platform that secures
                      and manages access for workforce and customer identities.
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
                      <li>
                        Universal directory for centralized user management
                      </li>
                      <li>Adaptive MFA with risk-based policies</li>
                      <li>Extensive integration network with 7000+ apps</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Container and Kubernetes Management</CardTitle>
                <CardDescription>
                  Orchestration and security for containerized applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Tools for deploying, managing, and securing containerized
                  applications and Kubernetes clusters.
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>
                    Container & Kubernetes security posture management (KSPM)
                    tools
                  </li>
                  <li>
                    Solutions that align with compliance standards and check
                    misconfigurations
                  </li>
                  <li>
                    Platforms that simplify deployment and management of
                    containerized applications
                  </li>
                  <li>
                    Service mesh technologies for microservices communication
                    and security
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Key Considerations for Tool Selection
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Integration Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tools should integrate seamlessly with existing IT stack through
                pre-built integrations or robust APIs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Automation Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Look for intuitive interfaces with drag-and-drop workflow
                builders, pre-built automation templates, and scriptable
                interfaces.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Security Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Enterprise-grade security features like SSO, MFA, role-based
                access controls, and granular permissions are essential.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cost-Effectiveness</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Consider pricing structure, alignment with business needs, and
                potential ROI through improved efficiency and security.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>AI Enhancement</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tools that leverage AI to augment human capabilities rather than
                replace them will be increasingly valuable for IT professionals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button asChild size="lg">
          <Link href="/skills">
            Explore Leadership Skills
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
