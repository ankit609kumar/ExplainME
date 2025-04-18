
import { useState } from "react";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function TopicInput() {
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("high-school");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Topic:", topic, "Level:", level);
    // In a real app, this would send the data to an API
  };

  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Explain Any Topic</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            placeholder="Enter a topic you want to learn about..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="pl-4 pr-12 py-6 bg-gray-50 border-gray-200 text-gray-900 focus:border-explainify-purple focus:ring-explainify-purple"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-explainify-purple hover:text-explainify-purple hover:bg-explainify-purple/10"
          >
            <Mic className="h-5 w-5" />
            <span className="sr-only">Voice Input</span>
          </Button>
        </div>
        
        <div>
          <p className="text-sm font-medium mb-2 text-gray-700">Explanation Level</p>
          <RadioGroup
            defaultValue="high-school"
            value={level}
            onValueChange={setLevel}
            className="grid grid-cols-2 gap-2 md:grid-cols-4"
          >
            <div>
              <RadioGroupItem
                value="like-im-5"
                id="level-1"
                className="peer sr-only"
              />
              <Label
                htmlFor="level-1"
                className="flex flex-col items-center justify-between rounded-md border border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-explainify-purple peer-data-[state=checked]:border-explainify-purple peer-data-[state=checked]:text-explainify-purple"
              >
                <span className="text-sm font-medium text-gray-900">Like I'm 5</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem
                value="high-school"
                id="level-2"
                className="peer sr-only"
              />
              <Label
                htmlFor="level-2"
                className="flex flex-col items-center justify-between rounded-md border border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-explainify-purple peer-data-[state=checked]:border-explainify-purple peer-data-[state=checked]:text-explainify-purple"
              >
                <span className="text-sm font-medium text-gray-900">High School</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem
                value="developer"
                id="level-3"
                className="peer sr-only"
              />
              <Label
                htmlFor="level-3"
                className="flex flex-col items-center justify-between rounded-md border border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-explainify-purple peer-data-[state=checked]:border-explainify-purple peer-data-[state=checked]:text-explainify-purple"
              >
                <span className="text-sm font-medium text-gray-900">Developer</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem
                value="expert"
                id="level-4"
                className="peer sr-only"
              />
              <Label
                htmlFor="level-4"
                className="flex flex-col items-center justify-between rounded-md border border-gray-200 bg-white p-4 hover:bg-gray-50 hover:text-explainify-purple peer-data-[state=checked]:border-explainify-purple peer-data-[state=checked]:text-explainify-purple"
              >
                <span className="text-sm font-medium text-gray-900">Expert</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 bg-explainify-purple hover:bg-explainify-purple/90 text-white purple-glow"
        >
          Explain This Topic
        </Button>
      </form>
    </div>
  );
}
