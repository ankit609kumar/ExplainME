
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";

export function ProgressDashboard() {
  // Sample data - in a real app this would come from the user's activity
  const weeklyData = [
    { day: "Mon", topics: 3, quizzes: 2, score: 85 },
    { day: "Tue", topics: 5, quizzes: 4, score: 92 },
    { day: "Wed", topics: 2, quizzes: 2, score: 78 },
    { day: "Thu", topics: 6, quizzes: 5, score: 88 },
    { day: "Fri", topics: 4, quizzes: 3, score: 95 },
    { day: "Sat", topics: 8, quizzes: 6, score: 90 },
    { day: "Sun", topics: 3, quizzes: 2, score: 85 },
  ];

  const topicsData = [
    { name: "JavaScript", value: 45 },
    { name: "Python", value: 25 },
    { name: "React", value: 20 },
    { name: "CSS", value: 10 },
  ];

  const COLORS = ["#9b87f5", "#7E69AB", "#6E59A5", "#504099"];

  const stats = [
    { label: "Topics Learned", value: "124" },
    { label: "Quiz Score Avg", value: "88%" },
    { label: "Streak", value: "14 days" },
    { label: "Challenges", value: "7/12" },
  ];

  return (
    <div className="w-full glass-card rounded-xl p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Learning Progress</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-white/10 bg-explainify-darker">
            <CardContent className="p-4">
              <p className="text-sm text-white/70">{stat.label}</p>
              <h2 className="text-2xl font-bold text-explainify-purple">{stat.value}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4 bg-explainify-darker">
          <TabsTrigger value="activity">Weekly Activity</TabsTrigger>
          <TabsTrigger value="scores">Quiz Scores</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity" className="mt-0">
          <Card className="border-white/10 bg-explainify-darker">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Weekly Learning Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="day" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#1A1F2C", border: "1px solid #444" }} 
                      labelStyle={{ color: "#eee" }}
                    />
                    <Bar dataKey="topics" name="Topics Learned" fill="#9b87f5" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="quizzes" name="Quizzes Completed" fill="#6E59A5" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="scores" className="mt-0">
          <Card className="border-white/10 bg-explainify-darker">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Quiz Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="day" stroke="#888" />
                    <YAxis stroke="#888" domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#1A1F2C", border: "1px solid #444" }} 
                      labelStyle={{ color: "#eee" }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      name="Quiz Score" 
                      stroke="#9b87f5" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="topics" className="mt-0">
          <Card className="border-white/10 bg-explainify-darker">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">Topics Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topicsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {topicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: "#1A1F2C", border: "1px solid #444" }} 
                      labelStyle={{ color: "#eee" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
