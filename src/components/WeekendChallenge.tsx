
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WeekendChallenge() {
  return (
    <div className="w-full rounded-xl overflow-hidden mt-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-explainify-purple to-explainify-accent opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative p-6 z-10">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center text-explainify-purple mb-2">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">Weekend Challenge</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Build a RESTful API with Authentication</h3>
            <p className="text-white/70 text-sm mb-4 max-w-lg">
              Create a fully functional API with user authentication, data validation, and proper error handling. 
              Earn bonus points for implementing rate limiting and documentation.
            </p>
            <div className="flex space-x-2">
              <Button className="bg-explainify-purple hover:bg-explainify-accent text-white">
                Start Challenge
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                View Details
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 rounded-full bg-explainify-purple flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-xs text-white/80">days left</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
