
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function QuizSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  // In a real app, these would be generated based on the topic
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary purpose of JavaScript Promises?",
      options: [
        { id: "a", text: "To make the code run faster" },
        { id: "b", text: "To handle asynchronous operations" },
        { id: "c", text: "To replace variables in JavaScript" },
        { id: "d", text: "To create user interfaces" },
      ],
      correctAnswer: "b",
    },
    {
      id: 2,
      question: "Which method is used to handle successful Promise resolutions?",
      options: [
        { id: "a", text: "then()" },
        { id: "b", text: "catch()" },
        { id: "c", text: "success()" },
        { id: "d", text: "resolve()" },
      ],
      correctAnswer: "a",
    },
    {
      id: 3,
      question: "What state is a Promise in when it's neither fulfilled nor rejected?",
      options: [
        { id: "a", text: "Waiting" },
        { id: "b", text: "Idle" },
        { id: "c", text: "Pending" },
        { id: "d", text: "Loading" },
      ],
      correctAnswer: "c",
    },
  ];

  const handleSelectAnswer = (questionId: number, optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId,
    });
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const correctAnswers = quizQuestions.filter(
    (q) => selectedAnswers[q.id] === q.correctAnswer
  ).length;

  return (
    <div className="w-full glass-card rounded-xl p-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Test Your Knowledge</h2>
        {showResults && (
          <div className="bg-explainify-purple/20 rounded-full px-4 py-1 text-explainify-purple">
            Score: {correctAnswers}/{quizQuestions.length}
          </div>
        )}
      </div>

      <div className="space-y-6">
        {quizQuestions.map((question) => (
          <Card key={question.id} className="border-white/10 bg-explainify-darker shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white flex items-start">
                <span className="mr-2">{question.question}</span>
                {showResults && (
                  selectedAnswers[question.id] === question.correctAnswer ? 
                  <CheckCircle2 className="text-green-500 h-5 w-5 mt-1" /> : 
                  <XCircle className="text-red-500 h-5 w-5 mt-1" />
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedAnswers[question.id]}
                onValueChange={(value) => handleSelectAnswer(question.id, value)}
                disabled={showResults}
              >
                <div className="grid gap-2">
                  {question.options.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <RadioGroupItem
                        value={option.id}
                        id={`q${question.id}-${option.id}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`q${question.id}-${option.id}`}
                        className={`flex flex-1 items-center rounded-md border border-white/10 p-3 hover:bg-explainify-dark/80 hover:text-explainify-purple peer-data-[state=checked]:border-explainify-purple peer-data-[state=checked]:text-explainify-purple
                          ${showResults && option.id === question.correctAnswer ? "border-green-500 text-green-500" : ""}`}
                      >
                        <span className="text-sm mr-2">{option.id.toUpperCase()}</span>
                        <span className="text-sm">{option.text}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>

      {!showResults && (
        <Button
          onClick={handleSubmitQuiz}
          className="w-full mt-4 bg-explainify-purple hover:bg-explainify-purple/90 text-white"
        >
          Submit Answers
        </Button>
      )}
      
      {showResults && (
        <Button
          onClick={() => {
            setShowResults(false);
            setSelectedAnswers({});
          }}
          className="w-full mt-4 border border-explainify-purple bg-transparent hover:bg-explainify-purple/20 text-explainify-purple"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}
