import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login e redirecionar para home
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-16">
        <h1 className="text-4xl font-bold text-foreground tracking-wider">TEAM SEEDS</h1>
        <div className="flex space-x-1 mt-2">
          <div className="w-8 h-1 bg-primary rounded"></div>
          <div className="w-6 h-1 bg-primary/70 rounded"></div>
          <div className="w-4 h-1 bg-primary/50 rounded"></div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
        {/* Email Input */}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-12 h-14 bg-muted border-border text-foreground placeholder:text-muted-foreground rounded-lg"
            required
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-12 pr-12 h-14 bg-muted border-border text-foreground placeholder:text-muted-foreground rounded-lg"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full h-14 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold text-lg rounded-lg"
        >
          Entrar
        </Button>

        {/* Forgot Password */}
        <div className="text-center">
          <button
            type="button"
            className="text-foreground hover:text-primary text-base underline"
          >
            Esqueci a senha
          </button>
        </div>
      </form>

      {/* Register Link */}
      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          Ainda não tem cadastro?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-foreground hover:text-primary underline"
          >
            Cadastre-se
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;