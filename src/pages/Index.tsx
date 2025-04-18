
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ExplainifySidebar } from "@/components/ExplainifySidebar";
import { TopicInput } from "@/components/TopicInput";
import { ExplanationOutput } from "@/components/ExplanationOutput";
import { QuizSection } from "@/components/QuizSection";
import { BookReferences, YouTubeLinks } from "@/components/ResourcePanels";
import { WeekendChallenge } from "@/components/WeekendChallenge";
import { ProgressDashboard } from "@/components/ProgressDashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <ExplainifySidebar />
        <main className="flex-1 overflow-auto p-4 md:p-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white">Explainify</h1>
              <SidebarTrigger className="md:hidden" />
            </div>
            
            <div>
              <TopicInput />
              <ExplanationOutput />
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
                <div>
                  <BookReferences />
                  <YouTubeLinks />
                </div>
                <div>
                  <QuizSection />
                </div>
              </div>
              
              <WeekendChallenge />
              <ProgressDashboard />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
