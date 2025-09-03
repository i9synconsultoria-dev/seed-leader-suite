import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, BarChart3, UserCheck, Heart, TrendingUp, Crown, Clock, Plus, Settings, FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Index = () => {
  console.log("Index component is loading");
  const navigate = useNavigate();
  console.log("Navigate function initialized");

  // Dados mockados do dashboard
  const stats = {
    totalSeeds: 145,
    totalLideres: 8,
    eventosEstesMes: 12,
    frequenciaMedia: 78
  };
  const proximosEventos = [{
    id: 1,
    nome: "Culto de Domingo",
    data: "2024-01-14",
    horario: "09:00",
    local: "Templo Principal"
  }, {
    id: 2,
    nome: "Reunião de Jovens",
    data: "2024-01-16",
    horario: "19:30",
    local: "Sala de Jovens"
  }, {
    id: 3,
    nome: "Estudo Bíblico",
    data: "2024-01-18",
    horario: "20:00",
    local: "Sala 2"
  }];
  const novosMembros = [{
    nome: "Carlos Eduardo",
    tipo: "Seed",
    dataIngresso: "2024-01-10"
  }, {
    nome: "Beatriz Lima",
    tipo: "Seed",
    dataIngresso: "2024-01-08"
  }, {
    nome: "Rafael Santos",
    tipo: "Líder",
    dataIngresso: "2024-01-05"
  }];
  const destaques = [{
    titulo: "Melhor Frequência",
    descricao: "78% de presença este mês",
    tipo: "success"
  }, {
    titulo: "12 Novos Membros",
    descricao: "Crescimento de 8% este mês",
    tipo: "info"
  }, {
    titulo: "Evento em Destaque",
    descricao: "Retiro Espiritual - 20/01",
    tipo: "warning"
  }];
  const menuFuncionalidades = [{
    titulo: "Cadastros",
    descricao: "Gerenciar Seeds, Líderes e Eventos",
    icon: Users,
    rota: "/cadastros"
  }, {
    titulo: "Dashboard",
    descricao: "Visualizar métricas e relatórios",
    icon: BarChart3,
    rota: "/dashboard"
  }, {
    titulo: "Frequência",
    descricao: "Controlar presença em eventos",
    icon: UserCheck,
    rota: "/dashboard"
  }, {
    titulo: "Relatórios",
    descricao: "Gerar relatórios detalhados",
    icon: FileText,
    rota: "/dashboard"
  }];
  console.log("About to render Index component");
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Igreja Local
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/dashboard')} className="text-muted-foreground hover:text-primary">
              Dashboard
            </Button>
            <Button variant="ghost" onClick={() => navigate('/cadastros')} className="text-muted-foreground hover:text-primary">
              Cadastros
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="py-12 bg-gradient-hero/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              Bem-vindo ao Sistema 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Igreja Local</span>
            </h1>
            
          </div>
        </div>
      </section>

      {/* Menu de Funcionalidades */}
      <section className="py-12">
        
      </section>

      {/* Dashboard Preview Carousel */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Visão Geral dos Painéis</h2>
            <p className="text-muted-foreground">Métricas importantes da sua igreja local</p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total de Seeds</CardTitle>
                    <Users className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{stats.totalSeeds}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-success">+12</span> novos este mês
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Líderes Ativos</CardTitle>
                    <Crown className="h-4 w-4 text-accent" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-accent">{stats.totalLideres}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-success">+2</span> novos este mês
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Eventos do Mês</CardTitle>
                    <Calendar className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{stats.eventosEstesMes}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-success">+3</span> a mais que o anterior
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Frequência Média</CardTitle>
                    <TrendingUp className="h-4 w-4 text-success" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-success">{stats.frequenciaMedia}%</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-success">+5%</span> em relação ao mês anterior
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Grid de Seções */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Próximos Eventos */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Próximos Eventos
                </CardTitle>
                <CardDescription>Eventos programados para os próximos dias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {proximosEventos.map(evento => <div key={evento.id} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{evento.nome}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {new Date(evento.data).toLocaleDateString('pt-BR')} • {evento.horario}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>)}
                <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/dashboard')}>
                  Ver Todos os Eventos
                </Button>
              </CardContent>
            </Card>

            {/* Novos Membros */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Novos Membros
                </CardTitle>
                <CardDescription>Membros cadastrados recentemente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {novosMembros.map((membro, index) => <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{membro.nome}</p>
                      <p className="text-sm text-muted-foreground">
                        Ingresso: {new Date(membro.dataIngresso).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <Badge variant={membro.tipo === 'Líder' ? 'default' : 'secondary'}>
                      {membro.tipo}
                    </Badge>
                  </div>)}
                <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/cadastros')}>
                  <Plus className="h-4 w-4 mr-2" />
                  Cadastrar Novo Membro
                </Button>
              </CardContent>
            </Card>

            {/* Destaques */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Destaques
                </CardTitle>
                <CardDescription>Informações importantes e conquistas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {destaques.map((destaque, index) => <div key={index} className="p-3 bg-secondary/20 rounded-lg">
                    <p className="font-medium mb-1">{destaque.titulo}</p>
                    <p className="text-sm text-muted-foreground">{destaque.descricao}</p>
                  </div>)}
                <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/dashboard')}>
                  Ver Dashboard Completo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;