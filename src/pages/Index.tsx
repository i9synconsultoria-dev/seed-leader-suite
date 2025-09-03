import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, BarChart3, UserCheck, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-church.jpg";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Igreja Local
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Início
            </button>
            <button 
              onClick={() => setActiveSection('features')}
              className={`text-sm font-medium transition-colors ${activeSection === 'features' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => setActiveSection('dashboard')}
              className={`text-sm font-medium transition-colors ${activeSection === 'dashboard' ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}
            >
              Dashboard
            </button>
          </div>
          <Button 
            variant="default"
            onClick={() => navigate('/cadastros')}
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
          >
            Acessar Sistema
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Gestão Inteligente para 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Igreja Local</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Sistema completo para gerenciamento de membros, eventos e frequência da sua comunidade eclesiástica.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/cadastros')}
                  className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow text-lg px-8 py-6"
                >
                  Começar Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setActiveSection('features')}
                  className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5"
                >
                  Conhecer Recursos
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Comunidade Igreja Local" 
                className="w-full rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Funcionalidades Completas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tudo que sua igreja precisa para gerenciar membros, eventos e acompanhar o crescimento da comunidade
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Gestão de Membros</CardTitle>
                <CardDescription>
                  Cadastro completo de Seeds e Líderes com perfis personalizados e controle de acesso por igreja local
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Calendário de Eventos</CardTitle>
                <CardDescription>
                  Organize cultos, reuniões e atividades com informações detalhadas e controle de frequência
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <UserCheck className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Controle de Frequência</CardTitle>
                <CardDescription>
                  Acompanhe a participação dos membros nos eventos e gere relatórios detalhados de presença
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Dashboard Analítico</CardTitle>
                <CardDescription>
                  Visualize métricas importantes, frequência por usuário e estatísticas da sua igreja local
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Multi-tenant Seguro</CardTitle>
                <CardDescription>
                  Cada igreja local acessa apenas seus próprios dados com total segurança e privacidade
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <Heart className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-xl">Interface Amigável</CardTitle>
                <CardDescription>
                  Design moderno e intuitivo, pensado especialmente para facilitar o uso por líderes e membros
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-card shadow-elevated p-12">
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-bold">Pronto para Transformar sua Igreja Local?</h3>
              <p className="text-lg text-muted-foreground">
                Comece agora mesmo e veja como nossa plataforma pode ajudar sua comunidade a crescer de forma organizada.
              </p>
              <Button 
                size="lg"
                onClick={() => navigate('/cadastros')}
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow text-lg px-8 py-6"
              >
                Iniciar Cadastros
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;