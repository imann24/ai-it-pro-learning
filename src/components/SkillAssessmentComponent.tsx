'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function SkillAssessmentComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  
  const questions = [
    {
      question: "How comfortable are you with implementing AI solutions in IT operations?",
      options: [
        "Not familiar at all",
        "Basic understanding only",
        "Some practical experience",
        "Regularly implement AI solutions",
        "Expert level implementation experience"
      ]
    },
    {
      question: "What is your experience level with cloud security practices?",
      options: [
        "No experience",
        "Basic knowledge only",
        "Some hands-on experience",
        "Regularly implement cloud security",
        "Advanced implementation and strategy"
      ]
    },
    {
      question: "How would you rate your leadership skills in a hybrid work environment?",
      options: [
        "Minimal experience leading teams",
        "Led teams but not in hybrid settings",
        "Some experience with hybrid teams",
        "Regularly lead hybrid teams",
        "Expert at leading distributed teams"
      ]
    },
    {
      question: "How familiar are you with Infrastructure as Code (IaC) tools?",
      options: [
        "Not familiar",
        "Basic understanding only",
        "Some practical experience",
        "Regular use in projects",
        "Advanced implementation experience"
      ]
    },
    {
      question: "How would you rate your ability to communicate technical concepts to non-technical stakeholders?",
      options: [
        "Struggle with this regularly",
        "Can do it but not effectively",
        "Moderately effective",
        "Good at translating technical concepts",
        "Excellent at all levels of communication"
      ]
    }
  ]

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answerIndex
    setAnswers(newAnswers)
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResults(false)
  }

  const getRecommendations = () => {
    // Calculate focus areas based on lowest scores
    const focusAreas = []
    
    if (answers[0] < 3) focusAreas.push("AI Integration")
    if (answers[1] < 3) focusAreas.push("Cloud Security")
    if (answers[2] < 3) focusAreas.push("Hybrid Leadership")
    if (answers[3] < 3) focusAreas.push("Infrastructure Automation")
    if (answers[4] < 3) focusAreas.push("Technical Communication")
    
    return focusAreas
  }

  const getStrengths = () => {
    // Calculate strengths based on highest scores
    const strengths = []
    
    if (answers[0] >= 3) strengths.push("AI Integration")
    if (answers[1] >= 3) strengths.push("Cloud Security")
    if (answers[2] >= 3) strengths.push("Hybrid Leadership")
    if (answers[3] >= 3) strengths.push("Infrastructure Automation")
    if (answers[4] >= 3) strengths.push("Technical Communication")
    
    return strengths
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card>
        {!showResults ? (
          <>
            <CardHeader>
              <CardTitle>IT Professional Skills Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% complete</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-4">{questions[currentQuestion].question}</h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-3 rounded-md border border-input hover:bg-accent hover:text-accent-foreground transition-colors ${
                      answers[currentQuestion] === index ? 'bg-primary/10 border-primary' : ''
                    }`}
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </CardContent>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle>Your Assessment Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Your Strengths</h3>
                  {getStrengths().length > 0 ? (
                    <ul className="space-y-2">
                      {getStrengths().map((strength, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">Continue developing your skills in all areas.</p>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Recommended Focus Areas</h3>
                  {getRecommendations().length > 0 ? (
                    <ul className="space-y-2">
                      {getRecommendations().map((area, index) => (
                        <li key={index} className="flex items-center">
                          <ArrowRight className="h-5 w-5 text-primary mr-2" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">Great job! You're proficient in all assessed areas.</p>
                  )}
                </div>
                
                <div className="pt-4">
                  <Button onClick={resetAssessment}>Retake Assessment</Button>
                </div>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  )
}
