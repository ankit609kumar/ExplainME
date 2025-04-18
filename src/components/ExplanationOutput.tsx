
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ExplanationOutput() {
  // In a real app, these would come from API responses
  const sampleData = {
    topic: "JavaScript Promise",
    explanation: "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Essentially, it's a placeholder for a value that might not be available yet. Promises provide a cleaner way to handle asynchronous operations compared to traditional callbacks. They allow you to chain operations and handle errors more gracefully.",
    analogy: "Think of a Promise like a receipt you get when you order food at a restaurant. The receipt is a promise that you'll get your food (a successful result) at some point in the future. You can continue doing other things while waiting, and the receipt has mechanisms to notify you when your food is ready (then() method) or if there's a problem with your order (catch() method).",
    code: `// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an async operation
  setTimeout(() => {
    const success = true;
    
    if (success) {
      resolve("Operation completed successfully!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

// Using the promise
myPromise
  .then(result => {
    console.log(result); // "Operation completed successfully!"
  })
  .catch(error => {
    console.error(error);
  });`,
  };

  return (
    <div className="w-full glass-card rounded-xl p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4 text-explainify-purple">{sampleData.topic}</h2>
      
      <Tabs defaultValue="explanation" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4 bg-explainify-darker">
          <TabsTrigger value="explanation">Explanation</TabsTrigger>
          <TabsTrigger value="analogy">Real-World Analogy</TabsTrigger>
          <TabsTrigger value="code">Code Example</TabsTrigger>
        </TabsList>
        
        <TabsContent value="explanation" className="mt-0">
          <Card className="border-white/10 bg-explainify-darker shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-white">Simplified Explanation</CardTitle>
              <CardDescription>Understanding at the selected level</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed">{sampleData.explanation}</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analogy" className="mt-0">
          <Card className="border-white/10 bg-explainify-darker shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-white">Real-World Analogy</CardTitle>
              <CardDescription>A familiar comparison to help understanding</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 leading-relaxed">{sampleData.analogy}</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="code" className="mt-0">
          <Card className="border-white/10 bg-explainify-darker shadow-md">
            <CardHeader>
              <CardTitle className="text-lg text-white">Code Example</CardTitle>
              <CardDescription>Practical implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-black/50 p-4 rounded-md overflow-x-auto text-green-400 text-sm">
                {sampleData.code}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
