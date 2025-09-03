import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserPlus, Calendar, ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CadastroSeed from "@/components/CadastroSeed";
import CadastroLider from "@/components/CadastroLider";
import CadastroEvento from "@/components/CadastroEvento";

const Cadastros = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('seeds');

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Sistema de Cadastros</h1>
          <p className="text-muted-foreground">
            Gerencie membros, líderes e eventos da sua igreja local
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-secondary/50 p-1">
            <TabsTrigger 
              value="seeds" 
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Users className="h-4 w-4" />
              Seeds
            </TabsTrigger>
            <TabsTrigger 
              value="lideres"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <UserPlus className="h-4 w-4" />
              Líderes
            </TabsTrigger>
            <TabsTrigger 
              value="eventos"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Calendar className="h-4 w-4" />
              Eventos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="seeds" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Cadastro de Seeds (Membros)
                </CardTitle>
                <CardDescription>
                  Cadastre novos membros da comunidade com informações completas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CadastroSeed />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="lideres" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  Cadastro de Líderes
                </CardTitle>
                <CardDescription>
                  Registre líderes com permissões avançadas de gestão
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CadastroLider />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="eventos" className="space-y-6">
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Cadastro de Eventos
                </CardTitle>
                <CardDescription>
                  Crie e organize eventos, cultos e atividades da igreja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CadastroEvento />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Cadastros;