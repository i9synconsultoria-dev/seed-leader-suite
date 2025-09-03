import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  UserCheck, 
  BarChart3, 
  ArrowLeft, 
  Heart,
  TrendingUp,
  Clock,
  MapPin,
  Crown
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  // Dados mockados para demonstração
  const stats = {
    totalSeeds: 145,
    totalLideres: 8,
    eventosEstesMes: 12,
    frequenciaMedia: 78
  };

  const recentEvents = [
    { id: 1, nome: "Culto de Domingo", data: "2024-01-07", presentes: 89, total: 120 },
    { id: 2, nome: "Reunião de Jovens", data: "2024-01-05", presentes: 34, total: 45 },
    { id: 3, nome: "Estudo Bíblico", data: "2024-01-03", presentes: 28, total: 35 },
  ];

  const topMembers = [
    { nome: "Maria Silva", frequencia: 95, eventos: 18 },
    { nome: "João Santos", frequencia: 92, eventos: 17 },
    { nome: "Ana Costa", frequencia: 88, eventos: 16 },
    { nome: "Pedro Lima", frequencia: 85, eventos: 15 },
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/cadastros')}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cadastros
          </Button>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard - Igreja Local</h1>
          <p className="text-muted-foreground">
            Visualize as métricas e dados da sua igreja local
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto bg-secondary/50 p-1">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Visão Geral
            </TabsTrigger>
            <TabsTrigger 
              value="events"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Eventos
            </TabsTrigger>
            <TabsTrigger 
              value="members"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Membros
            </TabsTrigger>
            <TabsTrigger 
              value="reports"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Relatórios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            </div>

            {/* Recent Events & Top Members */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Eventos Recentes
                  </CardTitle>
                  <CardDescription>
                    Últimos eventos realizados e sua frequência
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentEvents.map(event => (
                    <div key={event.id} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{event.nome}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {new Date(event.data).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-1">
                          {Math.round((event.presentes / event.total) * 100)}%
                        </Badge>
                        <p className="text-xs text-muted-foreground">
                          {event.presentes}/{event.total}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-success" />
                    Membros Mais Assíduos
                  </CardTitle>
                  <CardDescription>
                    Seeds com maior frequência aos eventos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{member.nome}</p>
                          <p className="text-xs text-muted-foreground">
                            {member.eventos} eventos participados
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-success text-success-foreground">
                        {member.frequencia}%
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Calendário de Eventos</CardTitle>
                <CardDescription>
                  Eventos programados e realizados da igreja local
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Calendário em Desenvolvimento</h3>
                  <p className="text-muted-foreground">
                    O calendário interativo será implementado em breve
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Gestão de Membros</CardTitle>
                <CardDescription>
                  Lista completa de Seeds e Líderes cadastrados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Lista de Membros</h3>
                  <p className="text-muted-foreground mb-4">
                    A gestão detalhada de membros será implementada em breve
                  </p>
                  <Button onClick={() => navigate('/cadastros')}>
                    Ir para Cadastros
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>Relatórios Detalhados</CardTitle>
                <CardDescription>
                  Análises e relatórios personalizados da igreja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Relatórios Avançados</h3>
                  <p className="text-muted-foreground">
                    Gráficos detalhados e relatórios personalizados em desenvolvimento
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;