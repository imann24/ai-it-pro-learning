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
  Lightbulb,
  Shield,
  Server,
  Cloud,
  Brain,
} from "lucide-react";
import Link from "next/link";

export default function TechnologiesPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Emerging Technologies for Senior IT Technicians in 2025
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Stay ahead of the curve with these key technology trends that will
          shape the IT landscape in 2025 and beyond.
        </p>

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-3 mb-8 gap-2 sm:gap-1 p-1">
            <TabsTrigger value="ai">AI Imperatives</TabsTrigger>
            <TabsTrigger value="computing">New Computing</TabsTrigger>
            <TabsTrigger value="human">Human-Machine Synergy</TabsTrigger>
          </TabsList>

          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Agentic AI</CardTitle>
                <CardDescription>
                  Autonomous AI that can plan and take action to achieve goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Agentic AI creates a virtual workforce of agents that can
                  assist, offload, and augment human work. As a senior IT
                  technician, you'll need to ensure robust guardrails to align
                  with provider and user intentions.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>AI prompt engineering and system design</li>
                  <li>AI safety and alignment techniques</li>
                  <li>Integration of AI agents with existing systems</li>
                  <li>Monitoring and governance of autonomous systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Governance Platforms</CardTitle>
                <CardDescription>
                  Solutions for managing the legal, ethical, and operational
                  performance of AI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  These platforms help create, manage, and enforce policies for
                  responsible AI use, explain how AI systems work, manage model
                  lifecycles, and provide transparency.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>AI policy development and implementation</li>
                  <li>Model lifecycle management</li>
                  <li>Explainable AI techniques</li>
                  <li>Compliance and risk assessment for AI systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Disinformation Security</CardTitle>
                <CardDescription>
                  Technologies aimed at systematically discerning trust
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This emerging technology category decreases fraud by
                  strengthening controls for validating identity, prevents
                  account takeover through continuous risk scoring and
                  contextual awareness, and protects brand reputation by
                  identifying harmful narratives.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Advanced identity verification systems</li>
                  <li>Content authenticity validation</li>
                  <li>Risk scoring and anomaly detection</li>
                  <li>Digital forensics for manipulated media</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="computing" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Post-quantum Cryptography (PQC)</CardTitle>
                <CardDescription>
                  Data protection resistant to quantum computing decryption
                  risks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  PQC protects data from security risks that will come with the
                  advent of quantum computing. These algorithms are not drop-in
                  replacements for existing asymmetric algorithms, requiring
                  careful implementation.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Understanding of quantum-resistant algorithms</li>
                  <li>Cryptographic migration planning</li>
                  <li>Security architecture redesign</li>
                  <li>Risk assessment for cryptographic vulnerabilities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Energy-efficient Computing</CardTitle>
                <CardDescription>
                  Increasing sustainability through efficient architecture and
                  renewable energy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This approach helps address legal, commercial, and social
                  pressures to improve sustainability by reducing carbon
                  footprint through more efficient architecture, code and
                  algorithms, hardware optimized for efficiency, and renewable
                  energy.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Green IT infrastructure design</li>
                  <li>Energy consumption monitoring and optimization</li>
                  <li>Efficient code and algorithm development</li>
                  <li>Renewable energy integration for data centers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hybrid Computing</CardTitle>
                <CardDescription>
                  Combining different compute, storage, and network mechanisms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Hybrid computing creates highly efficient, high-speed,
                  transformative innovation environments and enables AI that
                  performs beyond current technological limits. It combines
                  traditional computing with specialized processors.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Multi-architecture system design</li>
                  <li>Specialized hardware integration (GPUs, TPUs, FPGAs)</li>
                  <li>Workload optimization across computing resources</li>
                  <li>Distributed systems management</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="human" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Spatial Computing</CardTitle>
                <CardDescription>
                  Digitally enhancing the physical world using AR/VR
                  technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Spatial computing addresses consumer demand for immersive
                  experiences in gaming, education, and e-commerce, while
                  providing sophisticated visualization tools for
                  decision-making and efficiency in various industries.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>AR/VR application development</li>
                  <li>3D modeling and spatial mapping</li>
                  <li>Gesture and voice interface design</li>
                  <li>Performance optimization for immersive experiences</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Polyfunctional Robots</CardTitle>
                <CardDescription>
                  Robots capable of performing multiple tasks and switching
                  between them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  These robots improve efficiency, provide faster ROI, and can
                  be deployed quickly without architectural changes or bolt-down
                  infrastructure, making them flexible assets for various
                  environments.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Robotic process automation</li>
                  <li>Robot-human collaboration frameworks</li>
                  <li>Sensor integration and environmental mapping</li>
                  <li>Task scheduling and prioritization systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="p-2 bg-primary/10 rounded-full w-fit mb-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Neurological Enhancement</CardTitle>
                <CardDescription>
                  Improving cognitive abilities with brain-computer interfaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  This technology enables human upskilling, safety improvements,
                  personalized education, and allows older people to work longer
                  by reading and decoding brain activity to enhance human
                  capabilities.
                </p>
                <h4 className="font-semibold mb-2">Key Skills Needed:</h4>
                <ul className="list-disc pl-5 mb-4 space-y-1">
                  <li>Brain-computer interface integration</li>
                  <li>Neural data processing and interpretation</li>
                  <li>Ethical frameworks for cognitive enhancement</li>
                  <li>Security for neural technologies</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Key Areas of Focus for Senior IT Technicians
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Integration and Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Understanding how to implement, manage, and govern AI systems,
                particularly agentic AI that can operate autonomously.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cybersecurity Evolution</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Adapting to new security paradigms including post-quantum
                cryptography and disinformation security to protect against
                emerging threats.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Computing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Implementing energy-efficient computing practices to reduce
                carbon footprint and meet sustainability goals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Advanced Computing Architectures</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Developing skills in hybrid computing and ambient invisible
                intelligence to enable more powerful and intuitive computing
                experiences.
              </p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Human-Machine Interfaces</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Working with spatial computing, polyfunctional robots, and
                potentially neurological enhancement technologies to create more
                effective human-machine collaboration.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button asChild size="lg">
          <Link href="/certifications">
            Explore Certifications
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
