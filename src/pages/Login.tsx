
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle authentication
    console.log("Login attempt:", { email });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-explainify-dark p-4">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-explainify-purple to-explainify-accent-light text-transparent bg-clip-text mb-2">
            Explainify
          </h1>
          <p className="text-white/60">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="glass-card p-8 rounded-xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/5 border-white/10 text-white pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-white/60">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-explainify-purple hover:text-explainify-accent-light">
                Forgot password?
              </a>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-explainify-purple hover:bg-explainify-purple/90 text-white purple-glow"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Sign in
            </Button>
          </form>
        </div>

        {/* Sign up link */}
        <p className="mt-6 text-center text-white/60">
          Don't have an account?{" "}
          <a href="#" className="text-explainify-purple hover:text-explainify-accent-light">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
